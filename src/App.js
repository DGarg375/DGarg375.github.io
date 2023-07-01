import './App.css';
import BackgroundAnimation from './components/backgroundanimation/BackgroundAnimation';

function App() {
  return (
    <div className="App">
      <div class="background-animation">
        <BackgroundAnimation width={window.innerWidth} height={window.innerHeight} startframe="0" endframe="212"></BackgroundAnimation>
      </div>
    </div>
  );
}

export default App;
