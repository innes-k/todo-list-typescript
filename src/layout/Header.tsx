import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate();
  const onHomeHandle = () => {
    navigate("/");
  };
  return (
    <>
      <Title>
        <span onClick={onHomeHandle}>☁️ Welcome to To Do List! ⛅️</span>
      </Title>
      <Outlet />
    </>
  );
};

export default Header;

export const Title = styled.div`
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  padding: 30px;
  & > span {
    cursor: pointer;
  }
`;
