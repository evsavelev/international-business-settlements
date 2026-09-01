import {
  ArrowDownLeft,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Banknote,
  Building2,
  Check,
  ChevronRight,
  CircleDollarSign,
  Container,
  FileCheck2,
  FileText,
  Globe2,
  Handshake,
  Headphones,
  Landmark,
  LockKeyhole,
  MapPin,
  MessageCircle,
  Phone,
  ReceiptText,
  Send,
  ShieldCheck,
  Star,
  WalletCards,
} from "lucide-react";

import { PaymentRequestForm } from "@/components/PaymentRequestForm";

const services = [
  {
    icon: Container,
    number: "01",
    title: "Оплата зарубежному поставщику",
    text: "Для закупки товаров, оборудования, комплектующих, сырья и коммерческих услуг за рубежом.",
    meta: "Проверка сделки → согласование условий → расчёт",
  },
  {
    icon: ArrowDownLeft,
    number: "02",
    title: "Получение платежей из-за рубежа",
    text: "Для российского бизнеса, которому необходимо получить оплату от иностранного покупателя или заказчика.",
    meta: "Формат получения определяется после проверки",
  },
  {
    icon: Handshake,
    number: "03",
    title: "Международные коммерческие расчёты",
    text: "Расчёты между компаниями по внешнеторговым и другим документально подтверждённым операциям.",
    meta: "Для юридических лиц и ИП",
  },
  {
    icon: Landmark,
    number: "04",
    title: "SWIFT и доступные способы расчёта",
    text: "SWIFT может быть одним из инструментов. Подходящий способ определяется для конкретной сделки.",
    meta: "Без обещаний до проверки операции",
  },
];

const steps = [
  ["Оставляете заявку", "Сообщаете задачу, страны, сумму, валюту и назначение платежа."],
  ["Проверяем сделку", "Оцениваем страну, контрагента, банк, документы и возможность операции."],
  ["Согласовываем условия", "До операции фиксируем сумму, валюту, курс или комиссию, сроки и формат."],
  ["Проводится расчёт", "Используется доступный и согласованный маршрут для конкретной сделки."],
  ["Получаете подтверждение", "Передаём информацию о выполнении международного расчёта."],
];

const reviews = [
  {
    quote: "«Нужно было приобрести автомобиль в Корее. Сумма очень приличная, сомнений было масса, был страх потерять полтора миллиона. Обмен криптовалюты и оплата автомобиля произошли очень быстро.»",
    author: "Алексей Гейнц",
    meta: "Оплата автомобиля в Корее · крупная сумма",
  },
  {
    quote: "«Воспользовался обменником для перевода денег сыну в Чехию. Перевод доставлен быстро, всё отлично, рекомендую.»",
    author: "Владимир",
    meta: "Международный перевод · Чехия",
  },
  {
    quote: "«Необходимо было провести платёж для приобретения автомобиля из Кореи. Ввели в курс дела и помогли провести сделку от начала до конца, в том числе при возникших в процессе вопросах.»",
    author: "Антон Андрияшин",
    meta: "Оплата автомобиля · Корея",
  },
  {
    quote: "«Первый раз менял деньги на USDT, нужен был перевод за границу для покупки автомобиля. Всё быстро: вечером договорились, на следующий день провели перевод.»",
    author: "Городской житель",
    meta: "Перевод за границу · покупка автомобиля",
  },
  {
    quote: "«Всё прошло более чем успешно. Сработали дистанционно очень быстро, комиссия адекватная. Спасибо, будем работать дальше.»",
    author: "Никита Никитов",
    meta: "Дистанционная сделка",
  },
];

