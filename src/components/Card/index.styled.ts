import styled from "styled-components";

export const Container = styled.div`
  border-radius: 10px;
  height: 85%;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ImgContainer = styled.div`
  border-radius: 10px 10px 0 0;
  width: 100%;
  height: 150px;
  overflow: hidden;
`;

export const CardImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const CardContent = styled.div`
  border-radius: 0 0 10px 10px;
  padding: 10px;
  border-width: 0px 1px 1px 1px;
  border-color: rgba(0, 0, 0, 0.05);
  border-style: solid;
`;

export const MainText = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Button = styled.a`
  text-decoration: none;
  text-align: center;
  font-size: 10px;
  width: 25%;
  background-color: #fff;
  color: #fc5aa8;
  border: #fc5aa8 1px solid;
  border-radius: 10px;
  margin-left: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SubText = styled.p`
  font-size: 12px;
  text-align: end;
  margin-bottom: 0;
`;
