import { ReactNode } from "react";

const FormCard = ({children, label}: {children: ReactNode, label: string}) => {
  return (
    <>
      <h2 className=" bg-orange-main text-white p-2 rounded-t mt-3 w-full">
        {label}
      </h2>
      <div className="w-full bg-gray-400 rounded-b p-4">
        {children}
      </div>
    </>
  );
};

export default FormCard;
