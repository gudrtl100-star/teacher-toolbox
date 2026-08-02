/* ═══════════════════════════════════════════════════════════
   선생님 도구상자 — 첫 화면 동작
   데이터: data/tools.js 의 TOOLS / CATEGORIES
   ═══════════════════════════════════════════════════════════ */

const LS_FAV = 'ta_favs';
const LS_THEME = 'ta_theme';
const LS_PRIV = 'ta_privacy_hide';   /* 개인정보 안내를 다시 열지 않기 */
const NEW_DAYS = 45;

/* ─── 아이콘 ───────────────────────────────────────────────
   24px 그리드, stroke 1.5, 둥근 끝단.
   도구의 icon 필드에 아래 키 이름을 씁니다. 없으면 'tool'. */
const ICON_PATHS = {
  seating:
    '<path d="M4 4h16"/>' +
    '<rect x="3.5" y="9" width="4.6" height="4" rx="1.2"/>' +
    '<rect x="9.7" y="9" width="4.6" height="4" rx="1.2"/>' +
    '<rect x="15.9" y="9" width="4.6" height="4" rx="1.2"/>' +
    '<rect x="3.5" y="16" width="4.6" height="4" rx="1.2"/>' +
    '<rect x="9.7" y="16" width="4.6" height="4" rx="1.2" fill="currentColor"/>' +
    '<rect x="15.9" y="16" width="4.6" height="4" rx="1.2"/>',
  checklist:
    '<path d="M14.4 3.5H6.5A1.5 1.5 0 0 0 5 5v14a1.5 1.5 0 0 0 1.5 1.5h11A1.5 1.5 0 0 0 19 19V8.1z"/>' +
    '<path d="M14.4 3.5v4.6H19"/>' +
    '<path d="M8.6 13.6l1.9 1.9 3.9-3.9"/>',
  timer:
    '<circle cx="12" cy="13.6" r="7.4"/>' +
    '<path d="M12 9.8v3.8h2.9"/>' +
    '<path d="M9.6 2.8h4.8"/>',
  group:
    '<circle cx="9.2" cy="8.6" r="3.1"/>' +
    '<circle cx="17" cy="10.2" r="2.4"/>' +
    '<path d="M3.6 19.8c0-3.1 2.5-5.2 5.6-5.2s5.6 2.1 5.6 5.2"/>' +
    '<path d="M16.4 14.9c2.4.2 4.1 2 4.1 4.6"/>',
  note:
    '<rect x="4.5" y="3.5" width="15" height="17" rx="2.4"/>' +
    '<path d="M8.4 8.6h7.2M8.4 12h7.2M8.4 15.4h4.3"/>',
  calendar:
    '<rect x="3.5" y="5.2" width="17" height="15.3" rx="2.6"/>' +
    '<path d="M3.5 10h17M8 3.2v4M16 3.2v4"/>',
  chart:
    '<path d="M4.6 3.8v16.4h15.2"/>' +
    '<rect x="8" y="12.4" width="3.1" height="4.6" rx="1"/>' +
    '<rect x="13.6" y="8.2" width="3.1" height="8.8" rx="1"/>',
  tool:
    '<rect x="3.5" y="3.5" width="17" height="17" rx="4.6"/>' +
    '<circle cx="12" cy="12" r="2.6"/>',
};

