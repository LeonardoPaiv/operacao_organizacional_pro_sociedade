import { ILogin } from "../Models/ILogin";
import { IUser } from "../Models/IUser";
import { instance } from "./axios";

const login = async (login: ILogin) => {
  const {data} = await instance.post("/login", login);
  return data
};

const cadastro = async (user: IUser) => {
  const {data} = await instance.post('cadastro', user);
    return data
};

const logout = async () => {
  const {data} = await instance('/logout');
  return data.data.message === 'logout success'
}

const admin = async () => {
  const {data} = await instance.get('user-admin');
  return data
}

export { admin, cadastro, login, logout };

