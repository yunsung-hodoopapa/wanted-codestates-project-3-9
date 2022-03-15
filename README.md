## 🚀 배포 링크

https://wanted-preonboarding-team3-balaan.netlify.app/

💿 실행 방법

```cmd
$ git clone https://github.com/pre-onboarding-team3/wanted-codestates-project-3-9

$ npm install

$ npm run start
```

## 😎 3팀

- 양윤성 : 리스트 뷰, 상세페이지 및 에러핸들링 (팀장)
- 도지현 : 조건에 맞는 데이터 필터링 기능 구현
- 노학민 : 이미지 업로드 기능 구현
- 김남경 : 댓글 기능 구현
- 김형욱 : 리뷰 페이지 및 별점 기능 구현
- 김경봉 : 그리드 뷰, 인피니티 스크롤 기능 구현

## 🎇사용 기술스택

- Javascript
- React
- Redux
- styled-components

👩‍💻구현

### 메인 페이지 : 그리드 뷰 / 리스트 뷰
<image src="https://media.vlpt.us/images/yunsungyang-omc/post/48b7040c-1b01-4f2e-8345-f9bbcba6a73b/%E1%84%80%E1%85%B3%E1%84%85%E1%85%B5%E1%84%83%E1%85%B3&%E1%84%85%E1%85%B5%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3.gif">

- 상단에 위치한 탭을 클릭하면 그리드 뷰 / 리스트 뷰로 UI를 선택할 수 있습니다.

### 메인 페이지 : 필터링 옵션
<image src="https://media.vlpt.us/images/yunsungyang-omc/post/4c2bc8cd-6ff5-4de2-9a9a-50371600de9c/%E1%84%91%E1%85%B5%E1%86%AF%E1%84%90%E1%85%A5%E1%84%85%E1%85%B5%E1%86%BC.gif">

- 필터링 버튼을 클릭하면 옵션에 맞게 콘텐츠를 정렬할 수 있습니다. 

### 메인 페이지 : 인피니티 스크롤
<image src="https://media.vlpt.us/images/yunsungyang-omc/post/dfd1b6b6-3fd5-490a-b024-44394ad83bfe/%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%91%E1%85%B5%E1%84%82%E1%85%B5%E1%84%90%E1%85%B5%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%A9%E1%86%AF.gif">

- 데이터는 18개씩 불러오며, 인피니티 스크롤 형태로 스크롤링을 지원합니다.

### 상세 페이지 : 댓글작성
<image src="https://media.vlpt.us/images/yunsungyang-omc/post/b2d2ade8-62a6-426a-8752-462474d98763/%E1%84%83%E1%85%A2%E1%86%BA%E1%84%80%E1%85%B3%E1%86%AF%20%E1%84%83%E1%85%B3%E1%86%BC%E1%84%85%E1%85%A9%E1%86%A8.gif">

- 리스트 페이지와 각 콘텐츠 페이지에서 댓글을 작성할 수 있습니다.

### 리뷰 페이지 : 리뷰 작성

<image src="https://media.vlpt.us/images/yunsungyang-omc/post/f7920c87-0971-4e27-87c8-643e9d2395c8/%E1%84%85%E1%85%B5%E1%84%87%E1%85%B2%E1%84%82%E1%85%A1%E1%86%B7%E1%84%80%E1%85%B5%E1%84%80%E1%85%B5.gif">

- 리뷰 페이지를 통해 콘텐츠를 작성할 수 있습니다. 이미지 파일을 업로드할 수 있고, 내용이 비워져있을 경우 유효성 검사를 통해 필드를 채울 것을 권합니다.

### 상세 페이지: 주소 공유하기 

<image src="https://media.vlpt.us/images/yunsungyang-omc/post/f646a8a2-9c87-4f10-9788-43630cfa2a5b/%E1%84%8C%E1%85%AE%E1%84%89%E1%85%A9%E1%84%87%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A1%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5.gif">

- 리스트 페이지와 각 콘텐츠 페이지에서 공유하기 아이콘을 클릭하면 콘텐츠의 주소가 복사됩니다.

### Etc
- Grid 셀에서 이미지를 클릭하면, 상세 페이지로 이동합니다.
- 헤더에 위치한 기업 로고를 클릭하면 메인 페이지로 이동합니다.