function icon(name, size = 24) {
  const d = ICON_PATHS[name] || ICON_PATHS.tool;
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
    aria-hidden="true">${d}</svg>`;
}

const UI = {
  search: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M16.3 16.3L21 21"/></svg>',
  starOff: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M12 3.6l2.6 5.4 5.9.8-4.3 4.1 1 5.9L12 17l-5.2 2.8 1-5.9L3.5 9.8l5.9-.8z"/></svg>',
  starOn: '<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M12 3.6l2.6 5.4 5.9.8-4.3 4.1 1 5.9L12 17l-5.2 2.8 1-5.9L3.5 9.8l5.9-.8z"/></svg>',
  info: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="8.6"/><path d="M12 11.2v5"/><path d="M12 8.1v.1"/></svg>',
  chevron: '<svg class="chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg>',
  sun: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.6v2.2M12 19.2v2.2M4.4 4.4l1.6 1.6M18 18l1.6 1.6M2.6 12h2.2M19.2 12h2.2M4.4 19.6L6 18M18 6l1.6-1.6"/></svg>',
  moon: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.3A8.5 8.5 0 0 1 9.7 4a8.5 8.5 0 1 0 10.3 10.3z"/></svg>',
  shield: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.8l7.2 2.7v6c0 4.5-3 8.3-7.2 9.7-4.2-1.4-7.2-5.2-7.2-9.7v-6z"/><path d="M8.9 11.9l2.2 2.2 4-4"/></svg>',
  shieldLarge: '<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2.8l7.2 2.7v6c0 4.5-3 8.3-7.2 9.7-4.2-1.4-7.2-5.2-7.2-9.7v-6z"/><path d="M8.9 11.9l2.2 2.2 4-4"/></svg>',
};

/* ─── 상태 ─────────────────────────────────────────────────── */
const state = { query: '', filter: 'all', favs: load(LS_FAV, []) };
let lastAnchor = null;   // 시트를 연 행 — 닫을 때 같은 자리로 되돌아갑니다

function load(k, fallback) {
  try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : fallback; }
  catch (e) { return fallback; }
}
function save(k, v) {
  try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {}
}
function esc(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
function isNew(t) {
  const d = new Date(t.updated || t.added);
  return !isNaN(d) && (Date.now() - d) / 86400000 <= NEW_DAYS;
}
function catLabel(id) {
  const c = CATEGORIES.find(c => c.id === id);
  return c ? c.label : '기타';
}
function formatDate(s) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(s || ''));
  return m ? `${+m[2]}월 ${+m[3]}일 업데이트` : '';
}

/* ─── 필터 ─────────────────────────────────────────────────── */
function visible() {
  const q = state.query.trim().toLowerCase();
  return TOOLS.filter(t => {
    if (state.filter === 'fav' && !state.favs.includes(t.id)) return false;
    if (state.filter !== 'all' && state.filter !== 'fav' && t.category !== state.filter) return false;
    if (!q) return true;
    const hay = [t.name, t.tagline, t.description, catLabel(t.category), ...(t.tags || [])]
      .join(' ').toLowerCase();
    return q.split(/\s+/).every(w => hay.includes(w));
  }).sort((a, b) => {
    const fa = state.favs.includes(a.id), fb = state.favs.includes(b.id);
    if (fa !== fb) return fa ? -1 : 1;
    return String(b.updated || b.added).localeCompare(String(a.updated || a.added));
  });
}

/* ─── 렌더 ─────────────────────────────────────────────────── */
function renderSegments() {
  const segs = [{ id: 'all', label: '전체' }];
  if (state.favs.length) segs.push({ id: 'fav', label: '즐겨찾기' });
  CATEGORIES.forEach(c => {
    if (TOOLS.some(t => t.category === c.id)) segs.push({ id: c.id, label: c.label });
  });
  if (!segs.some(s => s.id === state.filter)) state.filter = 'all';

  document.getElementById('segments').innerHTML =
    '<span class="seg-thumb" id="segThumb"></span>' +
    segs.map(s => `<button class="seg${state.filter === s.id ? ' on' : ''}" data-seg="${esc(s.id)}">${esc(s.label)}</button>`).join('');

  requestAnimationFrame(moveThumb);
}

function moveThumb() {
  const active = document.querySelector('.seg.on');
  const thumb = document.getElementById('segThumb');
  if (!active || !thumb) return;
  thumb.style.width = active.offsetWidth + 'px';
  thumb.style.transform = `translateX(${active.offsetLeft - 3}px)`;
}

function rowHTML(t) {
  const fav = state.favs.includes(t.id);
  return `
    <div class="row" data-id="${esc(t.id)}">
      <span class="row-icon">${icon(t.icon)}</span>
      <div class="row-text">
        <div class="row-title">
          <a class="stretch" href="${esc(t.path)}" target="_blank" rel="noopener">${esc(t.name)}</a>
          ${isNew(t) ? '<span class="dot" title="최근 업데이트"></span>' : ''}
          ${t.status === 'beta' ? '<span class="beta">베타</span>' : ''}
        </div>
        <p class="row-desc">${esc(t.tagline)}</p>
      </div>
      <div class="row-actions">
        <button class="row-btn${fav ? ' starred' : ''}" data-fav="${esc(t.id)}"
                aria-label="${fav ? '즐겨찾기 해제' : '즐겨찾기'}">${fav ? UI.starOn : UI.starOff}</button>
        <button class="row-btn" data-info="${esc(t.id)}" aria-label="자세히">${UI.info}</button>
      </div>
      ${UI.chevron}
    </div>`;
}

function renderList() {
  const list = visible();
  const label = state.filter === 'fav' ? '즐겨찾기'
    : state.filter === 'all' ? '전체 도구' : catLabel(state.filter);

  document.getElementById('listLabel').textContent =
    state.query.trim() ? `검색 결과 ${list.length}` : `${label} ${list.length}`;

  document.getElementById('list').innerHTML = list.length
    ? `<div class="rows">${list.map(rowHTML).join('')}</div>`
    : `<div class="empty"><strong>찾는 도구가 없어요</strong><span>다른 말로 검색하거나 필터를 지워보세요.</span></div>`;
}

function render() { renderSegments(); renderList(); }

/* ─── 상세 시트 ─────────────────────────────────────────────
   누른 행의 위치를 transform-origin으로 잡아, 그 자리에서 자라나고
   같은 자리로 되돌아가게 합니다. */
function openSheet(id, anchorEl) {
  const t = TOOLS.find(t => t.id === id);
  if (!t) return;

  prefetchTool(id);   /* 상세를 열었다면 곧 도구도 열 참입니다 */

  const meta = [
    catLabel(t.category),
    t.version ? `버전 ${t.version}` : '',
    (t.devices || []).includes('mobile') ? 'PC·모바일' : 'PC 권장',
    formatDate(t.updated || t.added),
  ].filter(Boolean).join('  ·  ');

  const steps = (t.howto || [])
    .map((s, i) => `<li class="step"><i>${i + 1}</i><span>${esc(s)}</span></li>`).join('');

  document.getElementById('sheet').innerHTML = `
    <div class="sheet-icon">${icon(t.icon, 30)}</div>
    <h2 id="sheetTitle">${esc(t.name)}</h2>
    <p class="meta">${esc(meta)}</p>
    <p class="desc">${esc(t.description || t.tagline)}</p>
    ${steps ? `<h3>이렇게 씁니다</h3><ol class="steps">${steps}</ol>` : ''}
    ${t.note ? `<p class="tip">${esc(t.note)}</p>` : ''}
    <div class="sheet-actions">
      <button class="btn btn-plain" data-close>닫기</button>
      <a class="btn btn-primary" href="${esc(t.path)}" target="_blank" rel="noopener">도구 열기</a>
    </div>`;

  showSheet(anchorEl);
}

/* 개인정보 안내 — 첫 방문 때 한 번 뜨고, 그 뒤로는 상단 방패 버튼으로 봅니다 */
function openPrivacy(anchorEl) {
  const hide = load(LS_PRIV, false);
  document.getElementById('sheet').innerHTML = `
    <div class="sheet-icon">${UI.shieldLarge}</div>
    ${document.getElementById('privacyTpl').innerHTML}
    <div class="sheet-actions">
      <label class="checkline">
        <!-- autocomplete=off: 새로고침 때 브라우저가 옛 체크 상태를 되살려
             저장값을 덮어쓰는 것을 막습니다 -->
        <input type="checkbox" id="privHide" autocomplete="off"${hide ? ' checked' : ''}>
        <span>다시 열지 않기</span>
      </label>
      <button class="btn btn-primary" data-close>확인했습니다</button>
    </div>`;

  showSheet(anchorEl);
}

/* 시트를 띄웁니다 — 누른 요소가 있으면 그 자리에서 자라나게 origin을 잡습니다 */
function showSheet(anchorEl) {
  const scrim = document.getElementById('scrim');
  const sheet = document.getElementById('sheet');

  lastAnchor = anchorEl || null;
  if (anchorEl) {
    const a = anchorEl.getBoundingClientRect();
    const s = sheet.getBoundingClientRect();
    const scale = s.width ? (sheet.offsetWidth / s.width) : 1;   // 축소 상태 보정
    const w = s.width * scale, h = s.height * scale;
    const x = ((a.left + a.width / 2) - (s.left + s.width / 2)) / w * 100 + 50;
    const y = ((a.top + a.height / 2) - (s.top + s.height / 2)) / h * 100 + 50;
    sheet.style.transformOrigin =
      `${Math.max(-20, Math.min(120, x))}% ${Math.max(-20, Math.min(120, y))}%`;
  } else {
    sheet.style.transformOrigin = '50% 50%';
  }

  scrim.classList.add('open');
  sheet.focus({ preventScroll: true });
}

function closeSheet() {
  document.getElementById('scrim').classList.remove('open');
  if (lastAnchor && document.contains(lastAnchor)) lastAnchor.focus?.();
}

/* ─── 미리 받아두기 ────────────────────────────────────────
   도구 파일이 큽니다(수백 KB). 목록에서 마우스를 올리거나 손가락을
   대는 순간 미리 받아두면, 정작 누를 때는 기다림이 없습니다.
   외부로 나가는 요청이 아니라 같은 저장소 안의 파일입니다. */
const prefetched = new Set();

function prefetchTool(id) {
  const t = TOOLS.find(t => t.id === id);
  if (!t || prefetched.has(t.path)) return;
  prefetched.add(t.path);
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.as = 'document';
  link.href = t.path;
  document.head.appendChild(link);
}

/* ─── 테마 ─────────────────────────────────────────────────── */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const btn = document.getElementById('themeBtn');
  btn.innerHTML = theme === 'dark' ? UI.sun : UI.moon;
  btn.setAttribute('aria-label', theme === 'dark' ? '밝은 화면으로' : '어두운 화면으로');
  save(LS_THEME, theme);
}

/* ─── 시작 ─────────────────────────────────────────────────── */
function init() {
  document.getElementById('searchIcon').innerHTML = UI.search;
  document.getElementById('privacyBtn').innerHTML = UI.shield;
  applyTheme(load(LS_THEME, matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
  render();

  /* 처음 온 사람에게는 자료가 어디로 가는지 먼저 알립니다.
     화면이 그려진 뒤에 떠야 갑작스럽지 않습니다. */
  if (!load(LS_PRIV, false)) setTimeout(() => openPrivacy(null), 500);

  document.getElementById('privacyBtn').addEventListener('click', e => openPrivacy(e.currentTarget));
  document.getElementById('privacyLink').addEventListener('click', e => openPrivacy(e.currentTarget));

  document.getElementById('search').addEventListener('input', e => {
    state.query = e.target.value;
    renderList();
  });

  document.getElementById('segments').addEventListener('click', e => {
    const seg = e.target.closest('[data-seg]');
    if (!seg || seg.dataset.seg === state.filter) return;
    state.filter = seg.dataset.seg;
    document.querySelectorAll('.seg').forEach(s => s.classList.toggle('on', s === seg));
    moveThumb();
    renderList();
  });

  /* 누르기 직전 신호(마우스 올림·손가락 댐)에 미리 받아둡니다 */
  const list = document.getElementById('list');
  const onIntent = e => {
    const row = e.target.closest('.row');
    if (row) prefetchTool(row.dataset.id);
  };
  list.addEventListener('pointerover', onIntent);
  list.addEventListener('touchstart', onIntent, { passive: true });
  list.addEventListener('focusin', onIntent);

  list.addEventListener('click', e => {
    const star = e.target.closest('[data-fav]');
    if (star) {
      e.preventDefault();
      const id = star.dataset.fav;
      state.favs = state.favs.includes(id)
        ? state.favs.filter(x => x !== id)
        : [...state.favs, id];
      save(LS_FAV, state.favs);
      render();
      return;
    }
    const info = e.target.closest('[data-info]');
    if (info) {
      e.preventDefault();
      openSheet(info.dataset.info, info.closest('.row'));
    }
  });

  document.getElementById('scrim').addEventListener('click', e => {
    if (e.target.id === 'scrim' || e.target.closest('[data-close]')) closeSheet();
  });

  document.getElementById('scrim').addEventListener('change', e => {
    if (e.target.id === 'privHide') save(LS_PRIV, e.target.checked);
  });

  document.getElementById('themeBtn').addEventListener('click', () => {
    applyTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });

  /* 스크롤이 시작될 때만 상단바에 헤어라인 */
  const topbar = document.querySelector('.topbar');
  const onScroll = () => topbar.classList.toggle('scrolled', window.scrollY > 6);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  addEventListener('resize', moveThumb);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeSheet();
    if (e.key === '/' && !/^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName)) {
      e.preventDefault();
      document.getElementById('search').focus();
    }
  });
}

document.addEventListener('DOMContentLoaded', init);
