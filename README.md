# 원티드 프리온보딩 6차 2차 과제

## 💡 11팀 | 참여 인원(이미지 클릭시 개인 레포지토리로 이동)

| [<img src="https://avatars.githubusercontent.com/u/16061038?v=4" width="120px" /> ](https://www.github.com/GUGIG)| [<img src="https://avatars.githubusercontent.com/u/62875596?v=4" width="120px" /> ](https://www.github.com/dlsxody1)| [<img src="https://avatars.githubusercontent.com/u/57490711?v=4" width="120px" /> ](https://www.github.com/gkdfo40)| [<img src="https://avatars.githubusercontent.com/u/97019802?v=4" width="120px" /> ](https://www.github.com/hjpark625)| [<img src="https://avatars.githubusercontent.com/u/46833758?v=4" width="120px" /> ](https://www.github.com/ggsno)| [<img src="https://avatars.githubusercontent.com/u/111843724?v=4" width="120px" /> ](https://www.github.com/lee12779)| [<img src="https://avatars.githubusercontent.com/u/66675699?v=4" width="120px" /> ](https://www.github.com/happyeveryone96)| [<img src="https://avatars.githubusercontent.com/u/62886997?v=4" width="120px" />](https://www.github.com/HyunSeungBeom) |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| **[팀장]정재훈**                                                                 | **김인태**                                                                       | **김항래**                                                                       | **박희주**                                                                       | **오강산**                                                                       | **이미란**                                                                        | **정진우**                                                                       | **현승범**                                                                       |

<br />
<br />

[배포링크](https://renewed-fruitte.netlify.app/fruitstore)

<br />
<br />

## 📚 기술스택

<div align="center">
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"/>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"/>
<img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>

<img src="https://camo.githubusercontent.com/9e90e7acc2251aa177a93dc563bc36c57ab992c87937ef96d3deeebaef6cb8fc/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5265636f696c2d3637334142383f7374796c653d666f722d7468652d6261646765266c6f676f3d5265636f696c266c6f676f436f6c6f723d7768697465">


</div>
</br>

- 선택 이유

  - TypeScript : 정적 타입 지원하므로 컴파일 단계에서 오류를 포착할 수 있고, 여러가지 패러다임을 활용할 수 있어서 채택했다.(절차지향, 객체지향, 함수형)

  - styled-component : 컴포넌트화 시켜 다른곳에서도 사용 가능하며, 제일 많이 쓰는 css 라이브러리라 채택했다.  

  - recoil :  props drilling을 피하고 페이지간 데이터 공유를 위해 상태관리 라이브러리 도입을 결정했고, 문법이 간단해 learning curve가 낮아 도입을 결정했다.
    </br>

## 😃 과제 소개

### 목표

- Fruitte의 스토어 리뉴얼 개발

### 과제 요구사항 및 시현 영상

1. 사용자 기능

- 스토어 상품목록 조회(30개 이상의 상품목록, 10개 단위의 페이지네이션, 인피니트 스크롤 X)


https://user-images.githubusercontent.com/46833758/188325919-39f92d4f-b7ca-4372-ad6c-30c38bc6199e.mp4



- 스토어 상품 상세조회(이미지, 상품 옵션, 수량, 가격 등)


https://user-images.githubusercontent.com/46833758/188325983-71d2f046-0021-4c81-9bf0-94c6c8c19a7b.mp4



- 스토어 상품 주문(상품 선택, 수량, 배송주소, 연락처 등)



https://user-images.githubusercontent.com/46833758/188326324-25f0e299-7a5e-4cc9-b67c-d0f1bf55920f.mp4


- 스토어 상품 주문 내역확인 (주문 번호, 상품명, 주문 수량, 주문 옵션)


https://user-images.githubusercontent.com/46833758/188326360-d068c94b-9f06-48d3-8ef4-20be0c03fa8d.mp4



2. 관리자 기능

- 스토어 상품목록 등록 페이지(이미지, 상품 옵션, 수량, 가격 등)

https://user-images.githubusercontent.com/46833758/188326516-928f3a1a-0de6-4775-ae93-c630d3b0596f.mp4


- 스토어 상품목록 관리 페이지
  - 상품 삭제 기능
  - 상품 노출 여부 조정 기능(상품은 유지되어 있되, 노출 여부를 수정하는 기능)


https://user-images.githubusercontent.com/46833758/188326542-9ff7adf6-0655-4794-9255-042bfcbd4229.mp4

## 팀 프로젝트 진행 방법
- 플랫한 프로젝트 구조 지향
- 취합 시 충돌과 혼동을 피하기 위해 page 단위로 2명씩 팀원을 배정, 해당 page 디렉토리 내에서 모두 개발 후 취합

## 프로젝트 구조
```
scr
├─api
├─components 
│  └─styles
├─hooks
├─mockup-data
├─pages
│  ├─admin
│  │  ├─product-list
│  │  └─product-upload
│  ├─fruitstore
│  ├─order
│  ├─order-list
│  └─product-detail
│      ├─store
│      └─style
├─store
└─types
public
└─mockup-data
```

## Commit Convention
| Type     | Description                   |
| -------- | ----------------------------- |
| feat     | Add a new feature             |
| fix      | Fix the bug                   |
| design   | UI design changes such as CSS |
| style    | code formatting               |
| refactor | Refactoring the code          |
| docs     | Modify the document           |
| chore    | etc.                          |
