import './App.css';
import Contact from './Contact';
import Footer from './Footer';
import Menu from './Menu';
import Gallery from './Gallery';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Daisy Ma</h1>
        <p>Coming soon...</p>
        <audio autoPlay>
          <source src="http://streaming.tdiradio.com:8000/house.mp3" type="audio/mpeg" />
        </audio>
      </header>
      <Menu />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
