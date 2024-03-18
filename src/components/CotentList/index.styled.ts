import styled from "styled-components";

export const Container = styled.div`
  background-color: #ebebeb;
`;

export const List = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 5px;
  font-size: 16px;
  background-color: #fff;
`;

export const Title = styled.p`
  margin: 0;
  padding: 10px;
  font-weight: bold;
  font-size: 18px;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  padding-left: 10px;
`;

export const Right = styled.a`
  text-decoration: none;
  text-align: center;
  font-size: 12px;
  width: 10%;
  background-color: #fff;
  color: #fc5aa8;
  border: #fc5aa8 1px solid;
  border-radius: 10px;
`;

export const RightText = styled.p`
  padding-left: 10px;
`;

export const ImgContainer = styled.div`
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 10px;
`;

export const Img = styled.img`
  /* padding-right: 10px; */
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const Top = styled.div``;
export const Bottom = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: #808080;
`;
