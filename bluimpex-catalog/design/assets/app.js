/* BLUIMPEX — прототип раздела «Каталог и карточка товара».
   Данные демонстрационные: в рабочей версии их отдает 1С / бэкенд. */

const ICONS = {
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  heart: '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z"/>',
  cart: '<path d="M3 4h2l2.4 11h10.2L20 7H6.2"/><circle cx="9" cy="19.5" r="1.3"/><circle cx="17" cy="19.5" r="1.3"/>',
  b2b: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2"/>',
  eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
  copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>',
  check: '<path d="m5 12 5 5L20 7"/>',
  chevronDown: '<path d="m6 9 6 6 6-6"/>',
  chevronRight: '<path d="m9 6 6 6-6 6"/>',
  arrowRight: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  arrowUpRight: '<path d="M7 17 17 7M8 7h9v9"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
  filter: '<path d="M4 5h16M7 12h10M10 19h4"/>',
  play: '<path d="M8 5v14l11-7Z" fill="currentColor"/>',
  file: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z"/><path d="M14 3v5h5M9 13h6M9 17h6"/>',
  list: '<path d="M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01"/>',
  book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2Z"/><path d="M4 19V5"/>',
  video: '<rect x="3" y="6" width="13" height="12" rx="2"/><path d="m16 10 5-3v10l-5-3"/>',
  external: '<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  truck: '<path d="M3 6h11v10H3zM14 10h4l3 3v3h-7"/><circle cx="7" cy="17.5" r="1.5"/><circle cx="17" cy="17.5" r="1.5"/>',
  shield: '<path d="M12 3 5 6v6c0 4 3 7.4 7 9 4-1.6 7-5 7-9V6Z"/><path d="m9 12 2 2 4-4"/>',
  zoom: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5M11 8v6M8 11h6"/>',
  phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  pin: '<path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12Z"/><circle cx="12" cy="9" r="2.5"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  grid: '<rect x="4" y="4" width="7" height="7" rx="1"/><rect x="13" y="4" width="7" height="7" rx="1"/><rect x="4" y="13" width="7" height="7" rx="1"/><rect x="13" y="13" width="7" height="7" rx="1"/>',
  alert: '<path d="M12 3 2 20h20Z"/><path d="M12 10v4M12 17h.01"/>',
  box: '<path d="m3 7 9-4 9 4-9 4Z"/><path d="M3 7v10l9 4 9-4V7M12 11v10"/>',
  refresh: '<path d="M20 11a8 8 0 1 0-2.3 5.7M20 4v7h-7"/>',
};
const icon = (name, cls = '') => `<svg class="icon ${cls}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name]}</svg>`;

/* Заглушки изображений: схематичные силуэты систем Blum */
const ART = {
  hinge: '<svg viewBox="0 0 120 120"><circle cx="38" cy="70" r="24" fill="none" stroke="currentColor" stroke-width="5"/><rect x="52" y="48" width="58" height="22" rx="6" fill="none" stroke="currentColor" stroke-width="5"/><circle cx="38" cy="70" r="8" fill="currentColor"/><circle cx="98" cy="59" r="4" fill="currentColor"/></svg>',
  lift: '<svg viewBox="0 0 120 120"><rect x="14" y="62" width="40" height="40" rx="6" fill="none" stroke="currentColor" stroke-width="5"/><path d="M34 70 96 22" stroke="currentColor" stroke-width="6" stroke-linecap="round"/><path d="M54 92 104 72" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><circle cx="34" cy="82" r="6" fill="currentColor"/></svg>',
  drawer: '<svg viewBox="0 0 120 120"><path d="M14 44h92v52H14Z" fill="none" stroke="currentColor" stroke-width="5"/><path d="M14 44 30 28h76l-0 16" fill="none" stroke="currentColor" stroke-width="5"/><path d="M44 70h32" stroke="currentColor" stroke-width="6" stroke-linecap="round"/></svg>',
  rail: '<svg viewBox="0 0 120 120"><rect x="10" y="50" width="100" height="14" rx="4" fill="none" stroke="currentColor" stroke-width="5"/><rect x="24" y="66" width="80" height="10" rx="3" fill="currentColor" opacity=".5"/><circle cx="24" cy="57" r="3" fill="currentColor"/><circle cx="96" cy="57" r="3" fill="currentColor"/></svg>',
  plate: '<svg viewBox="0 0 120 120"><rect x="22" y="42" width="76" height="36" rx="10" fill="none" stroke="currentColor" stroke-width="5"/><circle cx="42" cy="60" r="5" fill="currentColor"/><circle cx="78" cy="60" r="5" fill="currentColor"/></svg>',
  push: '<svg viewBox="0 0 120 120"><rect x="44" y="24" width="32" height="72" rx="10" fill="none" stroke="currentColor" stroke-width="5"/><path d="M60 40v24" stroke="currentColor" stroke-width="6" stroke-linecap="round"/></svg>',
};
const ph = (art = 'hinge', tone = '', label = '') =>
  `<div class="ph ${tone}">${ART[art] || ART.hinge}${label ? `<span class="ph__label">${label}</span>` : ''}</div>`;

