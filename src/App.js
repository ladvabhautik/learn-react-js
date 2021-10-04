import './App.css';
import Greet from './components/Greet';
import Hello from './components/Hello';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet name="Bruce" heroName="Batman" >
        <p>This is Paragraph</p>
      </Greet>
      <Greet name="Clark" heroName="Superman" >
        <button>button</button>
      </Greet>
      <Greet name="Diana" heroName="Wonder Woman" ></Greet>
      <Welcome name="Bruce" heroName="Batman">
        <p>This is Paragraph</p>
      </Welcome>
      <Welcome name="Clark" heroName="Superman"></Welcome>
      <Welcome name="Diana" heroName="Wonder Woman" ></Welcome>
      <Hello />
    </div >
  );
}

export default App;
