import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UserLogin } from "../api/auth-api";

export const Login = () => {
  const navigate = useNavigate();
  const onLoginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const id = formData.get("id") as string;
    const password = formData.get("password") as string;

    try {
      const data = await UserLogin({ id, password });
      sessionStorage.setItem("token", data.accessToken);
      navigate("/");
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <Container>
      <Form onSubmit={onLoginHandler}>
        <p>☁️ 로그인 ⛅️</p>
        <input type="text" name="id" placeholder="email" />
        <input type="password" name="password" placeholder="비밀번호" />
        <input type="submit" value="로그인" />
        <div>
          <span>회원이 아니신가요? &rarr; </span>
          <LinkToSignUp style={{ cursor: "pointer" }} to="/signUp">
            회원가입하기
          </LinkToSignUp>
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
  height: 37%;
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
    margin-top: 15px;
  }
  & > div > span {
    font-size: 12px;
    color: #40679e;
  }
`;

const LinkToSignUp = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  font-weight: 900;
  font-size: 15px;
  color: #40679e;
`;
