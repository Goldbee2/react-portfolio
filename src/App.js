import './App.css';
import Card from './Components/Card'
import StatBar from './Components/StatBar'
import Eli from './Eli-4-1.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Card
        width="400px"
        body={
          <>
            <img src={Eli} className="headshot" alt="Eli Goldberg Headshot"/>
            <h3>Eli Goldberg</h3>
            <p>Lorem ipsum dolor sit amet etc etc</p>
          </>
        }/>
      <Card
        title="Skills"
        width="400px"
        height="auto"
        body={
          <>
            <StatBar bar_width="50" color1="yellow" color2="orange" label="javascript" height="10px"/>
            <StatBar bar_width="90" color1="orange" color2="magenta" label="java" height="10px"/>
            <StatBar bar_width="30" color1="magenta" color2="blue" label="React" height="10px"/>
            <StatBar bar_width="20" color1="aquamarine" color2="blue" label="C" height="10px"/>
            <StatBar bar_width="100" color1="aquamarine" color2="yellow" label="Python" height="10px"/>
            <Card/>
          </>
          }/>
      <Card
        title="Education"
        width="400px"
        body={
          <>
          <div className="flex-horizontal"><h4>Western Washington University</h4>
          <p>Expected 2023</p></div>
          <div className="flex-horizontal"><h4>Major:</h4><p>Computer Science</p></div>
          <div ><h4>Courses:</h4>
            <ul>
              <li>Placeholder 101</li>
              <li>Lorem ipsum 235</li>
              <li>CSCI 123</li>
              <li>React 101</li>
            </ul>
          </div>
          
          </>
        }
      />
    </div>
  );
}

export default App;
