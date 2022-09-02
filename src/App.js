import logo from './logo.svg';
import './App.css';
import productos from './data/productos'
import { Select } from './Select';

function App() {
  return (  
    <div className="container">          
      <div className='row mt-5 '> 
      <hr></hr>                              
          {<Select />}       
      </div>
    </div>
  );
}

export default App;
