import styled from "styled-components";

export const SignUp = () => {
  return (
    <Container>
      <Form>
        <p>☁️ 회원가입 ⛅️</p>
        <input type="text" name="id" placeholder="email" />
        <input type="text" name="nickname" placeholder="닉네임" />
        <input type="password" name="password" placeholder="비밀번호" />
        <input type="submit" value="회원가입" />
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  padding-top: 50px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border: 2px solid white;
  border-radius: 12px;
  height: 40%;
  width: 400px;

  & > p {
    text-align: center;
    color: #40679e;
    font-size: 20px;
    font-weight: 900;
  }

  & > input {
    border: 0;
    width: 80%;
    height: 30px;
    border-radius: 7px;
    padding-left: 10px;
  }
  & > input[type="submit"] {
    background-color: #40679e;
    font-weight: 700;
    color: white;
  }
`;