const faq = [
  [
    "Можно ли оплатить зарубежного поставщика из России?",
    "Возможность зависит от страны, банка, контрагента, назначения платежа и документов по конкретной сделке. Сначала проверяем параметры операции.",
  ],
  [
    "Можно ли получить деньги от иностранной компании?",
    "Возможность и формат расчёта определяются после проверки конкретной сделки.",
  ],
  [
    "С какими странами вы работаете?",
    "Направления рассматриваются индивидуально. Возможность операции зависит от страны, банков, контрагентов и назначения платежа.",
  ],
  [
    "В каких валютах возможны расчёты?",
    "Расчёты могут проводиться в USD, EUR, CNY и других доступных валютах. Конкретная валюта подтверждается после проверки направления и сделки.",
  ],
  [
    "Работаете только с Нижневартовском?",
    "Нет. Работа ориентирована на клиентов из разных регионов России. Офис в Нижневартовске — реальная точка присутствия бизнеса.",
  ],
  [
    "Какие документы потребуются?",
    "Зависит от операции. Для коммерческого платежа могут потребоваться данные контрагента, инвойс, договор и другие документы по сделке.",
  ],
  [
    "Сколько занимает международный платёж?",
    "Срок зависит от направления, банков, валюты и параметров операции и сообщается после предварительной проверки.",
  ],
  [
    "Как узнать комиссию?",
    "Условия рассчитываются индивидуально после получения параметров операции и согласовываются до её проведения.",
  ],
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Международные расчёты для бизнеса",
  telephone: "+7 904 870-11-22",
  email: "avsavelev.region@gmail.com",
  areaServed: "Россия",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ул. Ленина, 15 ст3, 1 этаж",
    addressLocality: "Нижневартовск",
    addressCountry: "RU",
  },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />

      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label="На главную">
            <span className="brand-mark" aria-hidden="true"><Globe2 /></span>
            <span>Международные расчёты<small>для бизнеса</small></span>
          </a>
          <nav className="desktop-nav" aria-label="Основная навигация">
            <a href="#services">Услуги</a>
            <a href="#process">Как работаем</a>
            <a href="#trust">Доверие</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div className="header-actions">
            <a className="header-phone" href="tel:+79048701122"><Phone /><span>+7 904 870-11-22</span></a>
            <a className="header-cta" href="#request">Рассчитать платёж</a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-grid" aria-hidden="true" />
          <div className="container hero-layout">
            <div className="hero-copy">
              <div className="hero-kicker"><span /> Работаем с клиентами по всей России</div>
              <h1>Оплата зарубежных поставщиков и приём международных платежей</h1>
              <p className="hero-lead">
                Помогаем бизнесу проводить международные расчёты: оплачивать товары и услуги за рубежом,
                принимать платежи от иностранных контрагентов и подбирать подходящий вариант расчёта.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#request">
                  Рассчитать международный платёж <ArrowUpRight />
                </a>
                <a className="button button-secondary" href="https://wa.me/79048701122?text=%D0%A5%D0%BE%D1%87%D1%83%20%D0%BE%D0%B1%D1%81%D1%83%D0%B4%D0%B8%D1%82%D1%8C%20%D0%BC%D0%B5%D0%B6%D0%B4%D1%83%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D1%8B%D0%B9%20%D1%80%D0%B0%D1%81%D1%87%D1%91%D1%82" target="_blank" rel="noreferrer">
                  Обсудить сделку
                </a>
              </div>
              <div className="hero-trustline">
                <span><Building2 /> Реальный офис</span>
                <span><Star /> Отзывы на картах</span>
                <span><FileCheck2 /> Условия до операции</span>
              </div>
            </div>

            <div className="route-panel">
              <div className="route-panel-top">
                <div><span className="route-label">Сценарии расчёта</span><h2>Два направления одной задачи</h2></div>
                <Globe2 className="route-globe" />
              </div>
              <div className="route-card">
                <div className="route-node"><span className="route-icon"><Building2 /></span><span><small>Клиент</small>Россия</span></div>
                <div className="route-path"><span>Проверка</span><ArrowRight /></div>
                <div className="route-node route-node-accent"><span className="route-icon"><Container /></span><span><small>Получатель</small>Поставщик</span></div>
              </div>
              <div className="route-card">
                <div className="route-node route-node-accent"><span className="route-icon"><Globe2 /></span><span><small>Отправитель</small>Контрагент</span></div>
                <div className="route-path"><span>Проверка</span><ArrowRight /></div>
                <div className="route-node"><span className="route-icon"><Building2 /></span><span><small>Получатель</small>Клиент в РФ</span></div>
              </div>
              <div className="route-notice"><ShieldCheck /><p>Возможность операции определяется после проверки страны, контрагента, банка, назначения платежа и документов.</p></div>
            </div>
          </div>
        </section>

        <section className="signal-strip" aria-label="Ключевые принципы">
          <div className="container signal-grid">
            <div><FileText /><span>Документы по сделке</span></div>
            <div><CircleDollarSign /><span>USD · EUR · CNY и другие доступные валюты</span></div>
            <div><BadgeCheck /><span>Предварительное согласование условий</span></div>
            <div><Headphones /><span>Связь 24/7</span></div>
          </div>
        </section>

        <section className="section services" id="services">
          <div className="container">
            <div className="section-heading split-heading">
              <div><span className="eyebrow">Задачи бизнеса</span><h2>Оплатить поставщика или получить деньги из-за рубежа</h2></div>
              <p>Сначала разбираемся, кому, за что и в каком объёме нужно перечислить или получить средства. Затем подбираем подходящий вариант расчёта.</p>
            </div>
            <div className="service-grid">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <article className="service-card" key={service.title}>
                    <div className="service-top"><span className="service-icon"><Icon /></span><span className="service-number">{service.number}</span></div>
                    <h3>{service.title}</h3><p>{service.text}</p>
                    <div className="service-meta"><Check /> {service.meta}</div>
                  </article>
                );
              })}
            </div>
            <div className="currency-band">
              <div className="currency-copy"><Banknote /><div><h3>Расчёты в разных валютах</h3><p>USD, EUR, CNY и другие доступные валюты — в зависимости от направления и параметров сделки.</p></div></div>
              <a href="#request">Проверить свою операцию <ChevronRight /></a>
            </div>
          </div>
        </section>

        <section className="section process" id="process">
          <div className="container process-layout">
            <div className="process-intro">
              <span className="eyebrow eyebrow-light">Порядок работы</span>
              <h2>Сначала проверяем и согласовываем. Затем проводится операция</h2>
              <p>Такой порядок позволяет заранее понять возможность расчёта, сроки и условия — без обещаний до анализа сделки.</p>
              <a className="text-link text-link-light" href="#request">Передать параметры сделки <ArrowUpRight /></a>
            </div>
            <ol className="steps">
              {steps.map(([title, text], index) => (
                <li key={title}><span className="step-number">{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{text}</p></div></li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section trust" id="trust">
          <div className="container">
            <div className="section-heading split-heading">
              <div><span className="eyebrow">Доверие</span><h2>Проверяемые факты вместо рекламных обещаний</h2></div>
              <p>В международных расчётах клиенту важно понимать, с кем он работает. Поэтому основные доказательства можно проверить независимо.</p>
            </div>
            <div className="trust-grid">
              <article className="trust-card trust-card-main">
                <div className="office-photo">
                  <img src="/office-facade.jpg" alt="Фасад действующего офиса Биток-консалтинг в Нижневартовске" width="1024" height="768" loading="lazy" />
                </div>
                <a className="office-interior-preview" href="/office-interior.webp" target="_blank" rel="noreferrer" aria-label="Открыть фотографию интерьера офиса">
                  <img src="/office-interior.webp" alt="Интерьер действующего офиса Биток-консалтинг в Нижневартовске" width="960" height="720" loading="lazy" />
                  <span>Интерьер офиса <ArrowUpRight /></span>
                </a>
                <div className="trust-card-icon"><Building2 /></div>
                <span className="eyebrow eyebrow-light">Реальное присутствие</span>
                <h3>Офис в Нижневартовске</h3>
                <p>Для клиентов, которым важно личное присутствие, есть действующая точка. Международные расчёты ориентированы на клиентов из разных регионов России.</p>
                <div className="office-address"><MapPin /><span>Нижневартовск, ул. Ленина, 15 ст3, 1 этаж<small>Посещение по предварительному звонку</small></span></div>
                <a href="https://2gis.ru/nizhnevartovsk/firm/70000001100769448" target="_blank" rel="noreferrer">Открыть офис в 2ГИС <ArrowUpRight /></a>
              </article>
              <div className="trust-points">
                <article><ReceiptText /><div><h3>Условия до проведения</h3><p>Сумма, валюта, курс или комиссия, сроки и формат согласовываются заранее.</p></div></article>
                <article><ShieldCheck /><div><h3>Проверка конкретной сделки</h3><p>Возможность расчёта подтверждается только после анализа параметров операции.</p></div></article>
                <article><LockKeyhole /><div><h3>Конфиденциальность деталей</h3><p>Данные клиента, контрагента, суммы и операции используются для рассмотрения сделки и необходимых проверок.</p></div></article>
                <article><MessageCircle /><div><h3>Независимые отзывы</h3><p>Истории клиентов опубликованы на картах — источник можно открыть и проверить самостоятельно.</p></div></article>
              </div>
            </div>
            <div className="reviews-heading">
              <div className="reviews-heading-copy">
                <span className="eyebrow">Независимые отзывы</span>
                <h3>Отзывы клиентов «Биток-консалтинг»</h3>
                <p>Реальный опыт клиентов действующего бизнеса. Оригиналы отзывов можно проверить в 2ГИС.</p>
              </div>
              <div className="review-links">
                <a href="https://yandex.ru/maps/org/bitkoin_obmennik/28912170282/reviews/" target="_blank" rel="noreferrer">Отзывы на Яндекс Картах <ArrowUpRight /></a>
                <a href="https://2gis.ru/nizhnevartovsk/firm/70000001100769448/tab/reviews" target="_blank" rel="noreferrer">Отзывы в 2ГИС <ArrowUpRight /></a>
              </div>
            </div>
            <div className="review-grid">
              {reviews.map((review, index) => (
                <article className={`review-card${index === 0 ? " review-card-featured" : ""}`} key={review.author}>
                  <div className="review-stars" aria-label="Пять звёзд">{[1, 2, 3, 4, 5].map((star) => <Star key={star} />)}</div>
                  <blockquote>{review.quote}</blockquote>
                  <div className="review-meta">{review.meta}</div>
                  <div className="review-author"><span>{review.author}</span><small>5★ · 2ГИС</small></div>
                  <a href="https://2gis.ru/nizhnevartovsk/firm/70000001100769448/tab/reviews" target="_blank" rel="noreferrer">Посмотреть оригинал <ArrowUpRight /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section cases">
          <div className="container">
            <div className="section-heading centered-heading"><span className="eyebrow">Примеры задач</span><h2>Как выглядит международный расчёт на практике</h2><p>Обезличенные сценарии без публикации компаний, реквизитов и конфиденциальных деталей.</p></div>
            <div className="case-grid">
              <article className="case-card"><div className="case-tag">Сценарий 01</div><Container /><h3>Оплата зарубежного поставщика</h3><p>Российскому клиенту необходимо приобрести товар у иностранного поставщика. После проверки согласовываются сумма, валюта и условия, затем проводится коммерческий расчёт.</p><ul><li>Параметры поставки и контрагента</li><li>Инвойс и документы по сделке</li><li>Согласованный вариант расчёта</li></ul></article>
              <article className="case-card case-card-dark"><div className="case-tag">Сценарий 02</div><WalletCards /><h3>Получение оплаты от иностранного контрагента</h3><p>Иностранная компания должна рассчитаться с российским клиентом. Проверяются параметры сделки, после чего выбирается доступный вариант получения средств.</p><ul><li>Данные отправителя и получателя</li><li>Основание и назначение платежа</li><li>Подтверждённые сроки и условия</li></ul></article>
            </div>
          </div>
        </section>

        <section className="section request-section" id="request">
          <div className="container request-layout">
            <div className="request-copy"><span className="eyebrow eyebrow-light">Предварительный расчёт</span><h2>Опишите сделку — проверим возможность операции</h2><p>Передайте основные параметры. Мы рассмотрим задачу и свяжемся, чтобы обсудить возможный вариант международного расчёта.</p><ul className="request-benefits"><li><Check /> География — вся Россия</li><li><Check /> Условия согласовываются заранее</li><li><Check /> Связь 24/7</li></ul><div className="direct-contact"><small>Нужно обсудить срочно?</small><a href="tel:+79048701122"><Phone /> +7 904 870-11-22</a></div></div>
            <PaymentRequestForm />
          </div>
        </section>

        <section className="section faq" id="faq">
          <div className="container faq-layout">
            <div className="faq-intro"><span className="eyebrow">FAQ</span><h2>Вопросы до подачи заявки</h2><p>Окончательный ответ по стране, валюте, срокам и стоимости можно дать только после получения параметров конкретной сделки.</p><a className="text-link" href="#request">Задать свой вопрос <ArrowUpRight /></a></div>
            <div className="faq-list">{faq.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
          </div>
        </section>

        <section className="contact-band" id="contacts">
          <div className="container contact-layout">
            <div><span className="eyebrow eyebrow-light">Контакты</span><h2>Удобный способ обсудить международный расчёт</h2></div>
            <div className="contact-grid">
              <a href="tel:+79048701122"><Phone /><span>Телефон<strong>+7 904 870-11-22</strong></span></a>
              <a href="https://wa.me/79048701122" target="_blank" rel="noreferrer"><MessageCircle /><span>WhatsApp<strong>Написать</strong></span></a>
              <a href="https://t.me/RECOINRECOIN" target="_blank" rel="noreferrer"><Send /><span>Telegram<strong>@RECOINRECOIN</strong></span></a>
              <a href="mailto:avsavelev.region@gmail.com"><ReceiptText /><span>E-mail<strong>avsavelev.region@gmail.com</strong></span></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand"><a className="brand brand-footer" href="#top"><span className="brand-mark"><Globe2 /></span><span>Международные расчёты<small>для бизнеса</small></span></a><p>Оплата зарубежных поставщиков и приём международных платежей для клиентов по всей России.</p></div>
          <div className="footer-column"><h3>Навигация</h3><a href="#services">Услуги</a><a href="#process">Как работаем</a><a href="#trust">Доверие</a><a href="#faq">Частые вопросы</a></div>
          <div className="footer-column"><h3>Мессенджеры</h3><a href="https://wa.me/79048701122">WhatsApp</a><a href="https://t.me/RECOINRECOIN">Telegram</a><a href="https://max.ru/u/f9LHodD0cOLA8K6W--M2bxoxsul1kbY8OcHdpUtg4dfzPcskSNsSvtuLl0k">MAX</a><a href="https://vk.com/bitcoinobmennic">VK</a></div>
          <div className="footer-column footer-office"><h3>Офис</h3><p>Нижневартовск, ул. Ленина, 15 ст3, 1 этаж</p><p>Связь 24/7</p><p>Посещение по предварительному звонку</p></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 Международные расчёты для бизнеса</span><span>Возможность каждой операции определяется после предварительной проверки.</span></div>
      </footer>

      <a className="floating-contact" href="https://wa.me/79048701122?text=%D0%A5%D0%BE%D1%87%D1%83%20%D1%80%D0%B0%D1%81%D1%81%D1%87%D0%B8%D1%82%D0%B0%D1%82%D1%8C%20%D0%BC%D0%B5%D0%B6%D0%B4%D1%83%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D1%8B%D0%B9%20%D0%BF%D0%BB%D0%B0%D1%82%D1%91%D0%B6" target="_blank" rel="noreferrer" aria-label="Написать в WhatsApp"><MessageCircle /></a>
    </>
  );
}
