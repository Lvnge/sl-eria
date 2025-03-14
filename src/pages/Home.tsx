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
        <div className="home-section ">
          <div>
            <h3>Cómo funciona</h3>
            <ul className="mt-4 space-y-2 ">
              <li className="">
                <h4>Te muestro algunas ideas,</h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m12 1.148l6.16 9.602H5.84zm0 3.704L9.5 8.75h5zM2 13h9v9H2zm2 2v5h5v-5zm13.5 0a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M13 17.5a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0"
                  />
                </svg>
              </li>
              <li>
                <h4>personalizamos juntos,</h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M20 3a1 1 0 0 1 1 1v1.757l-2 2V5H5v8.1l4-4l4.328 4.329l-1.415 1.413L9 11.93l-4 3.999V19h10.533l.708.001l1.329-1.33L18.9 19h.1v-2.758l2-2V20a1 1 0 0 1-1 1H4c-.55 0-1-.45-1-1V4a1 1 0 0 1 1-1zm1.778 4.808l1.414 1.414L15.414 17l-1.416-.002l.002-1.412zM15.5 7a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3"
                  />
                </svg>
              </li>
              <li>
                <h4>tú envías tu contenido,</h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="1.5"
                  >
                    <path
                      stroke-linejoin="round"
                      d="M12 16v6m0-6l2 2m-2-2l-2 2"
                    />
                    <path d="M22 13.353c0 2.343-1.444 4.353-3.5 5.207M14.381 8.027a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a4.4 4.4 0 0 0-.83-.08C3.919 10.53 2 12.426 2 14.765c0 1.896 1.261 3.501 3 4.041m2.116-8.197a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.3 4.3 0 0 1 1.55.634m9.49-3.228A5.7 5.7 0 0 1 20.463 9.5" />
                  </g>
                </svg>
              </li>
              <li>
                <h4>yo desarrollo tu sitio,</h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6l6 6zm5.2 0l4.6-4.6l-4.6-4.6L16 6l6 6l-6 6z"
                  />
                </svg>
              </li>
              <li>
                <h4>tu portafolio está en línea,</h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="M128 24a104 104 0 1 0 104 104A104.12 104.12 0 0 0 128 24m88 104a87.6 87.6 0 0 1-3.33 24h-38.51a157.4 157.4 0 0 0 0-48h38.51a87.6 87.6 0 0 1 3.33 24m-114 40h52a115.1 115.1 0 0 1-26 45a115.3 115.3 0 0 1-26-45m-3.9-16a140.8 140.8 0 0 1 0-48h59.88a140.8 140.8 0 0 1 0 48ZM40 128a87.6 87.6 0 0 1 3.33-24h38.51a157.4 157.4 0 0 0 0 48H43.33A87.6 87.6 0 0 1 40 128m114-40h-52a115.1 115.1 0 0 1 26-45a115.3 115.3 0 0 1 26 45m52.33 0h-35.62a135.3 135.3 0 0 0-22.3-45.6A88.29 88.29 0 0 1 206.37 88Zm-98.74-45.6A135.3 135.3 0 0 0 85.29 88H49.63a88.29 88.29 0 0 1 57.96-45.6M49.63 168h35.66a135.3 135.3 0 0 0 22.3 45.6A88.29 88.29 0 0 1 49.63 168m98.78 45.6a135.3 135.3 0 0 0 22.3-45.6h35.66a88.29 88.29 0 0 1-57.96 45.6"
                  />
                </svg>
              </li>
              <li>
                <h4>listo para compartir.</h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M9 12a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z" />
                    <path stroke-linecap="round" d="M14 6.5L9 10m5 7.5L9 14" />
                    <path d="M19 18.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm0-13a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z" />
                  </g>
                </svg>
              </li>
            </ul>
          </div>
        </div>
        <div className="divider"></div>
        <div className="home-section select-none ">
          <div className="flex flex-col">
            <h3>Para quién es esto</h3>

            <div className="mt-4 space-y-8">
              <h4>
                Si quieres un espacio en internet que
                <strong> refleje tu esencia</strong>, puedo ayudarte a crearlo.
              </h4>
              <h4>
                No es solo un portafolio, sino
                <strong>
                  {" "}
                  un lugar donde tu arte tenga presencia y significado.
                </strong>
              </h4>
              <h4>
                Si buscas compartir tu trabajo
                <strong> de una manera auténtica y personal</strong>, hablemos.
              </h4>
              <h4>
                <strong>Cuéntame tu visión y hagámosla realidad.</strong>
              </h4>
            </div>
            <a
              href="https://www.instagram.com/rmg.wav/"
              target="_blank"
              className="font-Lato mt-8 m-auto w-fit bg-(--text) rounded-full text-(--background) cursor-pointer
              drop-shadow-lg"
            >
              <div className="flex items-center justify-center h-full px-4 py-2 ">
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
