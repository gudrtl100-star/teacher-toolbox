# 배포 가이드 — GitHub Pages로 공개하기

## 지금 상태

| | |
|---|---|
| **사이트 주소** | https://gudrtl100-star.github.io/teacher-toolbox/ |
| 저장소 | https://github.com/gudrtl100-star/teacher-toolbox (Public) |
| 배포 방식 | GitHub Pages, `main` 브랜치 `/ (root)` |
| 첫 공개 | 2026-08-02 |

Pages 설정은 이미 켜져 있습니다. 아래 "처음 한 번만 하는 일"은 다시 하지 않아도 됩니다.

> ⚠️ 저장소가 공개라서 올린 파일은 **누구나 볼 수 있습니다.**
> 학생 명단, 출결 파일, 나이스에서 받은 엑셀·PDF는 **이 폴더에 두지 마세요.**
> `.gitignore`가 해당 확장자와 `_backup_*/` 폴더를 막아주지만, 최종 확인은 직접 하세요.

## 도구를 추가하거나 고친 뒤 (평소에 하는 일)

폴더에서 아래 한 줄을 실행합니다.

```bash
git add . && git commit -m "무엇을 바꿨는지 한 줄" && git push
```

1~2분 뒤 사이트에 반영됩니다. 바로 안 보이면 `Ctrl + Shift + R`로 새로고침하세요.

무엇이 올라갈지 미리 보고 싶으면:

```bash
git status --short
```

### 웹에서 올리는 방법 (명령어 없이)

저장소 화면 → **Add file** → **Upload files** → 바뀐 파일을 끌어다 놓고 **Commit changes**.
같은 이름의 파일을 올리면 덮어씁니다.

## 자주 겪는 문제

| 증상 | 해결 |
|---|---|
| 고쳤는데 옛날 화면이 나옴 | `Ctrl + Shift + R`로 새로고침. 브라우저가 캐시를 잡고 있습니다 |
| 첫 화면은 뜨는데 도구가 404 | `data/tools.js`의 `path`와 실제 폴더명 **대소문자**가 정확히 같은지 확인. GitHub은 대소문자를 구분합니다 |
| 도구 카드가 안 보임 | `tools.js`의 쉼표·따옴표 확인. `F12` → Console에 오류가 보입니다 |
| 한글 폴더명이 주소에서 깨짐 | 도구 폴더는 영문으로 만듭니다 |
| `git push`가 로그인을 다시 물음 | 브라우저 창에서 GitHub에 로그인하면 됩니다. 한 번 하면 기억합니다 |
| 주소가 404 | Settings → Pages에서 Branch가 `main` / `root`인지 확인하고 2분 기다립니다 |

## 처음 한 번만 하는 일 (이미 끝냈습니다)

다른 컴퓨터에서 다시 설정하거나, 동료 선생님이 같은 방식으로 만들 때 참고합니다.

### 1. GitHub 계정 만들기

[github.com](https://github.com)에서 가입합니다. 구글 계정으로도 됩니다.

### 2. 저장소 만들기

1. 오른쪽 위 `+` → **New repository**
2. **Repository name**: `teacher-toolbox` (영문 소문자·하이픈만)
3. **Public** 선택 — Pages를 무료로 쓰려면 공개여야 합니다
4. 아래 체크박스(README, .gitignore, license)는 **모두 비워둡니다.** 이미 있는 파일과 충돌합니다
5. **Create repository**

### 3. 폴더를 저장소에 연결하기

커밋에 이메일이 함께 공개되므로, GitHub이 주는 가려진 주소를 씁니다.
[github.com/settings/emails](https://github.com/settings/emails)의 **Keep my email addresses private** 아래에 적혀 있습니다.

```bash
git init -b main
git config user.name "gudrtl100-star"
git config user.email "286980086+gudrtl100-star@users.noreply.github.com"
git add .
git commit -m "첫 공개"
git remote add origin https://github.com/gudrtl100-star/teacher-toolbox.git
git push -u origin main
```

처음 `push`할 때 브라우저 로그인 창이 뜹니다. 로그인하면 그 뒤로는 묻지 않습니다.

### 4. Pages 켜기

1. 저장소 위쪽 **Settings** 탭
2. 왼쪽 메뉴 **Pages**
3. **Source**: `Deploy from a branch`
4. **Branch**: `main` / `/ (root)` → **Save**

1~2분 뒤 주소가 살아납니다.

## 나중에 주소를 예쁘게 하고 싶다면

도메인을 사서(연 1~2만 원대) Settings → Pages → Custom domain에 연결하면
`https://교사도구.kr` 같은 주소를 쓸 수 있습니다. 급하지 않습니다. github.io 주소로도 충분합니다.
