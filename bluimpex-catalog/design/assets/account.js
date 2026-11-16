/* BLUIMPEX — личный кабинет (раздел 5 ТЗ). Данные демонстрационные. */

const CURRENCY = { RUB: { sign: 'RUB', rate: 1 }, BYN: { sign: 'BYN', rate: 0.036 }, EUR: { sign: 'EUR', rate: 0.0096 } };
const VAT = { by: 0.20, ru: 0.22 };

const money = (rub, cur) => {
  const c = CURRENCY[cur] || CURRENCY.RUB;
  const v = rub * c.rate;
  return `${v.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${c.sign}`;
};
const getCurrency = () => localStorage.getItem('bx-currency') || 'RUB';

/* Демо-корзина: комплект с деталями и отдельные позиции. Цены в RUB без НДС. */
const CART = [
  {
    id: 'K-08884623', kit: true, title: 'CLIP top BLUMOTION комплект петли 110°, накладная',
    sku: '71B3550', pid: '08884623', art: 'hinge', qty: 1, price: 1170,
    parts: [
      { id: '08884623', title: 'Петля CLIP top BLUMOTION 110°, накладная', sku: '71B3550', art: 'hinge', per: 2, price: 395, stock: 'in' },
      { id: '07481175', title: 'CLIP ответная планка, крестообразная, 0 мм', sku: '173L6100', art: 'plate', per: 2, price: 32, stock: 'wait' },
      { id: '09003173', title: 'Заглушка на чашку петли CLIP top BLUMOTION', sku: '70T3504', art: 'plate', per: 2, price: 22, stock: 'in' },
    ],
  },
  { id: '09048274', title: 'Ограничитель 86° угла открывания для петли 110°', sku: '70T3553', pid: '09048274', art: 'push', qty: 4, price: 76, stock: 'in' },
  { id: '09120278', title: 'CLIP ответная планка, крестообразная, 0 мм, сталь, EXPANDO', sku: '174E6100.01', pid: '09120278', art: 'plate', qty: 10, price: 46, stock: 'in' },
];

const ORDERS = [
  { num: 'З-1042', date: '12.11.2026', status: 'work', label: 'В работе', sum: 42180, items: [['CLIP top BLUMOTION комплект 110°', 20], ['Ответная планка EXPANDO', 40]] },
  { num: 'З-0987', date: '28.10.2026', status: 'done', label: 'Выполнен', sum: 15640, items: [['MOVENTO с BLUMOTION, 500 мм', 6], ['Крепление MOVENTO, левое', 6]] },
  { num: 'З-0911', date: '03.10.2026', status: 'new', label: 'Новый', sum: 8900, items: [['LEGRABOX комплект, высота C', 4]] },
];

const DRAFTS = [
  { num: 'Ч-17', date: '14.11.2026', sum: 7340, items: [['AVENTOS HK top комплект', 2], ['Петля CLIP top 110°', 16]] },
  { num: 'Ч-15', date: '09.11.2026', sum: 22100, items: [['TANDEMBOX antaro, высота M', 8]] },
];

const sideNav = (active) => {
  const items = [
    ['profile.html', 'b2b', 'Профиль'],
    ['favorites.html', 'heart', 'Избранное', 'fav'],
    ['cart.html', 'cart', 'Корзина', 'cart'],
    ['orders.html', 'list', 'История заказов'],
    ['drafts.html', 'file', 'Черновики заказов'],
  ];
  return `<aside class="side">
    <div class="side__card">
      <div class="side__company">ООО «МебельПром»</div>
      <div class="side__status" data-for="client">${icon('check', 'icon--s')}Доступ активирован</div>
      <div class="side__status side__status--wait" data-for="pending">${icon('clock', 'icon--s')}Ожидает активации</div>
      <nav class="side__nav" aria-label="Разделы кабинета">
        ${items.map(([href, ic, label, count]) => `<a href="${href}" class="${href.startsWith(active) ? 'is-active' : ''}">${icon(ic, 'icon--s')}${label}${count ? `<span class="count" data-${count}-count>0</span>` : ''}</a>`).join('')}
        <a href="login.html">${icon('close', 'icon--s')}Выход</a>
      </nav>
    </div>
    <div class="side__card currency">
      <span class="currency__label">Валюта</span>
      <div class="currency__opts" role="group" aria-label="Валюта">
        ${['RUB', 'BYN', 'EUR'].map((c) => `<button type="button" data-currency="${c}">${c}</button>`).join('')}
      </div>
      <p class="currency__note">Цены показываются по вашему прейскуранту. Пересчёт справочный, курсы задаёт система.</p>
    </div>
  </aside>`;
};

const lineSum = (item) => item.price * item.qty;
const cartTotal = () => CART.reduce((s, i) => s + lineSum(i), 0);

