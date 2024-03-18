import * as S from "./index.styled";
import { Link } from "react-router-dom";
import { Banner } from "../../interface/index.interface";

interface ICard {
  cardItem: Banner;
}

const Card = ({ cardItem }: ICard) => {
  return (
    <S.Container>
      <S.CardImg src={cardItem.imgUrl} />
      <S.CardContent>
        <S.Box>
          <S.MainText>{cardItem.mainText}</S.MainText>
          {cardItem.buttonText && (
            <S.Button href={cardItem.url} target="_blank">
              {cardItem.buttonText}
            </S.Button>
          )}
        </S.Box>
        <S.SubText>{cardItem.subText}</S.SubText>
      </S.CardContent>
    </S.Container>
  );
};

export default Card;
