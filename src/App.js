import './App.css';
import Navbar from './components/Navbar/Navbar'
import Bg from './components/Bg/bg'
import Project  from './components/Project/Project';
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import Skills from './components/Skills/Skills'

function App() {
  return (
    <div className="App">
      <Bg/>
      <Navbar/>
      <Project/>
      <About/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
