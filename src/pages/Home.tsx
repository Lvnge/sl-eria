import NavBar from "../components/navBar/NavBar";
const Home = () => {
  return (
    <div className="parent-container ">
      <NavBar />

      <div className="flex flex-col items-center mt-12 w-full">
        <div className="home-section">
          <h1 className="text-center">
            Tu&nbsp;
            <span className="text-7xl bg-linear-120 from-(--primary) to-(--secondary) text-transparent bg-clip-text">
              arte
            </span>
            &nbsp; merece un espacio
          </h1>
          <h2 className="mt-8">
            Si quieres compartir tu trabajo en línea pero no sabes por dónde
            empezar, te ayudo a crear tu portafolio.
          </h2>
        </div>
        <div className="divider"></div>
        <div className="home-section">
          <div className=" ">
            <h3>Cómo funciona</h3>
            <ul className="mt-4  text-center  w-full space-y-2">
              <li>
                <h4>1. Te muestro algunas ideas</h4>
              </li>
              <li>
                <h4>2. Personalizamos juntos</h4>
              </li>
              <li>
                <h4>3. Tú envías tu contenido</h4>
              </li>
              <li>
                <h4>4. Yo desarrollo tu sitio</h4>
              </li>
              <li>
                <h4>5. Tu portafolio está en línea, listo para compartir</h4>
              </li>
            </ul>
          </div>
        </div>
        <div className="divider"></div>
        <div className="home-section">
          <div className="flex flex-col items-center">
            <h3>Para quién es esto</h3>

            <div className="mt-8 space-y-2">
              <h4>
                Para cualquier artista que quiera tener su propio rincón en
                internet sin preocuparse por la parte técnica.
              </h4>
              <h4>
                No es una plataforma automatizada ni un constructor de páginas.
              </h4>
              <h4>
                Es algo más personal: me gustaría ayudar a otros artistas a
                tener un espacio que realmente les represente.
              </h4>

              <h4>
                Si necesitas un portafolio, hablemos y vemos cómo hacerlo
                realidad.
              </h4>
              <h4>Si te interesa, dime qué tienes en mente.</h4>
            </div>
            <a
              href="https://www.instagram.com/rmg.wav/"
              target="_blank"
              className="font-Lato mt-8  bg-(--primary) rounded-full text-(--background) cursor-pointer
    hover:bg-(--primary)/80
    hover:text-(--background)/90 shadow-lg
  "
            >
              <div className="flex items-center justify-center h-full px-4 py-2">
                Contáctame
              </div>
            </a>
          </div>
        </div>
        <div className="divider"></div>
      </div>

      <div className="footer">
        <span className="font-Cormorant">&copy;silentlung, 2025</span>
      </div>
    </div>
  );
};

export default Home;
