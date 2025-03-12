import NavBar from "../components/navBar/NavBar";
const Home = () => {
  return (
    <div className="parent-container ">
      <NavBar />

      <div className="flex flex-col items-center mt-16">
        <div className="w-sm flex flex-col items-center mb-8">
          <div className="flex flex-col items-center ">
            <h1 className="flex text-wrap ">
              Tu&nbsp;
              <p className="sm:text-8xl text-6xl bg-linear-120 from-(--primary) to-(--secondary) text-transparent bg-clip-text">
                arte
              </p>
            </h1>
            <h1>merece un espacio</h1>
          </div>
          <div className=" md:w-6xl">
            <h2 className="text-center mt-6 text-xl ">
              Si quieres compartir tu trabajo en línea pero no sabes por dónde
              empezar, te ayudo a crear tu portafolio.
            </h2>
          </div>
        </div>
        <div className="divider"></div>
        <div className="p-8  ">
          <div className=" ">
            <h3>Cómo funciona</h3>
            <ul className="mt-4  text-center  w-full">
              <li>
                <h4>
                  🌿 Te muestro algunas ideas – Diseños base para inspirarte.
                </h4>
              </li>
              <li>
                🎨 Personalizamos juntos – Colores, tipografía, estructura… lo
                que mejor represente tu estilo.
              </li>
              <li> 📂 Tú envías tu contenido – Imágenes, textos, enlaces. </li>
              <li>
                💻 Yo desarrollo tu sitio – Para que luzca bien en cualquier
                pantalla.
              </li>
              <li>
                🚀 Tu portafolio está listo – Un espacio solo tuyo para
                compartir tu trabajo.
              </li>
            </ul>
          </div>
        </div>
        <div className="divider"></div>
        <div className="m-12">
          <div className="flex flex-col items-center text-xl">
            <h3>Para quién es esto</h3>

            <div className="mt-6 text-xl space-y-2 text-center">
              <p>
                Para cualquier artista que quiera tener su propio rincón en
                internet sin preocuparse por la parte técnica.
              </p>
              <p>
                No es una plataforma automatizada ni un constructor de páginas.
              </p>
              <p>
                Es algo más personal: me gustaría ayudar a otros artistas a
                tener un espacio que realmente les represente.
              </p>

              <p>
                Si necesitas un portafolio, hablemos y vemos cómo hacerlo
                realidad.
              </p>
              <p>📩 Si te interesa, dime qué tienes en mente.</p>
            </div>
            <a
              href="https://www.instagram.com/rmg.wav/"
              target="_blank"
              className="m-6 w-40 text-base h-12 bg-(--primary) rounded-full text-(--background) cursor-pointer
    hover:bg-(--primary)/80
    hover:text-(--background)/90
  "
            >
              <div className="flex items-center justify-center h-full">
                Contáctame
              </div>
            </a>
          </div>
        </div>
        <div className="divider"></div>
      </div>

      <div className="h-12 sm:h-56 w-full text-center flex flex-col justify-end items-center">
        <p className="">&copy;silentlung, 2025</p>
      </div>
    </div>
  );
};

export default Home;
