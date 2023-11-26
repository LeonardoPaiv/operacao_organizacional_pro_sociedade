import { ReactNode } from "react";
import LoginNav from "../../components/LoginNav";

const LoginTemplate = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="col-span-4 h-full bg-white">
        <LoginNav />
        <div className="flex items-center justify-center h-[96%] w-full">
          <div className="w-2/3">{children}</div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center col-span-6 bg-gray-300 h-full">
        <img src="src/assets/mascote.png" alt="Logo" />
        <img className="w-128" src="src/assets/oops.png" alt="Logo" />
      </div>
    </>
  );
};

export default LoginTemplate;