/* ---------- Demo data ---------- */
const BADGES = {
  hit: ['Хит продаж', 'badge--hit'],
  special: ['Спецпредложение', 'badge--special'],
  sale: ['Акция', 'badge--sale'],
  new: ['Новинка', 'badge--new'],
};

const PRODUCTS = [
  { id: '08884623', sku: '71B3550 MB V250 NI', title: 'CLIP top BLUMOTION петля 110°, НАКЛАДНАЯ, чашка петли на саморезы', art: 'hinge', price: '14,23', unit: 'шт.', stock: 'in', badges: ['sale', 'hit'], pack: 250, props: [['Тип детали', 'Петля'], ['Система петель', 'CLIP top BLUMOTION'], ['Вид петли', 'Стандартные конструкции']] },
  { id: '07481175', sku: '173L6100 MPL V300 NI', title: 'CLIP ответная планка, крестообразная, 0 мм, сталь, на саморезы', art: 'plate', price: '1,14', unit: 'шт.', stock: 'in', badges: ['sale'], pack: 200, props: [['Тип детали', 'Ответная планка'], ['Система петель', 'CLIP'], ['Дистанция', '0 мм']] },
  { id: '09003173', sku: '70T3504 TG AB 1000 NI', title: 'Заглушка на чашку петли CLIP top BLUMOTION, с логотипом Blum', art: 'plate', price: '0,78', unit: 'шт.', stock: 'wait', badges: ['new'], pack: 500, props: [['Тип детали', 'Заглушка'], ['Цвет', 'Никель'], ['Совместимость', 'CLIP top BLUMOTION']] },
  { id: '08849271', sku: '71B3750 MB V250 NI', title: 'CLIP top BLUMOTION петля 110°, ВКЛАДНАЯ, чашка петли на саморезы', art: 'hinge', price: '15,02', unit: 'шт.', stock: 'unknown', badges: [], discount: null, pack: 250, props: [['Тип детали', 'Петля'], ['Наложение фасада', 'Вкладная'], ['Угол открывания', '110°']] },
  { id: '00412758', sku: '79B9550 MB V200 NI', title: 'CLIP top петля 155°, НАКЛАДНАЯ, с нулевым выступом, без пружины', art: 'hinge', price: '22,40', oldPrice: '26,35', unit: 'шт.', stock: 'in', badges: [], discount: 15, pack: 100, props: [['Тип детали', 'Петля'], ['Угол открывания', '155°'], ['Механизм закрывания', 'Без пружины']] },
  { id: '09120278', sku: '174E6100.01 DUEPL V500 NI', title: 'CLIP ответная планка, крестообразная, 0 мм, сталь, EXPANDO', art: 'plate', price: '1,67', unit: 'шт.', stock: 'in', badges: ['special'], pack: 300, props: [['Тип детали', 'Ответная планка'], ['Крепление', 'EXPANDO'], ['Дистанция', '0 мм']] },
  { id: '09048274', sku: '70T3553 BEGR V250 S', title: 'Ограничитель 86° угла открывания для петли 110°', art: 'push', price: '2,74', unit: 'шт.', stock: 'wait', badges: [], pack: 400, props: [['Тип детали', 'Ограничитель'], ['Угол', '86°'], ['Цвет', 'Серый']] },
  { id: '09343977', sku: '174H7100E DUEPL V500 NI', title: 'CLIP ответная планка, EXPANDO, регулировка по высоте: эксцентрик', art: 'plate', price: '3,76', unit: 'шт.', stock: 'in', badges: ['hit'], pack: 300, props: [['Тип детали', 'Ответная планка'], ['Регулировка', 'Эксцентрик'], ['Материал', 'Сталь']] },
  { id: '00975012', sku: '71T0650 MB V100 NI', title: 'CLIP top петля 95° для толстых дверей, НАКЛАДНАЯ, на саморезы', art: 'hinge', price: '9,86', unit: 'шт.', stock: 'in', badges: [], pack: 200, props: [['Тип детали', 'Петля'], ['Угол открывания', '95°'], ['Толщина фасада', 'до 32 мм']] },
];

const FILTERS = [
  { key: 'type', title: 'Тип детали', open: true, values: [['Петля', 64], ['Ответная планка', 48], ['Заглушка', 21], ['Ограничитель', 12]] },
  { key: 'system', title: 'Система петель', open: true, values: [['CLIP top BLUMOTION', 37], ['CLIP top', 52], ['CLIP', 29], ['MODUL', 14]] },
  { key: 'kind', title: 'Вид петли', values: [['Стандартные конструкции', 44], ['Для толстых дверей', 9], ['Для рамочных фасадов', 6]] },
  { key: 'overlay', title: 'Наложение фасада', values: [['Накладная', 38], ['Полунакладная', 22], ['Вкладная', 19]] },
  { key: 'angle', title: 'Угол открывания', values: [['95°', 8], ['107°', 11], ['110°', 41], ['155°', 7], ['170°', 6]] },
  { key: 'close', title: 'Механизм закрывания', values: [['BLUMOTION', 37], ['С пружиной', 41], ['Без пружины', 18]] },
  { key: 'color', title: 'Цвет', values: [['Никель', 88], ['Оникс черный', 12], ['Серый', 9]] },
  { key: 'construct', title: 'Угол конструкции', values: [['0°', 61], ['+30°', 4], ['+45°', 3]] },
  { key: 'tech', title: 'Технология движения', values: [['BLUMOTION', 37], ['TIP-ON', 9]] },
  { key: 'cup', title: 'Крепление чашки', values: [['На саморезы', 52], ['INSERTA', 31], ['EXPANDO', 14]] },
  { key: 'plate', title: 'Вид ответной планки', values: [['Крестообразная', 28], ['Линейная', 19]] },
];

