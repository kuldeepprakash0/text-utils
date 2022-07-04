
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from './components/About';
import React,{ useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Footer from "./components/Footer";


function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enable or not
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#02022b";
      showAlert("dark mode has been enabled", "success");
      document.title = "TextUtils -Dark mode";
      // setInterval(() => {
      //   document.title = "TextUtils  is Amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
      document.title = "TextUtils -Light mode";
    }
  };

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  return (
    
    <>
      {/* <Navbar titleF="Text-" titleS="Utils" aboutText="About Us"/> */}
      {/* <Navbar/> */}

    <Router>
      <Navbar titleF="Text-" titleS="Utils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route path="/">
          <TextForm showAlert={showAlert} heading='"Enter your text to analyze"' mode={mode} />
          </Route>
        </Switch>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
