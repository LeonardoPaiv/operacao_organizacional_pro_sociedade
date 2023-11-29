import { ReactNode } from "react";
import Logo from "../Logo";
const Ocorrencia = ({ children }: { children: ReactNode }) => {
  return <div className="container flex flex-col items-center justify-center h-full">
    <Logo />
    {children}
    </div>;
};

export default Ocorrencia;
