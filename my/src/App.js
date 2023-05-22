//import logo from './logo.svg';
import './App.css';
import Display from "./components/display"
import {BrowserRouter, Routes, Route} from "react-router-dom" 
import Resource from './components/Resource';
// import {Switch} from "react-dom"
import Application from './components/Application';
import ResourceDetails from './components/ResourceDetails';


function App() {
  return (
    <BrowserRouter>
    <Routes> 
    <Route exact path="/" element={<Display/>} />
    <Route path="/applicationDetails" element = {<Application/>} />
    <Route path="/resouces" element = {<Resource/>} />
    <Route path="/resouceDetails" element = {<ResourceDetails/>} />
    </Routes>
   
    </BrowserRouter>

    
  );
}

export default App;
