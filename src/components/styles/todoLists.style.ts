import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TitleSpan = styled.span`
  font-size: 25px;
  font-weight: bold;
`;

export const TitleSelect = styled.select`
  margin-bottom: 10px;
`;

export const TodoListFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 150px;
  border-top: 2px solid rgb(242, 242, 242);
  margin-bottom: 2rem;
`;

export const DetailLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const TodoList = styled.article`
  border: 2px solid rgb(135, 206, 235);
  background-color: white;
  border-radius: 30px;
  width: 250px;
  padding: 20px 20px 10px 20px;
  margin: 14px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  gap: 20px;

  &:hover {
    box-shadow: 0px 0px 10px 0px rgb(32, 172, 227);
  }
`;

export const TodoListBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  font-size: 20px;
  word-wrap: break-word;
`;

export const Span = styled.span`
  font-size: 25px;
  font-weight: bold;
  margin-top: 10px;
`;

export const Time = styled.time`
  font-size: 15px;
  color: gray;
`;

export const TodoListBtns = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RemoveBtn = styled.button`
  width: 80px;
  height: 30px;
  margin-bottom: 10px;
  cursor: pointer;

  color: rgb(91, 91, 91);
  background-color: rgb(255, 236, 130);
  border: 0px;
  border-radius: 10px;
`;

export const CompleteBtn = styled.button<{ $isDone: boolean }>`
  width: 80px;
  margin-bottom: 10px;
  cursor: pointer;

  color: rgb(91, 91, 91);
  background-color: ${(props) =>
    props.$isDone ? css`rgb(101, 161, 211)` : css`rgba(235, 154, 2, 0.92)`};
  border: 0px;
  border-radius: 10px;
  color: white;
`;
