
import Home from './Components/Home/Home';
import Text from './Components/Text/text';
import Proyectos from './Components/Proyectos/Proyectos';
import Tecno from './Components/Tecnologias/Tecnologias';
import Wrapper from './Components/Wrapper/Wrapper'
import Copy from './Components/copyright/copyright'
import Styls from './App.css'

function diie() {
  return (
    <div className="App">
      <Home/>
      <Text/>
      <Proyectos/>
      <Tecno/>
      <Wrapper/>
      <Copy/>

  </div>
  )
}

export default diie 