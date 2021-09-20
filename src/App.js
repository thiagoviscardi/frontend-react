import './App.css';
import Posts from './components/Posts/index.js';
import moovingicone from './imgs/moovingicone.png';

function App() {
  return (
    <div className="App" style={{backgroundColor:'#CCC'}}>
       <div style={{backgroundColor:'#000'}}>
        <img alt="mooving" src={moovingicone} style={{width:'8%'}} />
        </div>
      <header className="App-header">
       
        <Posts/> 
      </header>
    </div>
  );
}

export default App;