const SORTS = [
  ['price-asc', 'Цена по возрастанию', true],
  ['price-desc', 'Цена по убыванию', true],
  ['pop-asc', 'Популярность (возрастание)'],
  ['pop-desc', 'Популярность (убывание)'],
  ['name-asc', 'Наименование А–Я'],
  ['name-desc', 'Наименование Я–А'],
];

/* ---------- Access state (в проде определяется на сервере) ---------- */
const ACCESS_LABELS = { guest: 'Гость', pending: 'Ждёт активации', client: 'Клиент B2B' };
const getAccess = () => localStorage.getItem('bx-access') || 'guest';
const pageName = () => location.pathname.split('/').pop() || 'index.html';
function setAccess(a) {
  localStorage.setItem('bx-access', a);
  document.body.dataset.access = a;
  document.querySelectorAll('.demo button').forEach((b) => b.classList.toggle('is-active', b.dataset.access === a));
}

/* ---------- Shared fragments ---------- */
const priceBlock = (p, { meta = true } = {}) => `
  <div class="price" data-for="client">
    <span class="price__value">${p.price} BYN</span>
    ${p.oldPrice ? `<span class="price__old">${p.oldPrice} BYN</span>` : ''}
    ${meta ? `<span class="price__meta">за 1 ${p.unit} · <b>без НДС</b></span>` : ''}
  </div>`;

const gateBlock = (compact = false) => `
  <div class="gate" data-for="guest">
    <div class="gate__title">Цены и оформление заказов доступны в личном кабинете</div>
    <div class="gate__sub">Только для юридических лиц и ИП</div>
    ${compact ? '' : '<a class="btn btn--primary btn--s" href="register.html">Зарегистрироваться</a>'}
    <div class="gate__login">Уже зарегистрированы? <a href="login.html">Войти</a></div>
  </div>
  <div class="gate gate--pending" data-for="pending">
    <div class="gate__title">Личный кабинет ожидает активации</div>
    <div class="gate__sub">Менеджер проверит данные компании и откроет доступ к ценам</div>
  </div>`;

const stockLabel = (s, kit = false) => ({
  in: '<span class="stock stock--in">В наличии</span>',
  wait: `<span class="stock stock--wait">${kit ? 'Ожидается поступление деталей' : 'Ожидается поступление'}</span>`,
  unknown: '<span class="stock stock--unknown">Наличие уточняйте у менеджера</span>',
}[s]);

const badges = (p) => [
  ...p.badges.map((b) => `<span class="badge ${BADGES[b][1]}">${BADGES[b][0]}</span>`),
  p.discount ? `<span class="badge badge--discount">Скидка ${p.discount} %</span>` : '',
].join('');

const qty = (val = 1) => `
  <div class="qty" role="group" aria-label="Количество">
    <button type="button" data-qty="-1" aria-label="Уменьшить">−</button>
    <input type="number" inputmode="numeric" min="1" step="1" value="${val}" aria-label="Количество">
    <button type="button" data-qty="1" aria-label="Увеличить">+</button>
  </div>`;

const buyBlock = (p, label = 'В корзину') => `
  <div class="buy" data-for="client">
    ${qty()}
    <button class="btn btn--primary" type="button" data-add="${p.id}">${icon('cart', 'icon--s')}${label}</button>
  </div>`;

const favBtn = (id, cls = 'icon-btn') =>
  `<button class="${cls}" type="button" data-fav="${id}" aria-pressed="false" aria-label="Добавить в избранное">${icon('heart', 'icon--s')}</button>`;

function productCard(p) {
  return `
  <article class="p-card">
    <div class="p-card__visual">
      <a class="p-card__media" href="product.html" aria-label="${p.title}">
        ${ph(p.art, 'ph--white')}
      </a>
      <div class="p-card__badges">${badges(p)}</div>
      <div class="p-card__tools">${favBtn(p.id)}</div>
      <button class="btn btn--outline btn--s p-card__quick" type="button" data-quick="${p.id}">${icon('eye', 'icon--s')}Быстрый просмотр</button>
    </div>
    <div class="p-card__body">
      ${stockLabel(p.stock)}
      <a class="p-card__title" href="product.html">${p.title}</a>
      <div class="p-card__codes"><span>Артикул: <b>${p.sku}</b></span><span>ID: <b>${p.id}</b></span></div>
      <div class="p-card__foot">
        ${priceBlock(p)}
        ${buyBlock(p)}
        ${gateBlock()}
      </div>
    </div>
  </article>`;
}

