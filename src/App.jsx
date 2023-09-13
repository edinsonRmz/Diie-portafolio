
import Home from './Components/Home/Home';
import Text from './Components/Text/Text';
import Proyectos from './Components/Proyectos/Proyectos';
import Tecno from './Components/Tecnologias/Tecnologias';
import Wrapper from './Components/Wrapper/Wrapper';
import Copyright from './Components/copyright/copyright';

function diie() {
  return (
    <div className="App">
      <Home />
      <Text />
      <Proyectos />
      <Tecno />
      <Wrapper />
      <Copyright />
    </div>
  );
}

export default diie;
