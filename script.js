'use strict';
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const LS = { my: 'tawafuq_my', lb: id => 'tawafuq_lb_' + id };

/* ---------- Question bank: "question|option|option|..." ---------- */
const BANK = `ما مشروبك المفضل في الصباح؟|قهوة~hot-beverage|شاي~teapot|عصير~beverage-box|حليب~glass-of-milk
ما أكلتك المفضلة؟|بيتزا~pizza|برجر~hamburger|شاورما~stuffed-flatbread|كبسة~pot-of-food
متى تنام عادةً؟|مبكراً~sleeping-face|بعد منتصف الليل~crescent-moon|مع الفجر~sunrise|حسب اليوم~tear-off-calendar
إذا فاتتك الحافلة ماذا تفعل؟|أنتظر التالية~bus-stop|آخذ تاكسي~taxi|أمشي~person-walking|أرجع للبيت~house
ما وجهة سفرك المثالية؟|شاطئ~beach-with-umbrella|جبال~mountain|مدينة كبيرة~cityscape|صحراء~desert
ما حيوانك الأليف المفضل؟|قطة~cat-face|كلب~dog-face|عصفور~bird|لا أحب الحيوانات~prohibited
ما أول ما تفعله عند الاستيقاظ؟|أفحص الجوال~mobile-phone|أشرب ماء~droplet|أعود للنوم~sleeping-face|أنهض فوراً~alarm-clock
ما نوع الأفلام المفضل لديك؟|كوميدي~face-with-tears-of-joy|رعب~ghost|رومانسي~red-heart|أكشن~collision
ما فصلك المفضل؟|الصيف~sun|الشتاء~snowflake|الربيع~cherry-blossom|الخريف~fallen-leaf
ما حلواك المفضلة؟|آيس كريم~soft-ice-cream|كيك~shortcake|شوكولاتة~chocolate-bar|كنافة~pancakes
كيف تتصرف عند الغضب؟|أصمت~zipper-mouth-face|أصرخ~angry-face|أبتعد~person-walking|أبكي~crying-face
كيف تقضي عطلة نهاية الأسبوع؟|أنام~sleeping-face|أخرج مع الأصدقاء~busts-in-silhouette|ألعاب فيديو~video-game|رحلة قصيرة~automobile
كيف يكون هاتفك غالباً؟|صامت~muted-speaker|رنين عالٍ~bell|اهتزاز~vibration-mode|بلا شحن~low-battery
ما طريقة التواصل المفضلة؟|رسائل نصية~speech-balloon|مكالمات~telephone-receiver|رسائل صوتية~microphone|لقاء مباشر~handshake
ما موقفك من المفاجآت؟|أحبها~wrapped-gift|أكرهها~anxious-face-with-sweat|حسب نوعها~thinking-face|أفضل التخطيط~spiral-notepad
ما لونك المفضل؟|أحمر~red-heart|أزرق~blue-heart|أسود~black-heart|أخضر~green-heart
أين تحب الجلوس؟|وحدي~person-in-lotus-position|مع العائلة~family|مع الأصدقاء~people-with-bunny-ears|في مكان عام~department-store
ما رأيك بالأكل الحار؟|أعشقه~hot-pepper|لا أتحمله~hot-face|قليلاً فقط~tomato
ماذا تفعل إذا ضحك عليك أحد؟|أضحك معهم~grinning-face-with-smiling-eyes|أحرج~flushed-face|أرد بمزحة~smiling-face-with-sunglasses|أتجاهل~face-without-mouth
ما وسيلة التنقل المفضلة؟|سيارتي~automobile|قطار~high-speed-train|دراجة~bicycle|مشياً~person-walking
ما عشاؤك المثالي؟|وجبة سريعة~french-fries|طبخ بيتي~cooking|مطعم راقٍ~fork-and-knife-with-plate|سناكس خفيفة~popcorn
هل تتأخر عن المواعيد؟|أبداً~check-mark-button|أحياناً~hourglass-not-done|دائماً~snail|أصل مبكراً~rocket
ما نوع الموسيقى المفضل؟|عربية~musical-note|بوب~microphone|راب~headphone|هادئة~violin
ما هوايتك المفضلة؟|القراءة~books|الرياضة~soccer-ball|الرسم~artist-palette|الطبخ~bowl-with-spoon
متى تنجز أعمالك؟|ليلاً~night-with-stars|صباحاً~sunrise|تحت الضغط~fire|بجدول منظم~memo
كيف تحتفل بعيد ميلادك؟|حفلة كبيرة~party-popper|عشاء هادئ~candle|أتجاهله~shushing-face|سفر~airplane
ما رأيك بالتسوق؟|أحبه~shopping-bags|أكرهه~weary-face|أونلاين فقط~laptop|للضرورة فقط~shopping-cart
عند الحيرة، من تستشير؟|صديقاً~waving-hand|العائلة~family|أقرر وحدي~brain|الإنترنت~globe-with-meridians
ما الهدية المفضلة؟|ورود~bouquet|عطر~lotion-bottle|ساعة~watch|رسالة مكتوبة~love-letter
ما مشروبك البارد المفضل؟|مثلجات~shaved-ice|عصير طازج~tropical-drink|ماء~droplet|مشروب غازي~bubble-tea
ماذا تأكل في السينما؟|فشار~popcorn|بطاطس~french-fries|حلويات~candy|لا شيء~prohibited
إذا نسي أحدهم موعدك ماذا تفعل؟|أسامحه~smiling-face-with-hearts|أعاتبه~face-with-raised-eyebrow|أغضب~enraged-face|أنسى الأمر~dashing-away
هل أنت شخص اجتماعي؟|جداً~partying-face|متوسط~slightly-smiling-face|انطوائي~house-with-garden|حسب المزاج~performing-arts`
  .split('\n').map(l => { const p = l.split('|'), x = p.slice(1).map(a => a.split('~')); return { t: p[0], o: x.map(a => a[0]), i: x.map(a => a[1] || '') }; });

