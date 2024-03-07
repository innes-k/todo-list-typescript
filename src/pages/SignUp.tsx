import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signUp } from "../api/auth-api";

export const SignUp = () => {
  const navigate = useNavigate();
  const onSignUpHandler = (e: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    const id = formData.get("id") as string;
    const nickname = formData.get("nickname") as string;
    const password = formData.get("password") as string;

    signUp({ id, nickname, password });
    navigate("/login");
  };
  return (
    <Container>
      <Form onSubmit={onSignUpHandler}>
        <p>☁️ 회원가입 ⛅️</p>
        <input type="text" name="id" placeholder="email" />
        <input type="text" name="nickname" placeholder="닉네임" />
        <input type="password" name="password" placeholder="비밀번호" />
        <input type="submit" value="회원가입" />
        <div>
          <span>이미 회원이신가요? &rarr; </span>
          <LinkToLogin style={{ cursor: "pointer" }} to="/login">
            로그인하기
          </LinkToLogin>
        </div>
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
  height: 45%;
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
  & > div {
    margin-top: 20px;
  }
  & > div > span {
    font-size: 12px;
    color: #40679e;
  }
`;

const LinkToLogin = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  font-weight: 900;
  font-size: 15px;
  color: #40679e;
`;
