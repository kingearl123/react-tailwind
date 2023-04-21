// import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Service from './components/service';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <NavBar/>
      <Home />
      <About />
      <Service />
      <Contact />
      <Footer />
    </div>
    
    
  );
}

export default App;
