/* ─────────────────────────────────────────────────────────────
   도구 카탈로그 — 이 파일 하나만 고치면 목록이 바뀝니다.
   새 도구 추가 방법: docs/ADD_TOOL.md 참고
   ───────────────────────────────────────────────────────────── */

/* 카테고리 정의 (순서대로 필터에 표시됨) */
const CATEGORIES = [
  { id: 'classroom',  label: '학급운영' },
  { id: 'attendance', label: '출결·행정' },
  { id: 'lesson',     label: '수업' },
  { id: 'records',    label: '평가·기록' },
];

/* 도구 목록
   필수: id, name, tagline, category, icon, path, added
   선택: description, tags, version, updated, status, offline, devices, howto, note

   icon 은 이모지가 아니라 assets/app.js 의 ICON_PATHS 키입니다.
   쓸 수 있는 값: seating, checklist, timer, group, note, calendar, chart, tool
   맞는 게 없으면 'tool'을 쓰거나 ICON_PATHS에 새로 그려 넣으세요.
*/
const TOOLS = [
  {
    id: 'seating-chart',
    name: '학생 자리 배치',
    tagline: '규칙을 지키면서 자리를 뽑고, 좌석표를 이미지로 저장',
    description:
      '교실 레이아웃(열·행·앞줄 우선)과 학생 명단을 넣고 자리를 뽑습니다. ' +
      '특정 학생을 붙이거나 떨어뜨리는 배치 규칙, 자리 고정, 뽑은 뒤 자리 맞바꾸기를 지원합니다. ' +
      '지난번과 같은 자리·같은 짝은 피해서 뽑습니다. ' +
      '학생용(정방향)·교사용(좌우 반전) 좌석표를 이미지로 저장할 수 있습니다.',
    category: 'classroom',
    tags: ['자리', '좌석표', '제비뽑기', '학급운영', '이미지 저장'],
    icon: 'seating',
    path: 'tools/seating-chart/index.html',
    version: '1.2.0',
    added: '2026-07-31',
    updated: '2026-10-01',
    status: 'stable',
    offline: true,
    devices: ['pc', 'mobile'],
    howto: [
      '설정 버튼(PC는 오른쪽 아래)에서 교실 열·행을 정하고 학생 명단(엑셀·CSV)을 올립니다.',
      '필요하면 "배치 규칙" 탭에서 붙이기/떨어뜨리기 규칙을 추가합니다.',
      '"자리 뽑기"를 누릅니다. 한번에 공개 / 직접 클릭 공개 중 고를 수 있습니다.',
      '결과가 마음에 들면 학생용·교사용 좌석표를 이미지로 저장합니다.',
    ],
    note: '설정 화면은 비밀번호로 잠겨 있어 수업 중 학생이 열 수 없습니다.',
  },
  {
    id: 'attendance-checker',
    name: '월 출결 점검기',
    tagline: '신고서·출결 현황·학급별 집계가 서로 맞는지 한 번에 대조',
    description:
      '나이스에서 내려받은 월별 출결 파일을 올리면 서로 어긋나는 부분을 찾아줍니다. ' +
      '출결 현황과 신고서 대조, 지각·조퇴·결과 결시 교시 확인, 학생별 건수와 학급 집계 비교, ' +
      '결재 완료 여부, 생리 결석 한도와 사유 표현까지 점검합니다.',
    category: 'attendance',
    tags: ['출결', '나이스', '결석신고서', '월말업무', '교차검증'],
    icon: 'checklist',
    path: 'tools/attendance-checker/index.html',
    version: '1.1.0',
    added: '2026-07-31',
    updated: '2026-09-29',
    status: 'stable',
    offline: true,
    devices: ['pc'],
    howto: [
      '나이스에서 결석신고서(엑셀), 지각·조퇴·결과신고서(엑셀), 출결 현황(PDF), 학급별 출결(PDF)을 내려받습니다.',
      '교외체험학습 현황(엑셀)은 있으면 함께 올립니다. 선택 항목입니다.',
      '파일을 끌어다 놓으면 종류를 자동으로 알아봅니다.',
      '"출결 점검 시작"을 누르고 나온 항목을 하나씩 확인합니다.',
    ],
    note: '월말 출결 마감 전에 돌려보면 수정할 시간이 남습니다.',
  },
];
