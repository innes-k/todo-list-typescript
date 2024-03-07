import axios from "axios";

const userClient = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr",
  headers: {
    "Content-Type": "application/json",
  },
});

interface signUpProps {
  id: string;
  password: string;
  nickname: string;
}

export const signUp = async ({ id, password, nickname }: signUpProps) => {
  await userClient.post("/register", {
    id,
    password,
    nickname,
  });
};
