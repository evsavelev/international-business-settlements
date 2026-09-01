"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const MAX_URL =
  "https://max.ru/u/f9LHodD0cOLA8K6W--M2bxoxsul1kbY8OcHdpUtg4dfzPcskSNsSvtuLl0k";

export function PaymentRequestForm() {
  const [preparedRequest, setPreparedRequest] = useState<{
    message: string;
    url: string;
  } | null>(null);
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">(
    "idle",
  );

  function openMessenger() {
    if (!preparedRequest) return;
    window.open(preparedRequest.url, "_blank", "noopener,noreferrer");
  }

  async function copyRequestText() {
    if (!preparedRequest) return;

    try {
      await navigator.clipboard.writeText(preparedRequest.message);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("error");
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const messenger = String(form.get("messenger") || "whatsapp");
    const message = [
      "Заявка с сайта «Международные расчёты для бизнеса»",
      `Что необходимо: ${form.get("task") || "—"}`,
      `Страна отправителя: ${form.get("senderCountry") || "—"}`,
      `Страна получателя: ${form.get("recipientCountry") || "—"}`,
      `Сумма: ${form.get("amount") || "—"}`,
      `Валюта: ${form.get("currency") || "—"}`,
      `Назначение: ${form.get("purpose") || "—"}`,
      `Кто проводит операцию: ${form.get("clientType") || "—"}`,
      `Имя: ${form.get("name") || "—"}`,
      `Телефон: ${form.get("phone") || "—"}`,
    ].join("\n");
    const encoded = encodeURIComponent(message);

    const urls: Record<string, string> = {
      whatsapp: `https://wa.me/79048701122?text=${encoded}`,
      telegram: `https://t.me/RECOINRECOIN?text=${encoded}`,
      max: `${MAX_URL}?text=${encoded}`,
    };

    const url = urls[messenger] ?? urls.whatsapp;
    setPreparedRequest({ message, url });
    setCopyStatus("idle");
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="request-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <span className="eyebrow eyebrow-dark">Параметры сделки</span>
        <h3>Получить расчёт условий</h3>
        <p>
          Чем точнее вводные, тем быстрее мы сможем оценить доступный вариант
          расчёта.
        </p>
      </div>

      <div className="form-grid">
        <label className="form-field form-field-wide">
          <span>Что необходимо? *</span>
          <select name="task" required defaultValue="">
            <option value="" disabled>
              Выберите задачу
            </option>
            <option>Отправить платёж за рубеж</option>
            <option>Получить платёж из-за рубежа</option>
            <option>Оплатить иностранного поставщика</option>
            <option>Международный коммерческий расчёт</option>
            <option>Другой вопрос</option>
          </select>
        </label>

        <label className="form-field">
          <span>Страна отправителя *</span>
          <Input name="senderCountry" placeholder="Например, Россия" maxLength={80} required />
        </label>
        <label className="form-field">
          <span>Страна получателя *</span>
          <Input name="recipientCountry" placeholder="Укажите страну" maxLength={80} required />
        </label>
        <label className="form-field">
          <span>Сумма *</span>
          <Input name="amount" placeholder="Например, 50 000" maxLength={50} required />
        </label>
        <label className="form-field">
          <span>Валюта *</span>
          <Input name="currency" placeholder="USD, EUR, CNY…" maxLength={20} required />
        </label>
        <label className="form-field form-field-wide">
          <span>Назначение платежа *</span>
          <Textarea
            name="purpose"
            placeholder="Товар, оборудование, услуги или другая задача"
            maxLength={500}
            required
          />
        </label>
        <label className="form-field">
          <span>Кто проводит операцию? *</span>
          <select name="clientType" required defaultValue="">
            <option value="" disabled>
              Выберите вариант
            </option>
            <option>Юридическое лицо</option>
            <option>ИП</option>
            <option>Физическое лицо</option>
          </select>
        </label>
        <label className="form-field">
          <span>Удобный мессенджер *</span>
          <select name="messenger" required defaultValue="whatsapp">
            <option value="whatsapp">WhatsApp</option>
            <option value="telegram">Telegram</option>
            <option value="max">MAX</option>
          </select>
        </label>
        <label className="form-field">
          <span>Имя *</span>
          <Input
            name="name"
            placeholder="Как к вам обращаться"
            maxLength={100}
            autoComplete="name"
            required
          />
        </label>
        <label className="form-field">
          <span>Телефон *</span>
          <Input
            name="phone"
            type="tel"
            inputMode="tel"
            placeholder="+7 900 000-00-00"
            maxLength={40}
            autoComplete="tel"
            required
          />
        </label>
      </div>

      <Button className="submit-button" size="lg" type="submit">
        Получить расчёт условий
        <ArrowUpRight aria-hidden="true" />
      </Button>

      {preparedRequest ? (
        <div className="form-success">
          <CheckCircle2 aria-hidden="true" />
          <div>
            <span className="block" role="status">
              Заявка подготовлена. Подтвердите отправку в мессенджере.
            </span>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
              <Button
                className="h-auto p-0 text-xs"
                onClick={openMessenger}
                size="sm"
                type="button"
                variant="link"
              >
                Открыть мессенджер ещё раз
              </Button>
              <Button
                className="h-auto p-0 text-xs"
                onClick={copyRequestText}
                size="sm"
                type="button"
                variant="link"
              >
                Скопировать текст заявки
              </Button>
            </div>
            {copyStatus === "copied" ? (
              <span className="mt-2 block" role="status">
                Текст заявки скопирован.
              </span>
            ) : null}
            {copyStatus === "error" ? (
              <span className="mt-2 block" role="status">
                Не удалось скопировать текст. Попробуйте ещё раз.
              </span>
            ) : null}
          </div>
        </div>
      ) : (
        <p className="form-note">
          Нажимая кнопку, вы открываете выбранный мессенджер с подготовленной
          заявкой. Не указывайте пароли, коды подтверждения и данные доступа к
          счетам.
        </p>
      )}
    </form>
  );
}