/* ---------- Header / footer ---------- */
function renderHeader() {
  const el = document.querySelector('[data-include="header"]');
  if (!el) return;
  el.outerHTML = `
  <div class="topbar">
    <div class="container">
      <span class="topbar__item">${icon('pin', 'icon--s')}Минск, ул. Машиностроителей, 21</span>
      <span class="topbar__item topbar__hide-l">${icon('clock', 'icon--s')}Пн–Пт 09:00–18:00 МСК</span>
      <span class="topbar__spacer"></span>
      <a class="topbar__item" href="tel:+375447688800">+375 (44) 768-88-00</a>
      <a class="topbar__item" href="tel:+79169718800">+7 (916) 971-88-00</a>
      <a class="topbar__item topbar__hide-l" href="mailto:sales@bluimpex.ru">sales@bluimpex.ru</a>
      <span class="topbar__messengers"><a href="https://t.me/bluimpex" aria-label="Telegram">TG</a><a href="#" aria-label="MAX">MAX</a><a href="https://wa.me/79169718800" aria-label="WhatsApp">WA</a></span>
    </div>
  </div>
  <header class="header">
    <div class="container header__row">
      <button class="icon-btn burger" type="button" aria-label="Меню">${icon('menu')}</button>
      <div class="header__brand">
        <a class="logo" href="index.html"><span class="logo__name">БЛЮ<span>ИМПЕКС</span></span><span class="logo__desc">поставщик фурнитуры Blum</span></a>
        <a class="btn btn--primary header__catalog" href="catalog.html">${icon('grid')}Каталог</a>
      </div>
      <label class="search"><span class="sr-only">Поиск</span><input type="search" placeholder="Наименование, система или артикул/ID">${icon('search')}</label>
      <nav class="header__actions" aria-label="Сервисы покупателя">
        <a class="header__action" href="favorites.html">${icon('heart', 'icon--l')}<span class="header__label">Избранное</span><span class="header__badge" data-fav-count hidden>0</span></a>
        <div class="account-menu">
          <button class="header__action" type="button" data-account-toggle aria-expanded="false" aria-haspopup="true" aria-controls="account-menu-panel">
            ${icon('b2b', 'icon--l')}<span class="header__label">Кабинет B2B</span>
          </button>
          <div class="account-menu__panel" id="account-menu-panel" role="dialog" aria-label="Личный кабинет">
            <div class="account-menu__guest" data-for="guest">
              <div class="account-menu__title">${icon('b2b', 'icon--s')}Личный кабинет</div>
              <p>Цены и оформление заказов доступны юридическим лицам и ИП.</p>
              <a class="btn btn--primary btn--s btn--block" href="login.html">Войти</a>
              <a class="btn btn--outline btn--s btn--block" href="register.html">Зарегистрироваться</a>
            </div>
            <div class="account-menu__body" data-for="pending client">
              <div class="account-menu__title">${icon('b2b', 'icon--s')}Личный кабинет</div>
              <p class="account-menu__status" data-for="pending">Доступ ожидает активации менеджером.</p>
              <div data-for="client">
                <div class="account-menu__label">Цена, без НДС</div>
                <div class="seg" role="group" aria-label="Тип цены">
                  <button type="button" data-price="retail">Розничная</button>
                  <button type="button" data-price="discount">С дисконтом</button>
                </div>
                <div class="account-menu__label">Валюта</div>
                <div class="seg seg--3" role="group" aria-label="Валюта">
                  ${['RUB', 'BYN', 'EUR'].map((c) => `<button type="button" data-currency="${c}">${c}</button>`).join('')}
                </div>
              </div>
              <nav class="account-menu__nav" aria-label="Разделы кабинета">
                ${[
                  ['profile.html', 'Профиль'],
                  ['favorites.html', 'Избранное'],
                  ['cart.html', 'Корзина'],
                  ['orders.html', 'История заказов'],
                  ['drafts.html', 'Черновики заказов'],
                ].map(([href, label]) => `<a class="account-menu__link${href === pageName() ? ' is-active' : ''}" href="${href}">${label}</a>`).join('')}
                <a class="account-menu__link" href="login.html" data-logout>Выход</a>
              </nav>
            </div>
          </div>
        </div>
        <a class="header__action" href="cart.html">${icon('cart', 'icon--l')}<span class="header__label">Корзина</span><span class="header__badge" data-cart-count hidden>0</span></a>
      </nav>
    </div>
    <div class="menu-row"><div class="container">
      <a href="catalog.html">Каталог Blum</a>
      <a href="#">Сотрудничество ${icon('chevronDown', 'icon--s')}</a>
      <a href="#">О компании ${icon('chevronDown', 'icon--s')}</a>
      <a href="#">Новости</a>
      <a href="#">Контакты</a>
    </div></div>
  </header>`;
}

