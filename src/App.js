import logo from './logo.svg';
import './App.css';
import ActivityContainer from './containers/ActivityContainer';

function App() {

  return (
    <div className="App">
      <h1> What activity should you do today? </h1>
      <div className = "container">
      <ActivityContainer />
      <p></p>
    </div>
    </div>
  );
}

export default App;
