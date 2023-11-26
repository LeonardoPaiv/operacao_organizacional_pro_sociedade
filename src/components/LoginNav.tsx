import LoginHeaderLabel from "./LoginHeaderLabel";

const LoginNav = () => {

  return (
      <div className="flex text-gray-600 bg-gray-400 h-[4%]">
        <LoginHeaderLabel to='/login' >
          Login
        </LoginHeaderLabel>
        <LoginHeaderLabel to='/cadastrar' >
          Cadastrar-se
        </LoginHeaderLabel>
      </div>
  );
};

export default LoginNav;
