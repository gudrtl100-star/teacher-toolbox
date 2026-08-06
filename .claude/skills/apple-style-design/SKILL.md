---
name: apple-style-design
description: 애플식(iOS·macOS) 규칙으로 웹 화면을 만들고 다듬습니다. 디자인 토큰(색·여백·라운드·모션 곡선), 크기마다 다른 자간 타이포 스케일, 한국어 줄바꿈 규칙, 누르는 순간 반응하는 모션, 선 아이콘, 존댓말 UI 문구, 접근성 대응을 담고 있습니다. 화면·페이지·UI를 새로 만들거나 고칠 때 반드시 이 스킬을 사용하세요. "애플처럼", "깔끔하게", "디자인 다듬어줘", "정리해줘", "이모지 대신 아이콘", "줄바꿈이 이상해", "글자가 안 읽혀", "간격 좀", "팝업·시트·버튼·카드 만들어줘" 같은 말이 나오면 적용됩니다. 한국어 UI 문구를 쓸 때, 특히 사용자에게 무언가를 설명하거나 안심시키는 문구를 쓸 때도 이 스킬의 '문구' 절을 따르세요. HTML/CSS를 직접 쓰는 상황이면 프레임워크 없이도 그대로 적용됩니다.
---

# 애플식 화면 만들기

## 한 문장으로

**요소는 적게, 남은 것은 정밀하게.**

애플식 화면이 좋아 보이는 이유는 특별한 색이나 그림자가 아니라, **덜어낸 뒤 남은 것에 공을 들였기** 때문입니다. 무언가를 더하고 싶을 때마다 먼저 물어보세요 — 이걸 빼면 뜻이 안 통하는가? 통한다면 뺍니다.

위계는 **색이 아니라 글자 굵기와 여백**으로 만듭니다. 색을 하나 더 쓰고 싶어지면 대개 여백이 부족한 것입니다.

## 토큰 — 값을 즉흥적으로 정하지 않습니다

```css
:root {
  /* 표면 — 흰 배경 위에 살짝 더 밝은 카드 */
  --bg: #fbfbfd;
  --surface: #ffffff;
  --fill: rgba(0, 0, 0, .045);        /* 눌리는 면, 입력칸 */
  --fill-strong: rgba(0, 0, 0, .075);
  --sep: rgba(0, 0, 0, .09);          /* 헤어라인 */

  /* 글자 — 3단계면 충분합니다 */
  --t1: #1d1d1f;   /* 제목·본문 */
  --t2: #6e6e73;   /* 설명 */
  --t3: #8e8e93;   /* 캡션·비활성 */

  /* 액센트 하나. "지금 누를 수 있는 것"에만 */
  --accent: #0071e3;
  --accent-soft: rgba(0, 113, 227, .1);

  /* 상태색은 꼭 필요할 때만 */
  --ok: #248a3d; --warn: #b25000; --err: #d70015;

  /* 여백 — 4의 배수만 */
  --s1: 4px;  --s2: 8px;  --s3: 12px; --s4: 16px;
  --s5: 24px; --s6: 32px; --s7: 48px; --s8: 64px; --s9: 96px;

  /* 라운드 — 요소 크기에 비례 */
  --r-sm: 10px; --r-md: 14px; --r-lg: 20px; --r-xl: 28px;

  /* 모션 — 임계 감쇠 스프링에 가까운 곡선 */
  --ease: cubic-bezier(.32, .72, 0, 1);
  --dur: 380ms;
  --dur-fast: 180ms;
}

:root[data-theme="dark"] {
  --bg: #000000;
  --surface: #1c1c1e;
  --fill: rgba(255, 255, 255, .07);
  --fill-strong: rgba(255, 255, 255, .12);
  --sep: rgba(255, 255, 255, .13);
  --t1: #f5f5f7; --t2: #a1a1a6; --t3: #8e8e93;
  --accent: #2997ff;
  --accent-soft: rgba(41, 151, 255, .16);
}
```

**여백은 토큰만 씁니다.** `padding: 18px`처럼 중간값을 쓰면 화면 전체의 리듬이 깨집니다. 필요해 보인다면 실은 한 단계 위나 아래가 맞습니다.