/* ---------- Helpers ---------- */
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const base = () => location.href.split('#')[0].split('?')[0];
const hash = s => { let h = 5381; for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) >>> 0; return h.toString(36); };
/* Bulletproof URL-safe Base64: btoa(encodeURIComponent(JSON)) with -/_ and no padding */
const b64e = o => btoa(encodeURIComponent(JSON.stringify(o))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
const b64d = s => {
  s = String(s || '').trim();
  if (/%[0-9A-Fa-f]{2}/.test(s)) { try { s = decodeURIComponent(s); } catch (e) { /* keep raw */ } }
  s = s.replace(/\s/g, '+').replace(/-/g, '+').replace(/_/g, '/').replace(/[^A-Za-z0-9+/]/g, '');
  while (s.length % 4) s += '=';
  return JSON.parse(decodeURIComponent(atob(s)));
};
const enc = b64e, dec = b64d;
const getParam = k => { const m = new RegExp('(?:^|[?&])' + k + '=([^&#]*)').exec(location.search.slice(1) + '&' + location.hash.slice(1)); return m ? m[1] : null; };
const SAFE = v => String(v == null ? '' : v).slice(0, 120);
/* Rebuild + validate a quiz from decoded data. Throws on anything malformed. */
function normalize(d) {
  if (!d || typeof d !== 'object' || !Array.isArray(d.q) || !d.q.length || d.q.length > 40) throw new Error('bad quiz');
  const q = d.q.map(it => {
    let t, o, ic, c;
    if (Array.isArray(it) && typeof it[0] === 'number') {
      const B = BANK[it[0]]; if (!B) throw new Error('bank');
      const ex = Array.isArray(it[2]) ? it[2].map(SAFE).filter(Boolean) : [];
      t = B.t; o = B.o.concat(ex); ic = B.i.concat(ex.map(() => '')); c = it[1];
    } else {
      const a = Array.isArray(it) ? it : [it && it.t, it && it.o, it && it.c];
      if (!Array.isArray(a[1])) throw new Error('opts');
      t = SAFE(a[0]); o = a[1].map(SAFE); ic = o.map(() => ''); c = a[2];
    }
    if (!t || o.length < 2 || o.length > 12 || !Number.isInteger(c) || c < 0 || c >= o.length) throw new Error('q');
    return { t, o, ic, c };
  });
  return { n: SAFE(d.n) || 'صديقك', g: d.g === 'm' ? 'm' : 'f', a: +d.a || 0, r: SAFE(d.r), q };
}
const DB = t => 'https://api.dicebear.com/9.x/fun-emoji/svg?radius=50&seed=' + encodeURIComponent(t);
/* Fallback chain: Noto illustration -> DiceBear illustration -> inline SVG */
window.fb = () => 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle cx="32" cy="32" r="30" fill="#ffd166"/><circle cx="22" cy="26" r="4" fill="#333"/><circle cx="42" cy="26" r="4" fill="#333"/><path d="M20 38q12 14 24 0" stroke="#333" stroke-width="4" fill="none" stroke-linecap="round"/></svg>');
window.imgErr = el => { if (!el.dataset.f) { el.dataset.f = '1'; el.src = DB(el.alt); } else { el.onerror = null; el.src = fb(); } };
const iconURL = (t, ic) => ic ? 'https://api.iconify.design/noto/' + ic + '.svg' : DB(t);
const optHTML = (t, ic, extra = '') => `<button class="opt ${extra}" data-t="${esc(t)}"><img src="${iconURL(t, ic)}" alt="${esc(t)}" loading="lazy" onerror="imgErr(this)"><span>${esc(t)}</span></button>`;
const theme = g => { document.body.dataset.theme = g === 'm' ? 'youth' : 'cute'; };
let toastT;
const toast = m => { const t = $('#toast'); t.textContent = m; t.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('on'), 2400); };
const show = id => { $$('.screen').forEach(s => s.classList.toggle('on', s.id === id)); window.scrollTo(0, 0); };
const getLB = id => { try { return JSON.parse(localStorage.getItem(LS.lb(id))) || []; } catch (e) { return []; } };
const addLB = (id, n, s) => {
  try {
    const l = getLB(id).filter(x => x.n !== n);
    l.push({ n, s, d: Date.now() });
    localStorage.setItem(LS.lb(id), JSON.stringify(l));
  } catch (e) { /* storage unavailable */ }
};
const lbHTML = id => {
  const l = getLB(id).sort((a, b) => b.s - a.s || a.d - b.d);
  if (!l.length) return '<div class="empty">لا توجد نتائج بعد. شارك الرابط وانتظر المشاركين</div>';
  return l.map((x, i) => `<div class="lbrow"><b>${i + 1}</b><span>${esc(x.n)}</span><em>${x.s}%</em></div>`).join('');
};
const confetti = () => {
  const cols = ['#ff5c9e', '#22d3ee', '#ffd166', '#06d6a0', '#3b82f6'];
  for (let i = 0; i < 40; i++) {
    const c = document.createElement('i');
    c.className = 'confetti';
    c.style.cssText = `left:${Math.random() * 100}vw;background:${cols[i % 5]};animation-delay:${Math.random() * .8}s;border-radius:${i % 2 ? '50%' : '2px'}`;
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 3600);
  }
};

