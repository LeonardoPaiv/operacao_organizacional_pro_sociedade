import { useEffect, useState } from "react";
import { IOcorrencia } from "../../Models/IOcorrencia";
import HomeHeader from "../../components/HomeHeader";
import Logo from "../../components/Logo";
import NewOcorrencia from "../../components/NewOcorrencia";
import OcorrenciaFilter from "../../components/OcorrenciaFilter";
import OcorrenciasList from "../../components/OcorrenciasList";
import { constultarOcorrencia } from "../../service/ocorrencia";

const Home = () => {

  const [ocorrencias, setOcorrencias] = useState<IOcorrencia[]>([])

  useEffect(() => {
    const buscarOcorrencias = async () => {
      const data = await constultarOcorrencia()
      setOcorrencias(data)
    }
    buscarOcorrencias()
  }, [])
  
  return (
    <>
      <div className="col-span-3">
        <Logo />
        <NewOcorrencia />
        <OcorrenciaFilter setOcorrencias={setOcorrencias} />
      </div>
      <div className="col-span-7 px-4 h-full">
        <HomeHeader />
        <OcorrenciasList ocorrencias={ocorrencias} />
      </div>
    </>
  );
};

export default Home;