**라운드는 요소 크기에 비례합니다.** 작은 버튼에 `--r-xl`을 주면 알약이 되고, 큰 카드에 `--r-sm`을 주면 각져 보입니다.

## 타이포 — 자간은 크기마다 다릅니다

전역에 `letter-spacing` 하나를 걸면 어느 크기에선가 반드시 틀립니다. **큰 글씨는 좁히고, 작은 글씨는 넓힙니다.** 큰 글씨는 글자 사이가 실제보다 벌어져 보이고, 작은 글씨는 붙어 보이기 때문입니다.

| 쓰임 | 크기 | 굵기 | 행간 | 자간 |
|---|---|---|---|---|
| 큰 제목 | 2.1–3.25rem | 700 | 1.07 | `-0.038em` |
| 시트 제목 | 1.3–1.5rem | 700 | 1.28 | `-0.030em` |
| 부제 | 1.0625rem | 400 | 1.52 | `-0.014em` |
| 항목 제목 | 1rem | 600 | 1.30 | `-0.022em` |
| 본문 | 0.875rem | 400 | 1.50 | `-0.006em` |
| 캡션 | 0.75rem | 500 | 1.40 | `+0.010em` |

큰 제목은 화면 폭에 따라 자연히 줄어들게 합니다.

```css
h1 { font-size: clamp(2.1rem, 5.5vw, 3.25rem); }
```

## 줄바꿈 — 읽다가 걸리는 자리에서 줄이 바뀌지 않게

이 절은 한국어 화면에서 **가장 자주 어겨지고 가장 크게 체감되는** 부분입니다. 문장을 그냥 흘려 쓰면 브라우저가 아무 데서나 줄을 바꿉니다. "여러 사람이 쓰는 / 컴퓨터라면"처럼 말 중간이 갈라지면 한 번에 안 읽히고, 읽는 사람은 이유도 모른 채 답답해합니다.

**1. 어절은 쪼개지 않습니다.** `body`에 한 번만 걸면 됩니다.

```css
body { word-break: keep-all; overflow-wrap: break-word; }
```

`keep-all`이 없으면 "필요 없으면"이 "필요 없 / 으면"으로 갈라집니다. 다만 긴 영문·주소가 넘치지 않게 `break-word`로 풀어 줍니다.

**2. 문장은 통째로 넘깁니다.** 한 문단에 문장이 둘 이상이면 문장마다 `<span>`으로 감쌉니다.

```html
<p class="sentences">
  <span>보낼 코드 자체가 없습니다.</span>
  <span>인터넷을 꺼도 그대로 됩니다.</span>
</p>
```

```css
.sentences > span { display: inline-block; }
```

`inline-block`이라 한 줄에 다 들어가면 나란히 붙고, 자리가 모자라면 **문장째** 다음 줄로 갑니다. 화면 폭이 얼마든 문장 중간이 갈라지지 않습니다.

> 주의: `.privacy li span { display: block }`처럼 후손 선택자로 `span`을 잡아두면 명시도가 높아 안쪽 문장 `span`까지 `block`이 됩니다. 감싸는 쪽은 `> div > span`처럼 **직계**로 지정하세요.

**3. 갈라지면 뜻이 흐려지는 구는 묶습니다.**

```css
.nowrap { white-space: nowrap; }
```

날짜(`05/06`), 학반(`3학년 5반`), 숫자+단위(`3건`), 버튼 이름(`전체 초기화`)처럼 **한 덩어리로 읽히는 것**에만 씁니다. 긴 문장에 걸면 화면 밖으로 넘칩니다.

**4. 마지막 줄에 한 단어만 남지 않게.**

```css
p, li { text-wrap: pretty; }
```

**5. 제목은 줄 길이를 비슷하게.** 큰 글씨일수록 들쭉날쭉이 눈에 띕니다.

```css
h1, h2 { text-wrap: balance; }
```

특정 위치에서 반드시 끊어야 하면 `<br>`을 직접 넣되, 좁은 화면에서도 어색하지 않은지 확인합니다.

