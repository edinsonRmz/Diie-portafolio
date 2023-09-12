import Img1 from '../../assets/Html.png'
import Img2 from '../../assets/css.png'
import Img3 from '../../assets/JS.png'
import Img4 from '../../assets/react.png'
import Img5 from '../../assets/figma.png'
import Img6 from '../../assets/photoshop.png'
import Tecg from '../../Css/Tecg.css';

function Tecnologias() {
  return (
    <div className='tecnoligias'>
    <div>
      <hr />
        <h2 className='tecnologias'>Tecnologias</h2>
        <div>
            <img className='img' src={Img1} alt="html" />
            <img className='img' src={Img2} alt="css" />
            <img className='img' src={Img3} alt="Js" />
            <img className='img' src={Img4} alt="react" />
            <img className='img' src={Img5} alt="photoshop" />
            <img className='img' src={Img6} alt="figma" />

        </div>
    </div>
</div>
  )
}

export default Tecnologias