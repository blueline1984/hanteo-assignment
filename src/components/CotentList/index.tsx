import * as S from "./index.styled";
import { contentList } from "../../__mocks__/contentList";

const ContentList = () => {
  return (
    <S.Container>
      <S.Title>{"Content Title"}</S.Title>
      {contentList.map((content, index) => (
        <S.List key={`${content.mbid + index}`}>
          <S.Left>
            <S.ImgContainer>
              <S.Img src={content.image[1].text} />
            </S.ImgContainer>
            <S.RightText>{index}</S.RightText>
          </S.Left>
          <S.Center>
            <S.Top>{content.name}</S.Top>
            <S.Bottom>{content.listeners}</S.Bottom>
          </S.Center>
          <S.Right href={content.url} target="_blank">
            view
          </S.Right>
        </S.List>
      ))}
    </S.Container>
  );
};

export default ContentList;
