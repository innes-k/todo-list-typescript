import axios from "axios";
import { User } from "../types/Auth";

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

export const signUp = async ({
  id,
  password,
  nickname,
}: signUpProps): Promise<void> => {
  await userClient.post("/register", {
    id,
    password,
    nickname,
  });
};

type LoginProps = Omit<signUpProps, "nickname">;
export const UserLogin = async ({
  id,
  password,
}: LoginProps): Promise<User> => {
  const response = await userClient.post("/login", {
    id,
    password,
  });
  return response.data;
};
