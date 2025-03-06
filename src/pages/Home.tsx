const Home = () => {
  return (
    <div className="flex flex-col items-center  text-(--text) ">
      <div className="w-full border-b-1 border-(--text)/10 h-14 flex items-center">
        <div className="flex items-center space-x-1">
          <img src="/sl-playground-logo.svg" alt="logo" className="w-15 h-15" />
          <label className="text-xl">sl-eria</label>
        </div>
        <div className=" ml-auto mr-6">
          <ul className="flex justify-between space-x-4">
            <li>Componentes</li>
            <li>Secciones</li>
            <li>Acerca de</li>
            <li>Contacto</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="h-72 m-16 w-full flex flex-col items-center ">
          <div className=" flex flex-col items-center">
            <h1 className="flex">
              Tu&nbsp;
              <p className="text-8xl bg-linear-120 from-(--primary) to-(--secondary) text-transparent bg-clip-text">
                arte
              </p>
            </h1>
            <h1>merece un espacio</h1>
          </div>
          <div className="w-6xl">
            <h2 className="text-center mt-6 text-2xl">
              Si quieres compartir tu trabajo en línea pero no sabes por dónde
              empezar, te ayudo a crear tu portafolio. <br /> Tú solo traes el
              contenido—imágenes, textos, lo que quieras mostrar—y yo me encargo
              de darle forma.
            </h2>
          </div>
        </div>
        <div className="flex border-1 border-(--text)/10 w-3/4"></div>
        <div className="m-12 ">
          <div className="flex flex-col items-center">
            <h3>Cómo funciona</h3>
            <ul className="mt-6 text-xl space-y-2 ">
              <li>
                🌿 Te muestro algunas ideas – Diseños base para inspirarte.
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
        <div className="flex border-1 border-(--text)/10 w-3/4"></div>
        <div className="m-12">
          <div className="flex flex-col items-center text-xl">
            <h3>Para quién es esto</h3>

            <div className="mt-6 text-xl space-y-2 w-6xl text-center">
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
            <button
              className="m-6 w-40 text-base h-12 bg-(--primary) rounded-full text-(--background) cursor-pointer
          hover:bg-(--primary)/80
          hover:text-(--background)/90
          "
            >
              Contáctame
            </button>
          </div>
        </div>
        <div className="flex border-1 border-(--text)/10 w-3/4"></div>
      </div>

      <div className="h-56 w-full text-center">
        <p className="">&copy;silentlung, 2025</p>
      </div>
    </div>
  );
};

export default Home;
