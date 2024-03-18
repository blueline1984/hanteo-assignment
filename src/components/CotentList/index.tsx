import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import * as S from "./index.styled";
import IntersectionObserver from "../IntersectionObserver";
import axios from "axios";
import { API_KEY } from "../../constants/apiKey";
import { DataList } from "../../models";

const ContentList = () => {
  const { pathname } = useLocation();
  const [data, setData] = useState<DataList[]>([]);
  const fetchData = async (pageNumber: number) => {
    const { data } = await axios.get(
      `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${API_KEY}&limit=10&page=${pageNumber}&format=json`
    );
    setData((prevData: any) => [...prevData, ...data.artists?.artist]);
  };

  useEffect(() => {
    fetchData(1);
  }, []);

  return (
    <>
      <S.Container>
        <S.Title>{`${pathname.split("/")[1]}`}</S.Title>
        {/* note: data api 에러 발생할 경우, data -> contentList 목데이터로 변경 */}
        {data.map((content, index) => (
          <S.List key={`${index}`}>
            <S.Left>
              <S.ImgContainer>
                {/* note: image 키값이 "#text" 형태로 들어고 있음 */}
                <S.Img src={content.image[1][`text`]} />
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
      <IntersectionObserver fetchMoreData={fetchData} />
    </>
  );
};

export default ContentList;
