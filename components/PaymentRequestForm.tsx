"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const MAX_URL =
  "https://max.ru/u/f9LHodD0cOLA8K6W--M2bxoxsul1kbY8OcHdpUtg4dfzPcskSNsSvtuLl0k";

export function PaymentRequestForm() {
  const [sent, setSent] = useState(false);

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

    setSent(true);
    window.open(urls[messenger] ?? urls.whatsapp, "_blank", "noopener,noreferrer");
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
          <Input name="senderCountry" placeholder="Например, Россия" required />
        </label>
        <label className="form-field">
          <span>Страна получателя *</span>
          <Input name="recipientCountry" placeholder="Укажите страну" required />
        </label>
        <label className="form-field">
          <span>Сумма *</span>
          <Input name="amount" placeholder="Например, 50 000" required />
        </label>
        <label className="form-field">
          <span>Валюта *</span>
          <Input name="currency" placeholder="USD, EUR, CNY…" required />
        </label>
        <label className="form-field form-field-wide">
          <span>Назначение платежа *</span>
          <Textarea
            name="purpose"
            placeholder="Товар, оборудование, услуги или другая задача"
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
          <Input name="name" placeholder="Как к вам обращаться" required />
        </label>
        <label className="form-field">
          <span>Телефон *</span>
          <Input
            name="phone"
            type="tel"
            inputMode="tel"
            placeholder="+7 900 000-00-00"
            required
          />
        </label>
      </div>

      <Button className="submit-button" size="lg" type="submit">
        Получить расчёт условий
        <ArrowUpRight aria-hidden="true" />
      </Button>

      {sent ? (
        <p className="form-success" role="status">
          <CheckCircle2 aria-hidden="true" />
          Заявка подготовлена — подтвердите отправку в открывшемся мессенджере.
        </p>
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