function renderFooter() {
  const el = document.querySelector('[data-include="footer"]');
  if (!el) return;
  el.outerHTML = `
  <footer class="footer">
    <div class="container footer__grid">
      <div>
        <a class="logo" href="index.html"><span class="logo__name">БЛЮ<span>ИМПЕКС</span></span><span class="logo__desc">поставщик фурнитуры Blum</span></a>
        <p class="footer__lead">Оригинальная фурнитура Blum оптом со склада в Минске и под заказ для производителей мебели и торговых компаний.</p>
      </div>
      <div><div class="footer__title">Каталог</div><ul>
        <li><a href="section.html">Подъемные механизмы</a></li><li><a href="list.html">Системы петель</a></li>
        <li><a href="#">Системы выдвижения</a></li><li><a href="#">Системы направляющих</a></li><li><a href="#">Технологии движения</a></li></ul></div>
      <div><div class="footer__title">Компания</div><ul>
        <li><a href="#">Начало сотрудничества</a></li><li><a href="#">Поставка, оплата и документы</a></li>
        <li><a href="#">О компании</a></li><li><a href="#">Склад в Минске</a></li><li><a href="#">Новости</a></li></ul></div>
      <div><div class="footer__title">Контакты</div><ul>
        <li><a href="tel:+375447688800">+375 (44) 768-88-00</a></li><li><a href="tel:+79169718800">+7 (916) 971-88-00</a></li>
        <li><a href="mailto:sales@bluimpex.ru">sales@bluimpex.ru</a></li><li>Минск, ул. Машиностроителей, 21</li><li>Пн–Пт 09:00–18:00 МСК</li></ul></div>
    </div>
    <div class="footer__bottom"><div class="container">
      <span>© 2026 Блюимпекс</span>
      <span><a href="#">Политика cookie</a> · <a href="#">Обработка персональных данных</a> · <a href="#">Настройка cookie</a></span>
    </div></div>
  </footer>`;
}

function renderDemo() {
  const d = document.createElement('div');
  d.className = 'demo';
  d.innerHTML = `<span class="demo__title">Прототип · режим доступа</span><div class="demo__opts">${
    Object.entries(ACCESS_LABELS).map(([k, v]) => `<button type="button" data-access="${k}">${v}</button>`).join('')
  }</div><div class="demo__opts"><button type="button" data-grid>Сетка 12 · G</button></div>`;
  document.body.append(d);
  d.addEventListener('click', (e) => {
    const b = e.target.closest('[data-access]');
    if (b) setAccess(b.dataset.access);
    if (e.target.closest('[data-grid]')) toggleGrid();
  });
}

/* ---------- Наложение сетки 12 колонок (клавиша G) ---------- */
function toggleGrid(force) {
  const on = typeof force === 'boolean' ? force : !document.body.classList.contains('show-grid');
  document.body.classList.toggle('show-grid', on);
  document.querySelectorAll('[data-grid]').forEach((b) => b.classList.toggle('is-active', on));
}
function renderGridOverlay() {
  const o = document.createElement('div');
  o.className = 'grid-overlay';
  o.setAttribute('aria-hidden', 'true');
  o.innerHTML = `<div class="grid-overlay__inner">${'<div class="grid-overlay__col"></div>'.repeat(12)}</div>`;
  document.body.append(o);
}
document.addEventListener('keydown', (e) => {
  if (e.key.toLowerCase() !== 'g' || e.ctrlKey || e.metaKey || e.altKey) return;
  if (e.target instanceof Element && e.target.closest('input, textarea, select, [contenteditable]')) return;
  toggleGrid();
});

/* ---------- Toast ---------- */
let toastTimer;
function toast(text) {
  let t = document.querySelector('.toast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; t.setAttribute('role', 'status'); document.body.append(t); }
  t.innerHTML = `${icon('check', 'icon--s')}${text}`;
  t.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('is-visible'), 2200);
}

/* ---------- Favorites (синхронизация между списком, быстрым просмотром и карточкой) ---------- */
const favs = new Set(JSON.parse(localStorage.getItem('bx-favs') || '[]'));
function syncFavs() {
  document.querySelectorAll('[data-fav]').forEach((b) => {
    const on = favs.has(b.dataset.fav);
    b.setAttribute('aria-pressed', on);
    b.setAttribute('aria-label', on ? 'Убрать из избранного' : 'Добавить в избранное');
    const label = b.querySelector('[data-fav-label]');
    if (label) label.textContent = on ? 'В избранном' : 'В избранное';
  });
  document.querySelectorAll('[data-fav-count]').forEach((c) => { c.textContent = favs.size; c.hidden = !favs.size; });
}