/* ---------- Creator flow ---------- */
const cfg = { g: 'f', c: 10 };
let qs = [], dashId = null, lbTimer = null;

$$('.seg').forEach(seg => seg.addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  seg.querySelectorAll('button').forEach(x => x.classList.toggle('on', x === b));
  cfg[seg.dataset.key] = seg.dataset.key === 'c' ? +b.dataset.v : b.dataset.v;
  if (seg.dataset.key === 'g') theme(cfg.g);
}));

$('#btn-next').onclick = () => {
  const n = $('#in-name').value.trim(), a = +$('#in-age').value;
  if (!n) return toast('اكتب اسمك أولاً');
  if (!a || a < 10 || a > 99) return toast('أدخل عمراً صحيحاً');
  cfg.n = n; cfg.a = a; cfg.r = $('#in-rel').value;
  qs = shuffle(BANK.map((_, i) => i)).slice(0, cfg.c).map(i => { const q = BANK[i]; return { t: q.t, o: q.o.slice(), ic: q.i.slice(), n0: q.o.length, b: i, c: -1 }; });
  renderEdit(); show('s-edit');
};
$('#btn-back').onclick = () => show('s-setup');

function renderEdit() {
  $('#qlist').innerHTML = qs.map((q, i) => `
    <div class="qcard" id="qc${i}" data-i="${i}">
      <h4>${i + 1}. ${esc(q.t)}</h4>
      <div class="grid">${q.o.map((o, j) => optHTML(o, q.ic[j], q.c === j ? 'sel' : '').replace('<button', `<button data-j="${j}"`)).join('')}</div>
      <div class="addopt"><input placeholder="أضف خياراً جديداً" maxlength="40"><button type="button">إضافة</button></div>
    </div>`).join('');
}
$('#qlist').addEventListener('click', e => {
  const card = e.target.closest('.qcard'); if (!card) return;
  const q = qs[+card.dataset.i];
  const opt = e.target.closest('.opt');
  if (opt) { q.c = +opt.dataset.j; card.classList.remove('miss'); card.querySelectorAll('.opt').forEach(o => o.classList.toggle('sel', +o.dataset.j === q.c)); return; }
  if (e.target.closest('.addopt button')) {
    const inp = card.querySelector('.addopt input'), v = inp.value.trim();
    if (!v) return toast('اكتب نص الخيار');
    if (q.o.includes(v)) return toast('هذا الخيار موجود');
    if (q.o.length >= 8) return toast('الحد الأقصى 8 خيارات');
    q.o.push(v); q.ic.push(''); renderEdit();
  }
});