**한 줄에 몇 자가 좋은가**: 한글은 **한 줄 25~40자**. 시트·팝업은 `max-width: 460px` 정도면 자연히 그 범위에 들어옵니다. 문단이 화면 전체 폭으로 퍼지면 다음 줄 첫 글자를 찾느라 눈이 헤맵니다.

**확인하는 법**: 창 너비를 줄여 가며 줄이 어디서 끊기는지 봅니다. 브라우저를 쓸 수 있으면 각 글자의 위치를 재서 줄 단위로 묶어보면 정확합니다(Range API로 글자마다 `getBoundingClientRect().top`을 재고 같은 값끼리 묶습니다).

> **글이 길어서 생긴 문제를 CSS로 막으려 하지 마세요.** 대개는 문장을 줄이는 게 답입니다.

## 색 — 액센트 하나

`--accent`는 **지금 누를 수 있는 것**에만 씁니다. 주요 버튼, 링크, 선택된 상태, 포커스 링. 장식으로 쓰면 "누를 수 있다"는 신호가 희미해집니다.

강조하고 싶을 때 쓸 수 있는 것들이 색 말고도 있습니다 — 굵기(600·700), 여백, 크기, 배경면(`--fill`), 헤어라인. 이걸 다 써보고 나서도 부족할 때만 색을 씁니다.

상태색(초록·주황·빨강)은 **결과를 알릴 때만**. 초록 배경 카드를 장식으로 쓰지 않습니다.

## 모션 — 누르는 순간 반응합니다

- 버튼은 **누를 때**(`:active`) 반응합니다. 떼고 나서가 아닙니다. `transform: scale(.97)`, 100ms
- 화면 전환은 `--ease` 곡선에 350~400ms
- 튕김(오버슈트)은 **손으로 던지듯 끌어서 놓은 동작에만**. 그냥 뜨는 창이 튕기면 어색합니다
- 시트·팝업은 **누른 요소 자리에서 자라나고 같은 자리로 되돌아갑니다.** 왼쪽에서 들어와 아래로 사라지면 방향 감각이 깨집니다

```js
/* 누른 요소의 중심을 시트의 transform-origin 으로 환산합니다 */
const a = anchorEl.getBoundingClientRect();
const s = sheet.getBoundingClientRect();
const x = ((a.left + a.width / 2) - (s.left + s.width / 2)) / s.width * 100 + 50;
const y = ((a.top + a.height / 2) - (s.top + s.height / 2)) / s.height * 100 + 50;
sheet.style.transformOrigin =
  `${Math.max(-20, Math.min(120, x))}% ${Math.max(-20, Math.min(120, y))}%`;
```

시트는 `scale(.92)` + `opacity: 0`에서 시작해 `scale(1)`로 자랍니다. 열릴 때 시트로 포커스를 옮기되 **테두리는 그리지 않습니다**(모달 자체가 이미 강조된 상태입니다).

```css
.sheet:focus, .sheet:focus-visible { outline: none; }
```

## 아이콘 — 이모지를 쓰지 않습니다

이모지는 OS마다 모양이 다르고 화면을 가볍게(싸구려로) 만듭니다. **24×24 그리드, `stroke-width: 1.5`, 둥근 끝단**의 선 아이콘을 인라인 SVG로 그립니다.

```html
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
     stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M15 5l-7 7 7 7"/>
</svg>
```

`stroke="currentColor"`로 두면 글자색을 따라가므로 다크모드가 저절로 됩니다. 아이콘 경로는 한곳(`ICON_PATHS` 같은 객체)에 모아 두고 이름으로 꺼내 씁니다.

작은 아이콘(15~17px)은 `stroke-width`를 1.8~2.2로 올립니다. 얇은 선이 작아지면 사라져 보입니다.

## 문구 — 한국어 UI

**존댓말.** 사람 앞에 띄울 수 있는 화면입니다.

**주어 없는 능동형은 지시로 읽힙니다.** 이게 한국어 UI에서 가장 자주 나는 사고입니다.

