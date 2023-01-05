import "./styles.css";
import { ReactComponent as ImageCar } from "../../assets/images/car.svg";
import ButtonIcon from "components/ButtonIcon";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-card">
          <div className="home-container-superior">
            <div className="home-content-imagem">
              <ImageCar />
            </div>
            <div className="home-content-text">
              <h1 className="home-text-titulo">O carro perfeito para você</h1>
              <h1 className="home-text-subTitulo">
                Conheça nossos carros e dê mais um passo na realização do seu
                sonho
              </h1>
            </div>
          </div>
          <div className="home-container-inferior">
            <ButtonIcon />
            <div className="home-text-final">
              <h1>Comece agora a navegar</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