function cqInputs() {
  const box = $('#cq-opts'), n = box.children.length;
  const i = document.createElement('input');
  i.placeholder = 'الخيار ' + (n + 1); i.maxLength = 40; box.appendChild(i);
}
cqInputs(); cqInputs();
$('#cq-more').onclick = () => { if ($('#cq-opts').children.length >= 8) return toast('الحد الأقصى 8 خيارات'); cqInputs(); };
$('#cq-add').onclick = () => {
  const t = $('#cq-t').value.trim();
  const o = [...new Set([...$('#cq-opts').children].map(i => i.value.trim()).filter(Boolean))];
  if (!t) return toast('اكتب نص السؤال');
  if (o.length < 2) return toast('أضف خيارين على الأقل');
  qs.push({ t, o, ic: o.map(() => ''), n0: o.length, b: -1, c: -1 });
  $('#cq-t').value = ''; $('#cq-opts').innerHTML = ''; cqInputs(); cqInputs();
  renderEdit(); toast('تمت إضافة السؤال');
  setTimeout(() => $('#qc' + (qs.length - 1)).scrollIntoView({ behavior: 'smooth', block: 'center' }), 50);
};

$('#btn-gen').onclick = () => {
  const miss = qs.findIndex(q => q.c < 0);
  if (miss > -1) {
    const el = $('#qc' + miss); el.classList.add('miss'); el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return toast('أجب عن السؤال رقم ' + (miss + 1));
  }
  const payload = { n: cfg.n, g: cfg.g, a: cfg.a, r: cfg.r, q: qs.map(q => q.b >= 0 ? [q.b, q.c, q.o.slice(q.n0)] : [q.t, q.o, q.c]) };
  const e = enc(payload), id = hash(e), link = base() + '?q=' + e;
  try { localStorage.setItem(LS.my, JSON.stringify({ id, link, n: cfg.n, g: cfg.g })); } catch (x) { /* ignore */ }
  openDash({ id, link, n: cfg.n, g: cfg.g });
};

function openDash(my) {
  dashId = my.id; theme(my.g);
  $('#d-link').value = my.link;
  const msg = `اختبر مدى معرفتك بي في تَوافق! ${my.link}`;
  $('#d-wa').onclick = () => window.open('https://wa.me/?text=' + encodeURIComponent(msg), '_blank');
  $('#d-tg').onclick = () => window.open('https://t.me/share/url?url=' + encodeURIComponent(my.link) + '&text=' + encodeURIComponent('اختبر مدى معرفتك بي في تَوافق!'), '_blank');
  $('#d-copy').onclick = () => {
    const done = () => toast('تم نسخ الرابط');
    if (navigator.clipboard) navigator.clipboard.writeText(my.link).then(done, () => { $('#d-link').select(); document.execCommand('copy'); done(); });
    else { $('#d-link').select(); document.execCommand('copy'); done(); }
  };
  $('#lb').innerHTML = lbHTML(dashId);
  clearInterval(lbTimer);
  lbTimer = setInterval(() => { if ($('#s-dash').classList.contains('on')) $('#lb').innerHTML = lbHTML(dashId); }, 2000);
  show('s-dash');
}
window.addEventListener('storage', e => { if (dashId && e.key === LS.lb(dashId)) $('#lb').innerHTML = lbHTML(dashId); });
$('#d-new').onclick = () => { theme(cfg.g); show('s-setup'); };
$('#btn-mine').onclick = () => { const m = getMy(); if (m) openDash(m); };
const getMy = () => { try { return JSON.parse(localStorage.getItem(LS.my)); } catch (e) { return null; } };

/* ---------- Taker flow ---------- */
let T = null, idx = 0, answers = [], tName = '', locked = false;

