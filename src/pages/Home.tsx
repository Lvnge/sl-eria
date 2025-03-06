const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <div
        className="w-full  text-zinc-200 h-16 flex items-center
      bg-gradient-to-b from-zinc-800 to-zinc-800 p-4"
      >
        <label className="ml-6">sl-playground</label>
        <div className=" ml-auto mr-6">
          <ul className="flex justify-between space-x-4">
            <li>Servicios</li>
            <li>Componentes</li>
            <li>Secciones</li>
            <li>Contacto</li>
          </ul>
        </div>
      </div>
      <div className="h-72 flex flex-col items-center justify-center text-zinc-900">
        <h1 className="mt-4">Diseñemos tu portafolio de arte</h1>
      </div>
      <div>
        <h2 className="mt-4">Content</h2>
        <div className="">
          <div>
            <h3>Galeria de Imágenes</h3>
          </div>
          <div>
            <h3>Reproductor de Video</h3>
          </div>
          <div>
            <h3>Texto / Descripción de tu trabajo</h3>
          </div>
          <div>
            <h3>Formulario de Contacto</h3>
          </div>
        </div>
      </div>
      <div>
        <h2 className="">Footer</h2>
      </div>
    </div>
  );
};

export default Home;
