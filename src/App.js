import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Daisy Ma</h1>
        <audio controls autoPlay>
          <source src="http://streaming.tdiradio.com:8000/house.mp3" type="audio/mpeg" />
        </audio>
      </header>
    </div>
  );
}

export default App;