function startTaker(d, id) {
  T = { d, id }; theme(d.g);
  $('#w-title').textContent = `اختبر توافقك مع ${d.n}`;
  $('#w-sub').textContent = `${d.q.length} سؤالاً لتعرف كم تعرف ${d.n} (${d.r}). اكتب اسمك وابدأ!`;
  show('s-welcome');
}
$('#t-start').onclick = () => {
  const n = $('#t-name').value.trim();
  if (!n) return toast('اكتب اسمك أولاً');
  tName = n; idx = 0; answers = []; renderQ(); show('s-quiz');
};

function renderQ() {
  const total = T.d.q.length, q = T.d.q[idx];
  $('#dots').innerHTML = Array.from({ length: total }, (_, i) => `<div class="dot ${i < idx ? 'done' : i === idx ? 'on' : ''}">${i + 1}</div>`).join('');
  const act = $('#dots .on'); if (act) act.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
  $('#q-title').textContent = q.t;
  $('#q-opts').innerHTML = q.o.map((o, j) => optHTML(o, q.ic[j]).replace('<button', `<button data-j="${j}"`)).join('');
  locked = false;
}
$('#q-opts').addEventListener('click', e => {
  const b = e.target.closest('.opt'); if (!b || locked) return;
  locked = true; b.classList.add('sel');
  answers[idx] = +b.dataset.j;
  setTimeout(() => { idx++; idx < T.d.q.length ? renderQ() : finish(); }, 550);
});

function finish() {
  const total = T.d.q.length;
  const score = T.d.q.reduce((s, q, i) => s + (answers[i] === q.c ? 1 : 0), 0);
  const pct = Math.round(score / total * 100);
  addLB(T.id, tName, pct);
  const tiers = [
    [90, 'توأم الروح!', `أنت تعرف ${T.d.n} أكثر مما يعرف نفسه! توافق مذهل ورابط لا يُكسر.`],
    [70, 'توافق رائع', `تعرف ${T.d.n} جيداً جداً، وبينكما انسجام جميل.`],
    [50, 'توافق جيد', `بينكما قواسم مشتركة كثيرة، وما زال هناك الكثير لتكتشفه.`],
    [30, 'تحتاج تعارفاً أكثر', `هناك أشياء كثيرة لا تعرفها عن ${T.d.n}، فاجلسا معاً وتحدثا أكثر.`],
    [0, 'غرباء لطفاء', `يبدو أنكما تحتاجان لقضاء وقت أطول معاً. ابدآ من جديد!`]
  ];
  const t = tiers.find(x => pct >= x[0]);
  $('#r-head').textContent = `${tName}، ${t[1]}`;
  $('#r-text').textContent = `أجبت صحيحاً عن ${score} من ${total}. ${t[2]}`;
  $('#r-lb').innerHTML = lbHTML(T.id);
  const resLink = base() + '?res=' + encodeURIComponent(enc({ i: T.id, n: tName, s: pct }));
  $('#r-send').onclick = () => window.open('https://wa.me/?text=' + encodeURIComponent(`حصلت على ${pct}% في اختبار توافقي معك! شاهد نتيجتي: ${resLink}`), '_blank');
  $('#r-own').onclick = () => { location.href = base(); };
  show('s-result');
  const ring = $('#r-ring'); let p = 0;
  const step = setInterval(() => {
    p = Math.min(pct, p + Math.max(1, Math.round(pct / 40)));
    ring.style.setProperty('--p', p); $('#r-pct').textContent = p + '%';
    if (p >= pct) clearInterval(step);
  }, 30);
  if (pct >= 50) confetti();
}

/* ---------- Boot ---------- */
(function init() {
  const my = getMy();
  const clean = () => { try { history.replaceState(null, '', base()); } catch (e) { /* ignore */ } };
  const rp = getParam('res');
  if (rp) {
    try {
      const r = b64d(rp);
      if (typeof r.i !== 'string') throw new Error('res');
      const nm = SAFE(r.n).slice(0, 20) || 'مشارك';
      addLB(r.i, nm, Math.max(0, Math.min(100, +r.s | 0)));
      clean();
      if (my && my.id === r.i) { openDash(my); toast('تمت إضافة نتيجة ' + nm); return; }
    } catch (e) { clean(); }
  }
  const raw = getParam('q');
  if (raw) {
    try { const d = normalize(b64d(raw)); startTaker(d, hash(raw)); return; }
    catch (e) { clean(); } /* corrupted or missing data: fall back silently to the setup screen */
  }
  show('s-setup');
  if (my) $('#btn-mine').classList.remove('hide');
})();