/* ---------- Modals ---------- */
let lastFocus = null;
function openModal(html, small = false) {
  closeModal();
  lastFocus = document.activeElement;
  const m = document.createElement('div');
  m.className = 'modal is-open';
  m.innerHTML = `<div class="modal__dialog ${small ? 'modal__dialog--s' : ''}" role="dialog" aria-modal="true" tabindex="-1">
    <button class="icon-btn modal__close" type="button" data-close aria-label="Закрыть">${icon('close')}</button>${html}</div>`;
  document.body.append(m);
  document.body.style.overflow = 'hidden';
  m.addEventListener('click', (e) => { if (e.target === m || e.target.closest('[data-close]')) closeModal(); });
  syncFavs();
  m.querySelector('.modal__dialog').focus();
  return m;
}
function closeModal() {
  const m = document.querySelector('.modal.is-open');
  if (!m) return;
  m.remove();
  document.body.style.overflow = '';
  lastFocus?.focus?.();
}
document.addEventListener('keydown', (e) => {
  const m = document.querySelector('.modal.is-open');
  if (!m) return;
  if (e.key === 'Escape') closeModal();
  if (e.key === 'Tab') {
    const f = [...m.querySelectorAll('button, a[href], input, [tabindex]:not([tabindex="-1"])')].filter((x) => x.offsetParent);
    if (!f.length) return;
    if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f.at(-1).focus(); }
    else if (!e.shiftKey && document.activeElement === f.at(-1)) { e.preventDefault(); f[0].focus(); }
  }
});

function quickView(p) {
  openModal(`
    <div class="quick">
      <div class="quick__media">${ph(p.art, 'ph--white')}<div class="p-card__badges">${badges(p)}</div></div>
      <div class="quick__info">
        <div class="quick__title">${p.title}</div>
        <div class="codes">
          <span class="code"><span>Артикул</span><b>${p.sku}</b><button type="button" data-copy="${p.sku}" aria-label="Скопировать артикул">${icon('copy', 'icon--s')}</button></span>
          <span class="code"><span>ID</span><b>${p.id}</b><button type="button" data-copy="${p.id}" aria-label="Скопировать ID">${icon('copy', 'icon--s')}</button></span>
        </div>
        ${stockLabel(p.stock)}
        <ul class="props">
          <li><span>Количество в упаковке, шт.:</span><b>${p.pack}</b></li>
          ${p.props.map(([k, v]) => `<li><span>${k}:</span><b>${v}</b></li>`).join('')}
        </ul>
        <div class="buybox">
          ${priceBlock(p)}
          ${buyBlock(p)}
          ${gateBlock()}
        </div>
        <div class="quick__actions">
          ${favBtn(p.id, 'fav-btn').replace('</button>', '<span data-fav-label>В избранное</span></button>')}
          <a class="link" href="product.html">Подробнее о товаре →</a>
        </div>
      </div>
    </div>`);
}

const CONFIRM = {
  part: {
    title: 'Товар ожидается на складе',
    text: 'Этот товар сейчас отсутствует на складе, но в ближайшее время ожидается его поступление.<br>Хотите добавить его в корзину для формирования заявки?',
  },
  kit: {
    title: 'Часть деталей комплекта ожидается',
    text: 'Некоторые детали этого комплекта сейчас отсутствуют на складе, но в ближайшее время ожидается их поступление.<br>Хотите добавить комплект в корзину для формирования заявки?<br><span class="muted">В корзине вы сможете расформировать комплект и заменить недостающие позиции на аналоги.</span>',
  },
};
function confirmAdd(kind) {
  return new Promise((resolve) => {
    const c = CONFIRM[kind];
    const m = openModal(`
      <div class="confirm">
        <div class="confirm__icon">${icon('clock', 'icon--l')}</div>
        <h3 class="h4">${c.title}</h3>
        <p>${c.text}</p>
        <div class="modal__actions">
          <button class="btn btn--outline" type="button" data-cancel>Отменить</button>
          <button class="btn btn--primary" type="button" data-ok>Добавить</button>
        </div>
      </div>`, true);
    m.querySelector('[data-ok]').onclick = () => { closeModal(); resolve(true); };
    m.querySelector('[data-cancel]').onclick = () => { closeModal(); resolve(false); };
    m.querySelector('[data-close]').addEventListener('click', () => resolve(false));
  });
}

/* ---------- Cart (демо, без сервера) ---------- */
let cartCount = 0;
async function addToCart(btn) {
  if (btn.classList.contains('is-loading')) return;
  const p = PRODUCTS.find((x) => x.id === btn.dataset.add) || window.PAGE_PRODUCT;
  const input = btn.closest('.buy')?.querySelector('.qty input');
  const n = Math.max(1, parseInt(input?.value, 10) || 1);
  if (p?.stock === 'wait' && !(await confirmAdd(p.kit ? 'kit' : 'part'))) return;
  const html = btn.innerHTML;
  btn.classList.add('is-loading');
  btn.textContent = 'Добавляем…';
  setTimeout(() => {
    btn.classList.remove('is-loading');
    btn.innerHTML = html;
    cartCount += n;
    document.querySelectorAll('[data-cart-count]').forEach((c) => { c.textContent = cartCount; c.hidden = false; });
    toast(`Добавлено в корзину: ${n} ${p?.unit || 'шт.'}`);
  }, 450);
}