| 이렇게 쓰면 | 이렇게 읽힙니다 | 이렇게 씁니다 |
|---|---|---|
| 저장하지 않습니다 | (내가) 저장하면 안 되나? | 어디에도 저장**되지** 않습니다 |
| 보내지 않습니다 | (내가) 보내지 말아야 하나? | 어디로도 나가지 않습니다 |

한국어는 주어를 자주 생략하고, 읽는 사람은 빈 주어 자리에 **자기를 넣습니다.** 피동형으로 쓰거나 주어를 사물로 고정하면 그 자리가 사라집니다. "어디에도 / 어디로도"처럼 부사를 앞세우면 첫 두 글자에서 "설명하는 말"임이 정해집니다.

**제목에는 읽는 사람이 걱정하는 말을 그대로 씁니다.** 완곡하게 쓰면 한 번 더 생각해야 뜻이 옵니다.

- 나쁨: "학생 자료는 이 컴퓨터 안에만 있습니다" — 무슨 말인지 한 박자 늦게 옵니다
- 좋음: "개인정보 유출, 걱정하지 않으셔도 됩니다" — 첫 줄에서 안심됩니다

**미사여구를 걷어냅니다.** 문장이 셋이면 둘로, 항목이 셋이면 둘로 줄여보고 뜻이 상하는지 봅니다. 대개 안 상합니다.

**금지·경고 문구는 조건을 앞에 둡니다.** "여러 사람이 쓰는 컴퓨터라면, 전체 초기화를 눌러 주세요"처럼요. 조건 없이 경고만 있으면 모두가 자기 얘기로 받아들입니다.

## 시트·팝업

```css
.scrim {
  position: fixed; inset: 0; z-index: 100;
  display: grid; place-items: center; padding: var(--s5);
  background: rgba(0, 0, 0, .32);
  backdrop-filter: blur(3px);
  opacity: 0; pointer-events: none;
  transition: opacity var(--dur) var(--ease);
}
.scrim.open { opacity: 1; pointer-events: auto; }

.sheet {
  width: 100%; max-width: 460px; max-height: 82vh; overflow-y: auto;
  padding: var(--s6);
  background: var(--surface); border-radius: var(--r-xl);
  box-shadow: 0 12px 48px rgba(0, 0, 0, .18), 0 0 0 .5px var(--sep);
  transform: scale(.92); opacity: 0;
  transition: transform var(--dur) var(--ease), opacity var(--dur-fast) var(--ease);
}
.scrim.open .sheet { transform: scale(1); opacity: 1; }
```

- 스크림을 눌러도 닫히게 하고, `Escape`도 받습니다
- 닫을 때 원래 눌렀던 요소로 포커스를 되돌립니다
- 좁은 화면에서는 버튼을 세로로 쌓고, **누르는 버튼을 맨 아래**에 둡니다(엄지에 가깝습니다). 체크박스 같은 보조 요소는 그 위로 올립니다
- 첫 방문에만 띄우는 안내라면 "다시 열지 않기"를 두고, 언제든 다시 볼 수 있는 통로(상단 아이콘 버튼, 맨 아래 링크)를 반드시 함께 만듭니다. 되돌릴 길 없이 사라지는 안내는 불안합니다

체크박스로 상태를 저장할 때는 `autocomplete="off"`를 붙입니다. 새로고침 때 브라우저가 옛 체크 상태를 되살려 저장값을 덮어씁니다.

## 그 밖의 자주 쓰는 조각

**상단바** — 콘텐츠가 아래로 흐르는 반투명 층. 경계선은 스크롤할 때만 나타납니다.

```css
.topbar {
  position: sticky; top: 0; z-index: 60;
  background: color-mix(in srgb, var(--bg) 72%, transparent);
  backdrop-filter: saturate(180%) blur(20px);
  border-bottom: 1px solid transparent;
  transition: border-color .3s var(--ease);
}
.topbar.scrolled { border-bottom-color: var(--sep); }
```

**목록** — 카드를 낱개로 흩지 말고 한 판에 모아 헤어라인으로 나눕니다. 구분선은 아이콘을 비껴 **텍스트 시작선에 맞춥니다.**

