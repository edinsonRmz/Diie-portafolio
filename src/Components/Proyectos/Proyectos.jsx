import Img1 from '../../assets/img1.png'
import Proyec from '../../Css/Proyec.css';

function Proyectos() {
  return (
    <div className="gallery">
    <h1>proyectos</h1>
    <div className="row">
      <div className="top-image">
        <img src={Img1} alt="Imagen 3" />
      </div>
    </div>
    <div className="row">
      <div className="item">
        <img src={Img1} alt="Imagen 1" />
      </div>
      <div className="item">
        <img src={Img1} alt="Imagen 2" />
      </div>
    </div>
  </div>
  )
}

export default Proyectos