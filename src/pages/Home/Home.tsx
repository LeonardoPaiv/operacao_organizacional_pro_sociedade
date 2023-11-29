import HomeHeader from "../../components/HomeHeader";
import Logo from "../../components/Logo";
import NewOcorrencia from "../../components/NewOcorrencia";
import OcorrenciaFilter from "../../components/OcorrenciaFilter";
import OcorrenciasList from "../../components/OcorrenciasList";

const Home = () => {
  return (
    <>
      <div className="col-span-3">
        <Logo />
        <NewOcorrencia />
        <OcorrenciaFilter />
      </div>
      <div className="col-span-7 px-4 h-full">
        <HomeHeader />
        <OcorrenciasList />
      </div>
    </>
  );
};

export default Home;
