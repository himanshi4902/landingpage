import './App.css';
import NavBar from "./Components/NavBar";
import Content from "./Components/Content";
import Header from "./Components/Header";

function App(){
  return (
    <div className="landingPage">
      <Header/>
    <NavBar/>
    <Content/>
    </div>
  )
}

export default App;