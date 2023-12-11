import { ILogin } from "../Models/ILogin";
import { IUser } from "../Models/IUser";
import { instance } from "./axios";

const login = async (login: ILogin) => {
  const data = await instance.get("/login", { params: { ...login } });
  console.log(data);
};

const cadastro = async (user: IUser) => {
    const data = await instance.post('cadastro', {...user});
    console.log(data)
};

export default {login, cadastro}