import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const EditSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  & > input {
    font-size: 23px;
  }
`;

export const EditButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
`;

export const EditButton = styled.button`
  width: 80px;
  height: 30px;
  margin-bottom: 10px;
  cursor: pointer;

  color: white;
  background-color: gray;
  border: 0px;
  border-radius: 10px;
`;

export const EditCompleteButton = styled.button`
  width: 80px;
  height: 30px;
  margin-bottom: 10px;
  cursor: pointer;

  color: white;
  background-color: #ff8e8f;
  border: 0px;
  border-radius: 10px;
`;

export const EditCancelButton = styled.button`
  width: 80px;
  height: 30px;
  margin-bottom: 10px;
  cursor: pointer;

  color: white;
  background-color: #5f5d9c;
  border: 0px;
  border-radius: 10px;
`;
