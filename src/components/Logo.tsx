import { useNavigate } from "react-router-dom";

const Logo = () => {

  const navigate = useNavigate();

  return (
    <div onClick={() => navigate('/')} className='flex justify-center bg-gray-500/50 hover:bg-gray-500 py-3 ease-in-out duration-300 rounded my-4 cursor-pointer overflow-hidden'>
        <img className="w-auto h-32" src="https://raw.githubusercontent.com/LeonardoPaiv/operacao_organizacional_pro_sociedade/main/src/assets/Mascote.png?raw=true" alt="" />
        <img className="w-52" src="https://raw.githubusercontent.com/LeonardoPaiv/operacao_organizacional_pro_sociedade/main/src/assets/oops.png?raw=true" alt="" />
    </div>
  )
}

export default Logo