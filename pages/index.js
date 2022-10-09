import Head  from "next/head";
import homeAside from "../assets/image/home-aside.webp";
import logo from "../assets/image/logo.png";

function Home() {
  function navigator(page) {
    // window.location = ''
    
  }
    return (
        <div id="home">
        <aside>
          <img src={homeAside.src} alt="" />
          <div className="content">
          <strong>Formulário React com Next</strong>
          <p>O intuíto desse projeto apresentar um formulário basico com mascaras e validações.
          Sempre que tenho uma entrevista vejo que os teste principais para front-end é a criação
          de um formúlario, então resolvi criar um prejeto em React já aprensetando essa habilidade.
          </p>
          <p>Tel: 11 98158-9854</p>
          <p>Zap: 11 96526-5705</p>
          </div>
        </aside>
        <main>
          <div className='home-main'>
            <img src={logo.src} alt="" />
            <div className="cad">
              <a href="/formulario">
                <button  className='btn-form'>Formulário</button> 
              </a>
              <hr />
              <div className="outline"><p>ou veja o resultados gerados pelo formulário</p></div>
              <button  className='btn-result'>Resultados</button>
            </div>
          </div>
        </main>
      </div>
    )
}



export default Home


