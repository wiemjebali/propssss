import logo from './logo.svg';
import './App.css';
import Section1 from './composant/Section1';
import Navbar from './composant/Navbar';
import Section2 from './composant/Section2';
import Footer from './composant/Footer';

function App() {
  let auteur = "wiem jbeli"
  return (
<>
<Navbar test ={auteur}  ></Navbar>
<Section1 test2 ={auteur} ></Section1>  
<Section2></Section2>
<Footer testt ={auteur} ></Footer>
</>
      

  );
}

export default App;