/* ---------- Global delegation ---------- */
document.addEventListener('click', (e) => {
  const t = e.target;
  const q = t.closest('[data-qty]');
  if (q) {
    const input = q.parentElement.querySelector('input');
    input.value = Math.max(1, (parseInt(input.value, 10) || 1) + Number(q.dataset.qty));
    input.dispatchEvent(new Event('input', { bubbles: true }));
    return;
  }
  const fav = t.closest('[data-fav]');
  if (fav) {
    const id = fav.dataset.fav;
    favs.has(id) ? favs.delete(id) : favs.add(id);
    localStorage.setItem('bx-favs', JSON.stringify([...favs]));
    syncFavs();
    toast(favs.has(id) ? 'Добавлено в избранное' : 'Удалено из избранного');
    return;
  }
  const quick = t.closest('[data-quick]');
  if (quick) { quickView(PRODUCTS.find((p) => p.id === quick.dataset.quick)); return; }
  const add = t.closest('[data-add]');
  if (add) { addToCart(add); return; }
  const copy = t.closest('[data-copy]');
  if (copy) {
    navigator.clipboard?.writeText(copy.dataset.copy);
    copy.classList.add('is-done');
    copy.innerHTML = icon('check', 'icon--s');
    toast(`Скопировано: ${copy.dataset.copy}`);
    setTimeout(() => { copy.classList.remove('is-done'); copy.innerHTML = icon('copy', 'icon--s'); }, 1600);
    return;
  }
  const col = t.closest('[data-collapse]');
  if (col) {
    const box = col.closest('.collapse, .filter');
    box.classList.toggle('is-open');
    col.setAttribute('aria-expanded', box.classList.contains('is-open'));
    return;
  }
  const crumbToggle = t.closest('.crumb__toggle');
  if (crumbToggle) {
    const c = crumbToggle.closest('.crumb');
    document.querySelectorAll('.crumb.is-open').forEach((x) => x !== c && x.classList.remove('is-open'));
    c.classList.toggle('is-open');
    crumbToggle.setAttribute('aria-expanded', c.classList.contains('is-open'));
    return;
  }
  if (!t.closest('.crumb')) document.querySelectorAll('.crumb.is-open').forEach((x) => x.classList.remove('is-open'));
});

/* ---------- Listing page ---------- */
function initListing() {
  const root = document.querySelector('[data-listing]');
  if (!root) return;
  const filtersEl = root.querySelector('[data-filters]');
  const gridEl = root.querySelector('[data-products]');
  const appliedEl = root.querySelector('[data-applied]');
  const sortEl = root.querySelector('[data-sort]');
  const countEl = document.querySelector('[data-count]');

  filtersEl.innerHTML = FILTERS.map((f) => `
    <div class="filter ${f.open ? 'is-open' : ''}" data-key="${f.key}">
      <button class="filter__btn" type="button" data-collapse aria-expanded="${!!f.open}">${f.title}<span class="filter__badge" hidden></span>${icon('chevronDown', 'icon--s')}</button>
      <div class="filter__body">${f.values.map(([v, n]) => `
        <label class="check"><input type="checkbox" name="${f.key}" value="${v}"><span>${v}</span><span class="check__count">${n}</span></label>`).join('')}
      </div>
    </div>`).join('');

  sortEl.innerHTML = SORTS.map(([k, v, price]) =>
    `<button class="chip" type="button" data-sort-key="${k}" ${price ? 'data-price hidden' : ''}>${v}</button>`).join('');

  const params = new URLSearchParams(location.search);
  const state = () => {
    const s = new URLSearchParams();
    filtersEl.querySelectorAll('input:checked').forEach((i) => s.append(i.name, i.value));
    const active = sortEl.querySelector('.chip--active');
    if (active) s.set('sort', active.dataset.sortKey);
    return s;
  };
  const apply = (push = true) => {
    const s = state();
    if (push) history.pushState(null, '', `${location.pathname}${s.toString() ? `?${s}` : ''}`);
    const selected = [...filtersEl.querySelectorAll('input:checked')];
    appliedEl.innerHTML = selected.map((i) =>
      `<button class="applied__chip" type="button" data-unset="${i.name}|${i.value}">${i.value}${icon('close', 'icon--s')}</button>`).join('')
      + (selected.length ? '<button class="applied__reset" type="button" data-reset>Сбросить всё</button>' : '');
    filtersEl.querySelectorAll('.filter').forEach((f) => {
      const n = f.querySelectorAll('input:checked').length;
      const b = f.querySelector('.filter__badge');
      b.hidden = !n; b.textContent = n;
    });
    const total = selected.length ? 38 : 231;
    countEl.textContent = `${total} товар${total % 10 === 1 && total % 100 !== 11 ? '' : 'ов'}`;
    gridEl.innerHTML = PRODUCTS.map(productCard).join('');
    syncFavs();
  };
  const restore = (p) => {
    filtersEl.querySelectorAll('input').forEach((i) => { i.checked = p.getAll(i.name).includes(i.value); });
    sortEl.querySelectorAll('.chip').forEach((c) => c.classList.toggle('chip--active', c.dataset.sortKey === p.get('sort')));
  };
  restore(params);
  apply(false);

  filtersEl.addEventListener('change', () => apply());
  sortEl.addEventListener('click', (e) => {
    const c = e.target.closest('[data-sort-key]');
    if (!c) return;
    const was = c.classList.contains('chip--active');
    sortEl.querySelectorAll('.chip').forEach((x) => x.classList.remove('chip--active'));
    if (!was) c.classList.add('chip--active');
    apply();
  });
  root.addEventListener('click', (e) => {
    const u = e.target.closest('[data-unset]');
    if (u) {
      const [name, value] = u.dataset.unset.split('|');
      filtersEl.querySelector(`input[name="${name}"][value="${value}"]`).checked = false;
      apply();
    }
    if (e.target.closest('[data-reset]')) { filtersEl.querySelectorAll('input').forEach((i) => { i.checked = false; }); apply(); }
    if (e.target.closest('[data-open-filters]')) filtersEl.closest('.filters').classList.add('is-open');
    if (e.target.closest('[data-close-filters]')) filtersEl.closest('.filters').classList.remove('is-open');
  });
  window.addEventListener('popstate', () => { restore(new URLSearchParams(location.search)); apply(false); });
}

