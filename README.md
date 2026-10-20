# 모아 MOA — AI·디자인·콘텐츠 제작자 커뮤니티

AI, 디자인, 콘텐츠를 만드는 사람들이 작업과 경험을 나누는 한국어 커뮤니티입니다.

- 홈페이지: https://minji5996-creator.github.io/MINJI-DATA/ (모아 메인으로 자동 연결)
- 라이브: https://moa-creator-community-1020.promrecord.chatgpt.site
- GitHub: https://github.com/minji5996-creator/MINJI-DATA
- 초기 공개 범위: 사이트 소유자 전용. 공개 범위는 Sites에서 관리합니다.

## 기능

- 게시글 작성·조회·본인 글 삭제
- 카테고리 필터, 제목·본문·작성자 검색, 최신순·공감순 정렬
- 댓글 작성, 계정별 공감·취소
- ChatGPT 로그인, 서버에서 작성자 권한 확인
- 서버 데이터베이스(Cloudflare D1)에 게시글·댓글·공감 저장
- 현재 브라우저에 글 북마크 저장
- 한국어 반응형 화면
- 가이드 예시 글은 '예시 · 가이드'로 표시되며 실제 회원 활동과 분리됩니다.

## 기술

React 19 / TypeScript / Vinext / Cloudflare Workers / D1 / Drizzle.
GitHub Pages는 정적 파일 호스팅이므로 이 프로젝트의 로그인·데이터베이스 API를 실행하지 않습니다. GitHub는 소스 저장소로 사용하고 서버 앱은 Sites에 배포합니다.

## 로컬 실행

Node.js 22.13 이상이 필요합니다.

```sh
npm ci
npm run build
node --import ./scripts/sites-env.mjs ./node_modules/wrangler/bin/wrangler.js d1 execute DB --local --config dist/server/wrangler.json --persist-to .wrangler/state --file drizzle/0000_careful_rogue.sql
npm run dev
```

http://127.0.0.1:5173/ 에 접속합니다. 로컬 로그인은 개발용 모의 계정을 사용하며 라이브는 플랫폼 인증을 사용합니다. 운영·로컬 DB는 별개입니다.

## 검증

- TypeScript 검사 및 프로덕션 빌드
- 로컬 홈페이지/API HTTP 응답
- 로그인, 미로그인 쓰기 차단, 입력 검증, 게시글·댓글 저장, 공감 토글, 본인 글 삭제
- 브라우저 자동화 도구가 실행되지 않아 실제 화면의 브라우저 검사는 미확인

## 배포

`.openai/hosting.json`은 연결된 Sites 프로젝트와 D1 바인딩을 선언합니다. Sites 소스 저장소에 검증한 소스를 커밋·푸시하고 해당 소스에서 빌드한 아카이브를 저장·배포합니다. GitHub 변경 사항의 자동 배포는 별도로 구성되지 않았습니다.

API 키·토큰·로컬 실행 상태는 저장소에 포함하지 않습니다.

## Google Analytics

공통 app/layout.tsx의 head에 G-HJK3Z0NNKG Google 태그를 한 번만 설치했습니다. GitHub Pages 진입 페이지는 실제 커뮤니티로 이동하며 별도 page_view를 전송하지 않습니다. GA4 대시보드의 수신 여부는 별도 확인이 필요합니다.
