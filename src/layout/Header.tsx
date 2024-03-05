import styled from "styled-components";

const Header = () => {
  return (
    <Title>
      <span>☁️ Welcome to To Do List! ⛅️</span>
    </Title>
  );
};

export default Header;

export const Title = styled.div`
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  padding: 30px;
`;
