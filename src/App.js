// import logo from './logo.svg';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import TextBlock from './textBlock';
import './App.css';

function App() {
  return (
    <section id='App'>
      <Parallax pages={2} class="animation">

        <ParallaxLayer offset={0} speed={0.1}>
          <div class="animation_layer parallax" id="stars"></div>
        </ParallaxLayer>
        <section id='planets'>
        <ParallaxLayer offset={0} speed={-0.1}>
          <div class="animation_layer parallax" id="bulan"></div>
        </ParallaxLayer>
        </section>
        <ParallaxLayer offset={0} speed={0.25}>
          <div class="animation_layer parallax" id="artback"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div class="animation_layer parallax" id="earth"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.25}>
          <TextBlock />
        </ParallaxLayer>
      </Parallax>
    </section>
  );
}

export default App;
