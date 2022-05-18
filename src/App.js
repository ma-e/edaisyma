import './App.css';
import Menu from './Menu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Daisy Ma</h1>
        <audio controls autoPlay>
          <source src="http://streaming.tdiradio.com:8000/house.mp3" type="audio/mpeg" />
        </audio>
        <p>Coming soon...</p>
        {/* <Menu /> */}
      </header>
    </div>
  );
}

export default App;
