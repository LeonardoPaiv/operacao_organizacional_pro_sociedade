import { ReactNode } from "react";

const Main = ({ children }: { children: ReactNode }) => {
  return <div className="container h-full grid grid-cols-10 bg-gray-300">
    {children}
    </div>;
};

export default Main;
