
import Avatar from '../../assets/avatar.png'
import CV from '../../assets/_pdf-prueba.pdf'
import HS from '../../Css/Home.css'


function Home() {
    const scrollToSection = () => {
        const section = document.getElementById('seccionDestino');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };
  return (
    <div>
    
      <div>
      
        <div className='hero'>
          <div className='conten'>
            <div className='center-vertically'>
              <img src={Avatar} className='Avatar center-vertically' alt="Avatar" />
            </div>
            <h2 className='edinson-ramirez-a'>Edinson Ramirez A</h2>
            <div className='buttons'>
              <button className='button'>
                <a className='contacto' href= {CV} download>Descargar CV</a>
              </button>
              <button className='button1' onClick={scrollToSection} style={{ color: 'black', height: '50px', width: '150px' }}>
                Proyectos
              </button>
            </div>
          </div>
        </div>

        {/* Sección a la que te deseas desplazar */}
        <div id='seccionDestino' className='seccion'>
          {/* Contenido de la sección */}
        </div>
      </div>
    </div>
  );
}

export default Home;
