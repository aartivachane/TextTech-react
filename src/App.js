import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //Whether dark mode is enable or not
  const [alert, setAlert] = useState(null); //for alert

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      //document.title = "TextUtils - Dark Mode"; //Top pr likha hua aayega (jha web pages show hote hue dikhte hai)

      //Title blink hoga
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing Mode";
      // }, 2000);

      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      //document.title = "TextUtils - Light Mode"; //Top pr likha hua aayega (jha web pages show hote hue dikhte hai)
    }
  };
  return (
    <>
      {/* <Router> */}
      <Navbar
        title="TextTech"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      {/*<Navbar title="TextUtils" />*/}

      <Alert alert={alert} />

      {/*container = it is a bootstrap class , jp box ko bich m le aayegi */}
      {/*my-3 = it is bootstrap class , jo margin deti hai y-axis m 3 ki */}
      <div className="container my-3">
        {/* <Switch> */}
        {/* for exact = users --> component 1
          users/home --> component 2 */}
        {/* <Route exact path="/about">
              <About />
            </Route> */}
        {/* <Route exact path="/"> */}
        <TextForm
          showAlert={showAlert}
          heading="Enter the Text to analyze below"
          mode={mode}
        />
        {/* </Route> */}
        {/* </Switch> */}
        {/*Here, we pass heading as a prop*/}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
