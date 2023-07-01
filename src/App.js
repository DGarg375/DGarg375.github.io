import './App.css';
import { useEffect, useState } from 'react';
import Preloader from './components/loader/Preloader';
import BackgroundAnimation from './components/backgroundanimation/BackgroundAnimation';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 10000);
  }, []);
  if(isLoading) {
    return <Preloader />
  }
  return (
    <div className="App">
      <div class="background-animation">
        <BackgroundAnimation width={window.innerWidth} height={window.innerHeight} startframe="0" endframe="212"></BackgroundAnimation>
      </div>
    </div>
  );
}

export default App;
