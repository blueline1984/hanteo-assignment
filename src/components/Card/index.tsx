import * as S from "./index.styled";
import { ICardItem } from "../../interface/index.interface";

interface ICard {
  cardItem: ICardItem;
}

const Card = ({ cardItem }: ICard) => {
  return (
    <S.Container>
      <S.CardImg src={cardItem.imgUrl} />
      <S.CardContent>
        <S.Box>
          <S.MainText>{cardItem.mainText}</S.MainText>
          {cardItem.buttonText && <S.Button>{cardItem.buttonText}</S.Button>}
        </S.Box>
        <S.SubText>{cardItem.subText}</S.SubText>
      </S.CardContent>
    </S.Container>
  );
};

export default Card;