```css
.row + .row::before {
  content: ''; position: absolute; top: 0; left: 76px; right: 0;   /* 패딩+아이콘+간격 */
  height: 1px; background: var(--sep);
}
```

**행 전체를 누를 수 있게** — 제목 링크를 늘려 행을 덮습니다. 버튼은 그 위(`z-index`)에 둡니다.

```css
.stretch::after { content: ''; position: absolute; inset: 0; z-index: 1; }
```

**세그먼트 컨트롤** — 선택된 알약이 미끄러져 옮겨 갑니다. 배경 알약 하나를 `transform`으로 옮기고 너비만 맞춥니다.

## 접근성 — 지우면 안 됩니다

```css
@media (prefers-reduced-motion: reduce) {
  * { transition-duration: .01ms !important; animation-duration: .01ms !important; }
  .sheet { transform: none !important; }
  .scrim { transition: opacity 200ms ease !important; }
}
@media (prefers-reduced-transparency: reduce) {
  .topbar { background: var(--bg); backdrop-filter: none; }
  .scrim { backdrop-filter: none; background: rgba(0, 0, 0, .5); }
}
@media (prefers-contrast: more) {
  :root { --sep: rgba(0, 0, 0, .28); --t2: #48484a; --t3: #6e6e73; }
  :root[data-theme="dark"] { --sep: rgba(255, 255, 255, .4); --t2: #d1d1d6; --t3: #aeaeb2; }
}
```

포커스 링은 액센트로, 반경을 살짝 띄웁니다.

```css
:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 6px; }
```

**다크모드를 지원한다면 첫 페인트 전에 테마를 확정합니다.** 안 그러면 흰 화면이 한 번 번쩍입니다.

```html
<script>
  try {
    var t = JSON.parse(localStorage.getItem('theme') || 'null');
    document.documentElement.setAttribute('data-theme',
      t || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
  } catch (e) { document.documentElement.setAttribute('data-theme', 'light'); }
</script>
```

## 글꼴

한국어 화면은 Pretendard가 잘 맞습니다. **웹폰트를 외부에서 부르지 말고 저장소에 넣어 상대경로로** 부릅니다. 인터넷이 끊겨도, 학교·사내망이 막아도 그대로 나옵니다.

```css
@font-face {
  font-family: 'Pretendard Variable';
  src: local('Pretendard Variable'),
       url('fonts/PretendardVariable.woff2') format('woff2-variations');
  font-weight: 45 920;
  font-display: swap;
}
body {
  font-family: 'Pretendard Variable', -apple-system, BlinkMacSystemFont,
               'Apple SD Gothic Neo', system-ui, 'Malgun Gothic', sans-serif;
  font-feature-settings: 'tnum';   /* 숫자 폭을 고정해 표가 흔들리지 않게 */
}
```

## 다 만든 뒤 점검

- [ ] 이모지가 남아 있지 않은가 (아이콘은 인라인 SVG)
- [ ] 액센트 색이 "누를 수 있는 것" 아닌 데 쓰이지 않았는가
- [ ] 여백이 모두 4의 배수 토큰인가
- [ ] 자간을 크기별로 다르게 줬는가
- [ ] **창을 좁혀도 말 중간에서 줄이 안 바뀌는가**
- [ ] 버튼이 누르는 순간(`:active`) 반응하는가
- [ ] 팝업이 누른 자리에서 자라나는가
- [ ] 문구가 지시로 읽히지 않는가 (주어 없는 능동형)
- [ ] `prefers-reduced-motion` / `reduced-transparency` / `contrast: more` 대응이 있는가
- [ ] 다크모드에서 헤어라인과 `--t2` 글자가 보이는가

## 이 규칙이 나온 곳

`docs/TOOL_GUIDELINES.md`(전체 규칙)와 `assets/style.css`(실제 구현)가 원본입니다. 이 프로젝트에서 작업할 때는 그 두 파일이 먼저입니다 — 값이 다르면 그쪽을 따르고, 이 스킬을 고쳐 맞춥니다.
