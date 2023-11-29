import { ReactNode } from "react";

export const Ocorrencia = ({ children }: { children: ReactNode; }) => {
    return <div className="flex flex-col items-center justify-center h-full">
        <img className="h-128 w-128" src="../../assets/Mascote.png" alt="" />
        {children}
    </div>;
};