function renderCart() {
  const root = document.querySelector('[data-cart]');
  if (!root) return;
  const cur = getCurrency();
  root.querySelector('[data-cart-list]').innerHTML = CART.map((item) => `
    <article class="cart-item">
      <div class="cart-item__thumb">${ph(item.art, 'ph--white')}</div>
      <div>
        <a class="cart-item__title" href="product.html">${item.title}</a>
        <div class="cart-item__codes">Артикул ${item.sku} · ID ${item.pid || item.id}${item.kit ? ' · комплект' : ''}</div>
        ${item.stock ? stockLabel(item.stock) : ''}
        ${item.kit ? `
          <button class="kit-toggle" type="button" data-kit-toggle aria-expanded="false">${icon('chevronDown', 'icon--s')}В комплект входит · ${item.parts.length}</button>
          <div class="kit-parts">
            ${item.parts.map((p) => `<div class="kit-part">
              <div class="kit-part__thumb">${ph(p.art, 'ph--white')}</div>
              <div><a class="kit-part__name" href="product.html">${p.title}</a><div class="kit-part__meta">Артикул ${p.sku} · ID ${p.id} · ${p.per} шт. в комплекте</div>${stockLabel(p.stock)}</div>
              <div class="kit-part__price">${money(p.price, cur)}<div class="kit-part__meta">за 1 шт. · без НДС</div></div>
            </div>`).join('')}
            <button class="btn btn--outline btn--s" type="button" data-split="${item.id}">${icon('box', 'icon--s')}Расформировать комплект</button>
          </div>` : ''}
      </div>
      <div class="cart-item__side">
        <div class="cart-item__sum" data-line="${item.id}">${money(lineSum(item), cur)}</div>
        <div class="cart-item__unit">${money(item.price, cur)} / шт. · без НДС</div>
        <div class="qty"><button type="button" data-cart-qty="${item.id}" data-step="-1" aria-label="Уменьшить">−</button><input type="number" min="1" value="${item.qty}" data-cart-input="${item.id}" aria-label="Количество"><button type="button" data-cart-qty="${item.id}" data-step="1" aria-label="Увеличить">+</button></div>
        <button class="cart-item__remove" type="button" data-remove="${item.id}">Удалить</button>
      </div>
    </article>`).join('');
  updateSummary();
  document.querySelectorAll('[data-cart-count]').forEach((c) => { c.textContent = CART.reduce((s, i) => s + i.qty, 0); c.hidden = false; });
}

function updateSummary() {
  const box = document.querySelector('[data-summary]');
  if (!box) return;
  const cur = getCurrency();
  const base = cartTotal();
  box.querySelector('[data-sum-base]').textContent = money(base, cur);
  box.querySelector('[data-sum-by]').textContent = money(base * (1 + VAT.by), cur);
  box.querySelector('[data-sum-ru]').textContent = money(base * (1 + VAT.ru), cur);
  box.querySelector('[data-sum-count]').textContent = CART.length;
  CART.forEach((i) => { const el = document.querySelector(`[data-line="${i.id}"]`); if (el) el.textContent = money(lineSum(i), cur); });
  document.querySelectorAll('.cart-item__unit').forEach((el, n) => { if (CART[n]) el.textContent = `${money(CART[n].price, cur)} / шт. · без НДС`; });
}

function renderFavorites() {
  const root = document.querySelector('[data-favorites]');
  if (!root) return;
  const ids = [...favs];
  const items = PRODUCTS.filter((p) => ids.includes(p.id));
  const empty = root.querySelector('[data-fav-empty]');
  const grid = root.querySelector('[data-fav-grid]');
  empty.hidden = items.length > 0;
  grid.hidden = items.length === 0;
  grid.innerHTML = items.map(productCard).join('');
  root.querySelector('[data-fav-total]').textContent = items.length;
  syncFavs();
}

function renderOrders(kind) {
  const root = document.querySelector('[data-orders]');
  if (!root) return;
  const cur = getCurrency();
  const list = kind === 'draft' ? DRAFTS : ORDERS;
  root.innerHTML = list.map((o, i) => `
    <article class="order ${i === 0 ? 'is-open' : ''}">
      <button class="order__head" type="button" data-order-toggle aria-expanded="${i === 0}">
        <span><span class="order__num">${kind === 'draft' ? 'Черновик' : 'Заявка'} ${o.num}</span><div class="order__date">от ${o.date}</div></span>
        ${kind === 'draft' ? '<span class="status status--draft">Черновик</span>' : `<span class="status status--${o.status}">${o.label}</span>`}
        <span class="order__sum">${money(o.sum, cur)}<div class="order__date">без НДС</div></span>
        ${icon('chevronDown')}
      </button>
      <div class="order__body">
        ${o.items.map(([name, qty]) => `<div class="kit-part"><div class="kit-part__thumb">${ph('hinge', 'ph--white')}</div><div class="kit-part__name">${name}</div><div class="kit-part__price">${qty} шт.</div></div>`).join('')}
        <div class="order__actions">
          ${kind === 'draft'
            ? `<a class="btn btn--primary btn--s" href="cart.html">${icon('cart', 'icon--s')}Продолжить оформление</a><button class="btn btn--outline btn--s" type="button" data-toast="Черновик удалён">Удалить</button>`
            : `<button class="btn btn--outline btn--s" type="button" data-toast="Состав заявки ${o.num} добавлен в корзину">${icon('refresh', 'icon--s')}Повторить заявку</button><button class="btn btn--ghost btn--s" type="button" data-toast="Файл Excel формируется">${icon('file', 'icon--s')}Скачать Excel</button>`}
        </div>
      </div>
    </article>`).join('');
}

