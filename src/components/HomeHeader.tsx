import Person from "@mui/icons-material/Person";
import { Avatar, Button } from "@mui/material";

const HomeHeader = () => {
  return (
    <div className="flex justify-between items-end h-[13vh]">
      <h1 className="text-6xl font-bold text-gray-600/50">Ocorrências</h1>
      <span className="flex  h-full">
        <Button variant="text">
          <Avatar>
            <Person />
          </Avatar>
        </Button>
      </span>
    </div>
  );
};

export default HomeHeader;
