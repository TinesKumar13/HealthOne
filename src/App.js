
import './App.css';
import Final from './components/Final';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Primary from './components/Primary';
import Secondary from './components/Secondary';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Primary/>
    <Secondary/>
    <Final/>
    <Footer/>
    </div>
  );
}

export default App;