function bindAccount() {
  document.querySelectorAll('[data-account-nav]').forEach((el) => { el.outerHTML = sideNav(el.dataset.accountNav); });
  document.querySelectorAll('[data-currency]').forEach((b) => b.classList.toggle('is-active', b.dataset.currency === getCurrency()));

  document.addEventListener('click', (e) => {
    const cur = e.target.closest('[data-currency]');
    if (cur && !cur.closest('.account-menu')) {
      localStorage.setItem('bx-currency', cur.dataset.currency);
      document.querySelectorAll('[data-currency]').forEach((b) => b.classList.toggle('is-active', b.dataset.currency === cur.dataset.currency));
      updateSummary();
      renderOrders(document.querySelector('[data-orders]')?.dataset.orders);
      toast(`Валюта: ${cur.dataset.currency}`);
      return;
    }
    const qty = e.target.closest('[data-cart-qty]');
    if (qty) {
      const item = CART.find((i) => i.id === qty.dataset.cartQty);
      item.qty = Math.max(1, item.qty + Number(qty.dataset.step));
      document.querySelector(`[data-cart-input="${item.id}"]`).value = item.qty;
      updateSummary();
      return;
    }
    const rm = e.target.closest('[data-remove]');
    if (rm) { const i = CART.findIndex((x) => x.id === rm.dataset.remove); if (i > -1) CART.splice(i, 1); renderCart(); toast('Позиция удалена из корзины'); return; }
    const kit = e.target.closest('[data-kit-toggle]');
    if (kit) { const box = kit.nextElementSibling; box.hidden = !box.hidden; kit.setAttribute('aria-expanded', !box.hidden); return; }
    const split = e.target.closest('[data-split]');
    if (split) {
      const i = CART.findIndex((x) => x.id === split.dataset.split);
      const kit = CART[i];
      CART.splice(i, 1, ...kit.parts.map((p) => ({ id: p.id, title: p.title, sku: p.sku, pid: p.id, art: p.art, qty: p.per * kit.qty, price: p.price, stock: p.stock })));
      renderCart();
      toast('Комплект расформирован: детали добавлены отдельными позициями');
      return;
    }
    const order = e.target.closest('[data-order-toggle]');
    if (order) { const box = order.closest('.order'); box.classList.toggle('is-open'); order.setAttribute('aria-expanded', box.classList.contains('is-open')); return; }
    const note = e.target.closest('[data-toast]');
    if (note) { toast(note.dataset.toast); return; }
    const info = e.target.closest('[data-info]');
    if (info) { const tip = info.querySelector('.summary__tip'); tip.hidden = !tip.hidden; return; }
    const eye = e.target.closest('[data-eye]');
    if (eye) { const input = eye.closest('.pass').querySelector('input'); input.type = input.type === 'password' ? 'text' : 'password'; return; }
  });

  document.addEventListener('input', (e) => {
    const input = e.target.closest('[data-cart-input]');
    if (!input) return;
    const item = CART.find((i) => i.id === input.dataset.cartInput);
    item.qty = Math.max(1, parseInt(input.value, 10) || 1);
    updateSummary();
  });

  document.querySelectorAll('[data-form]').forEach((form) => form.addEventListener('submit', (e) => {
    e.preventDefault();
    let ok = true;
    form.querySelectorAll('[required]').forEach((f) => {
      const field = f.closest('.field');
      const bad = !f.value.trim() || (f.dataset.capital && f.value.trim()[0] !== f.value.trim()[0].toUpperCase());
      field?.classList.toggle('is-error', bad);
      if (bad) ok = false;
    });
    const agree = form.querySelector('[data-agree]');
    if (agree && !agree.checked) { ok = false; toast('Подтвердите согласие на обработку данных'); }
    if (!ok) return;
    const go = form.dataset.form;
    if (go === 'client') { localStorage.setItem('bx-access', 'client'); location.href = 'profile.html'; }
    else location.href = go;
  }));

  renderCart();
  renderFavorites();
  const orders = document.querySelector('[data-orders]');
  if (orders) renderOrders(orders.dataset.orders);
  document.querySelectorAll('[data-fav-count]').forEach((c) => { if (!c.closest('.side__nav')) return; c.textContent = favs.size; });
}

document.addEventListener('DOMContentLoaded', bindAccount);
