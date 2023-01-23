import './App.css';
import FormTaskContext from './Components/FormTaskContext';
import Context from './Components/Context';


function App() {
  return (
    <div className="App">
         {/* <Formtasks/> */}
        <FormTaskContext>
          <Context/>
        </FormTaskContext>


         
    </div>
  )
}

export default App;
