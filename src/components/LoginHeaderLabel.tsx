import { Link, useLocation } from "react-router-dom";
const LoginHeaderLabel = ({
  children,
  to,
}: {
  children: string;
  to: string;
}) => {
  const path = useLocation().pathname;

  return (
    <Link
      to={to}
      className={`w-full text-center py-4 cursor-pointer
      ${path == to ? "bg-orange-main text-white" : ""}`}
    >
      {children}
    </Link>
  );
};

export default LoginHeaderLabel;
