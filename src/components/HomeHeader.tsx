import Logout from "@mui/icons-material/Logout";
import { Avatar, Button, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { logout } from "../service/user";

const HomeHeader = () => {

  const nav = useNavigate()

  const sair = async () => {
    const resp = await logout();
    if (resp) {
      nav('/login')
    } else {
      window.alert('Erro ao sair')
    }
  }

  return (
    <div className="flex justify-between items-end h-[13vh]">
      <h1 className="text-6xl font-bold text-gray-600/50">Ocorrências</h1>
      <span className="flex  h-full">
        <Tooltip title='Logout'>
          <Button variant="text" onClick={sair}>
            <Avatar>
              <Logout />
            </Avatar>
          </Button>
        </Tooltip>
      </span>
    </div>
  );
};

export default HomeHeader;