/* ---------- Меню личного кабинета в шапке ---------- */
function syncAccountMenu() {
  const price = localStorage.getItem('bx-price') || 'discount';
  const cur = localStorage.getItem('bx-currency') || 'RUB';
  document.querySelectorAll('[data-price]').forEach((b) => b.classList.toggle('is-active', b.dataset.price === price));
  document.querySelectorAll('[data-currency]').forEach((b) => b.classList.toggle('is-active', b.dataset.currency === cur));
}
function closeAccountMenu() {
  const menu = document.querySelector('.account-menu');
  if (!menu) return;
  menu.classList.remove('is-open');
  menu.querySelector('[data-account-toggle]')?.setAttribute('aria-expanded', 'false');
}
function initAccountMenu() {
  const menu = document.querySelector('.account-menu');
  if (!menu) return;
  syncAccountMenu();
  document.addEventListener('click', (e) => {
    const toggle = e.target.closest('[data-account-toggle]');
    if (toggle) {
      const open = !menu.classList.contains('is-open');
      menu.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      return;
    }
    const price = e.target.closest('[data-price]');
    if (price) {
      localStorage.setItem('bx-price', price.dataset.price);
      syncAccountMenu();
      toast(price.dataset.price === 'discount' ? 'Цены с дисконтом, без НДС' : 'Розничные цены, без НДС');
      return;
    }
    const cur = e.target.closest('.account-menu [data-currency]');
    if (cur) {
      localStorage.setItem('bx-currency', cur.dataset.currency);
      syncAccountMenu();
      if (typeof updateSummary === 'function') updateSummary();
      const orders = document.querySelector('[data-orders]');
      if (orders && typeof renderOrders === 'function') renderOrders(orders.dataset.orders);
      toast(`Валюта: ${cur.dataset.currency}`);
      return;
    }
    if (e.target.closest('[data-logout]')) localStorage.setItem('bx-access', 'guest');
    if (!e.target.closest('.account-menu')) closeAccountMenu();
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeAccountMenu(); });
}

/* ---------- Product page ---------- */
function initProduct() {
  const main = document.querySelector('[data-buybox]');
  const bar = document.querySelector('.sticky-buy');
  if (main && bar) {
    new IntersectionObserver(([en]) => {
      const show = !en.isIntersecting && en.boundingClientRect.top < 0;
      bar.classList.toggle('is-visible', show);
      document.body.classList.toggle('has-sticky', show);
    }).observe(main);
    // общее количество между основным блоком и закрепленной панелью
    const inputs = [...document.querySelectorAll('[data-buybox] .qty input, .sticky-buy .qty input')];
    inputs.forEach((i) => i.addEventListener('input', () => inputs.forEach((o) => { if (o !== i) o.value = i.value; })));
  }
  document.querySelectorAll('.gallery__thumb').forEach((th) => th.addEventListener('click', () => {
    document.querySelectorAll('.gallery__thumb').forEach((x) => x.classList.remove('is-active'));
    th.classList.add('is-active');
    const stage = document.querySelector('[data-stage]');
    stage.innerHTML = th.dataset.video
      ? `<div class="ph ph--video"><button class="btn btn--primary" type="button">${icon('play', 'icon--s')}Смотреть видео</button><span class="ph__label">Видео загрузится по клику</span></div>`
      : ph(th.dataset.art, 'ph--white');
  }));
}

/* ---------- Boot ---------- */
renderHeader();
renderFooter();
renderDemo();
renderGridOverlay();
setAccess(getAccess());
try {
  const q = new URLSearchParams(location.search);
  if (q.get('grid') === '1' || q.get('grid') === 'true') toggleGrid(true);
  if (q.get('access')) setAccess(q.get('access'));
} catch (_) {}
document.querySelectorAll('[data-icon]').forEach((el) => { el.outerHTML = icon(el.dataset.icon, el.className); });
document.querySelectorAll('[data-ph]').forEach((el) => { el.innerHTML = ph(el.dataset.ph, el.dataset.tone || '', el.dataset.label || ''); });
document.querySelectorAll('[data-render-cards]').forEach((el) => {
  el.innerHTML = el.dataset.renderCards.split(',').map((i) => productCard(PRODUCTS[+i])).join('');
});
initListing();
initProduct();
initAccountMenu();
document.querySelectorAll('[data-preview]').forEach((s) => s.addEventListener('change', () => { location.href = s.value; }));
syncFavs();
