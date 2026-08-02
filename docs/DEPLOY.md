# 배포 가이드 — GitHub Pages로 공개하기

무료이고, 기한이 없고, 파일만 올리면 주소가 생깁니다. 카드 등록도 서버 설정도 없습니다.

> ⚠️ **먼저 읽어주세요.** GitHub Pages로 공개하면 올린 파일은 **누구나 볼 수 있습니다.**
> 학생 명단, 출결 파일, 나이스에서 받은 엑셀·PDF는 **절대 이 폴더에 두지 마세요.**
> 도구 파일(HTML)과 문서만 올립니다. `.gitignore`가 실수를 한 번 걸러주지만, 최종 확인은 직접 하세요.

## 처음 한 번만 하는 일

### 1. GitHub 계정 만들기

[github.com](https://github.com)에서 가입합니다. 이메일 인증까지 하면 됩니다.

### 2. 저장소 만들기

1. 오른쪽 위 `+` → **New repository**
2. **Repository name**: `teacher-toolbox` (영문 소문자·하이픈만)
3. **Public** 선택 — Pages를 무료로 쓰려면 공개여야 합니다
4. 나머지는 그대로 두고 **Create repository**

### 3. 파일 올리기

만든 저장소 화면에서 **uploading an existing file** 링크를 누릅니다.

`선생님 도구상자` 폴더 **안의 내용물**을 통째로 끌어다 놓습니다. (폴더 자체가 아니라 안에 있는 `index.html`, `assets`, `data`, `tools`, `docs`, `README.md`)

파일이 크면(출결 점검기가 2MB 정도) 조금 걸립니다. 다 올라가면 아래 **Commit changes**를 누릅니다.

### 4. Pages 켜기

1. 저장소 위쪽 **Settings** 탭
2. 왼쪽 메뉴 **Pages**
3. **Source**: `Deploy from a branch`
4. **Branch**: `main` / `/ (root)` → **Save**

1~2분 뒤 같은 화면 위쪽에 주소가 뜹니다.

```
https://<내아이디>.github.io/teacher-toolbox/
```

이 주소가 동료 선생님에게 보낼 링크입니다.

## 도구를 추가하거나 고친 뒤

### 웹에서 (간단)

저장소 화면 → **Add file** → **Upload files** → 바뀐 파일을 끌어다 놓고 **Commit changes**.
같은 이름의 파일을 올리면 덮어씁니다.

### 명령어로 (익숙해지면)

처음 한 번만:

```bash
git init
git remote add origin https://github.com/<내아이디>/teacher-toolbox.git
git branch -M main
```

이후에는 고칠 때마다:

```bash
git add . && git commit -m "수업 타이머 추가" && git push
```

## 자주 겪는 문제

| 증상 | 해결 |
|---|---|
| 주소를 열면 404 | Pages 설정에서 Branch가 `main` / `root`인지 확인. 저장한 뒤 2분 기다립니다 |
| 첫 화면은 뜨는데 도구가 404 | `data/tools.js`의 `path`와 실제 폴더명 대소문자가 정확히 같은지 확인. GitHub는 대소문자를 구분합니다 |
| 고쳤는데 옛날 화면이 나옴 | `Ctrl + Shift + R`로 새로고침. 브라우저가 캐시를 잡고 있습니다 |
| 도구 카드가 안 보임 | `tools.js`의 쉼표·따옴표 확인. `F12` → Console에 오류가 보입니다 |
| 한글 폴더명이 주소에서 깨짐 | 도구 폴더는 영문으로 만듭니다 |

## 나중에 주소를 예쁘게 하고 싶다면

도메인을 사서(연 1~2만 원대) Settings → Pages → Custom domain에 연결하면
`https://교사도구.kr` 같은 주소를 쓸 수 있습니다. 급하지 않습니다. github.io 주소로도 충분합니다.
