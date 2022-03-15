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
![그리드 리스트](https://user-images.githubusercontent.com/56627560/158399780-945867cb-2432-452b-901b-14d7dc07f8ee.gif)


- 상단에 위치한 탭을 클릭하면 그리드 뷰 / 리스트 뷰로 UI를 선택할 수 있습니다.

### 메인페이지 : 필터링 옵션
![필터링](https://user-images.githubusercontent.com/56627560/158399835-fb4e5811-eb80-454d-838c-0d736d67b019.gif)


- 필터링 버튼을 클릭하면 옵션에 맞게 콘텐츠를 정렬할 수 있습니다. 

### 메인 페이지 : 인피니티 스크롤
![8640b10c-5332-4939-8ada-6ef351c78abe](https://user-images.githubusercontent.com/56627560/158401472-49dfd589-12a9-4712-826c-d3a336715166.gif)

- 데이터는 18개씩 불러오며, 인피니티 스크롤 형태로 스크롤링을 지원합니다.

### 상세 페이지 : 댓글작성
![댓글 등록](https://user-images.githubusercontent.com/56627560/158400212-b37db054-6b2f-4f74-adb9-f2542d913ea1.gif)

- 리스트 페이지와 각 콘텐츠 페이지에서 댓글을 작성할 수 있습니다.

### 리뷰 페이지 : 리뷰 작성
![리뷰남기기](https://user-images.githubusercontent.com/56627560/158400267-5d9d37d7-402c-437e-bcfb-e2edbb059bc9.gif)

- 리뷰 페이지를 통해 콘텐츠를 작성할 수 있습니다. 이미지 파일을 업로드할 수 있고, 내용이 비워져있을 경우 유효성 검사를 통해 필드를 채울 것을 권합니다.

### 상세 페이지: 주소 공유하기 
![주소복사하기](https://user-images.githubusercontent.com/56627560/158400318-78fc9637-5723-498f-9f6c-dbbda2b85f4e.gif)

- 리스트 페이지와 각 콘텐츠 페이지에서 공유하기 아이콘을 클릭하면 콘텐츠의 주소가 복사됩니다.

### Etc
- Grid 셀에서 이미지를 클릭하면, 상세 페이지로 이동합니다.
- 헤더에 위치한 기업 로고를 클릭하면 메인 페이지로 이동합니다.


