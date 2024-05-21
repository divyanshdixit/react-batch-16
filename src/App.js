import logo from './logo.svg';
import './App.css';
// import {About} from './About';
import About from './About';
import Header from './Header';
import Parent from './Parent';


/*

      App => name, age 
  About     header    parent
contact               child1
vision                child2
                      child3
                      child4


*/

function App() {
  var fname = "divyansh";

  return (
    <div>
      <About />
      <Header/>
      <Parent name={fname} age={28} />
    </div>
  );
}

export default App;
