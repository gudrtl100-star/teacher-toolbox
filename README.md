# 선생님 도구상자

교사 업무에 바로 쓰는 웹 도구를 한곳에 모은 아카이브입니다.
설치·회원가입 없이 링크만 열면 동작하고, 올린 파일과 학생 이름은 브라우저 밖으로 나가지 않습니다.

## 지금 들어 있는 도구

| 도구 | 하는 일 | 위치 |
|---|---|---|
| 🪑 학생 자리 배치 | 배치 규칙을 지키며 자리를 뽑고 좌석표를 이미지로 저장 | `tools/seating-chart/` |
| 📋 월 출결 점검기 | 나이스 출결 파일들을 교차 대조해 어긋난 곳을 찾기 | `tools/attendance-checker/` |

## 폴더 구조

```
선생님 도구상자/
├── index.html              ← 아카이브 첫 화면
├── assets/
│   ├── style.css           ← 첫 화면 디자인 (도구에는 영향 없음)
│   ├── app.js              ← 아이콘 + 검색·필터·즐겨찾기 동작
│   └── fonts/              ← Pretendard (저장소에 포함, 외부 요청 없음)
├── data/
│   └── tools.js            ← ★ 도구 목록. 도구를 늘릴 때 여기만 고칩니다
├── tools/
│   ├── seating-chart/index.html
│   └── attendance-checker/index.html
└── docs/                   ← 기획·운영 문서
```

## 빠르게 확인하기

`index.html`을 더블클릭하면 바로 열립니다. 서버가 필요 없습니다.

## 도구를 하나 더 추가하려면

1. `tools/<영문-이름>/index.html`에 도구 파일을 넣습니다.
2. `data/tools.js`의 `TOOLS` 배열에 항목 하나를 추가합니다.
3. 끝입니다. 자세한 절차는 [docs/ADD_TOOL.md](docs/ADD_TOOL.md).

## 문서

- [기획서](docs/PLAN.md) — 목표, 원칙, 로드맵
- [도구 추가 절차](docs/ADD_TOOL.md) — 새 도구를 붙이는 법
- [도구 제작 규칙](docs/TOOL_GUIDELINES.md) — 새 도구를 만들 때 지킬 것
- [배포 가이드](docs/DEPLOY.md) — GitHub Pages로 공개하기
- [아이디어 목록](docs/IDEAS.md) — 다음에 만들 것들
