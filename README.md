# Hanteo Assignment

해당 과제는 React를 사용하여 콘텐츠뷰를 구현한 과제입니다. <br />
`React`, `Typescript`, `axios`, `mui`, `react-intersection-observer`, `styled-components` 등의 프레임워크 및 라이브러리를 사용하였습니다.

<br />

## ⭐ 배포주소

```

```

<br />

## ⭐ 시작하기

```
npm install
npm run dev
```

<br />

## ⭐️ 구현 조건 및 구현 사항

- [x] React 를 사용하여 구현 해주세요.
- [x] 카테고리 - “차트”, “Whook”, “이벤트”, “뉴스”, “스토어”, “충전소” 별로 동일한 리스트 페이지가 구현 되어야 합니다.
- [x] 카테고리에 속한 콘텐츠는 리스트형 뷰로 구성되고, 무한 스크롤이 가능한 형태입니다.
- [x] 카테고리간 이동은 상단의 탭 메뉴 클릭과, 좌<->우 슬라이드 터치를 통해서만 가능합니다.
- [x] 중단의 배너 영역은 슬라이드형이며, 최소 3개의 배너로 구성하고 무한루프 동작 및 외부 링크 이동이 가능해야 합니다.
- [x] 해상도는 width 425px 에 최적화 합니다.
- [x] 세로형 콘텐츠 - 순위 영역의 콘텐츠는 임의로 구현하시면 됩니다.

<br />

## ⭐ 느낀점 및 아쉬운 점

우선 컴포넌트의 재사용 및 공통 컴포넌트를 만들어 사용하는데 중점을 두고 과제를 진행했습니다. 구현하는 구체적 사항에 대해 임의적으로 설정한 부분이 있었지만 `Card, ContentList` 등의 컴포넌트에서 재사용을 염두해 두고 구현하였습니다. 아쉬운점은 무한스크롤, 상단 슬라이드 등을 구현할때 라이브러리를 사용했는데, 직접 구현해보지 못한것과 컴포넌트의 렌더링 최적화 부분도 치밀하게 고려하지 못한 점 등입니다.
