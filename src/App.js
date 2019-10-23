import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Formy from "./Formy";

function App() {
  return (
    <div className="App container">
      <header className="App-header">

        <h2 className="my-4">

          Letterman{" "}
          <span style={{ fontSize: "40%", opacity: 0.5 }}>
            <strike style={{ opacity: 0.5 }}>
              <a className="text-nowrap" href="https://www.youtube.com/watch?v=V-zXT5bIBM0">
                Do you want to build a snowman?
                    </a>
            </strike>{" "}
            <span className="text-nowrap" >Do you want to write a letter?</span>

          </span>
        </h2>
        <button className="btn btn-sm btn-light pull-right" style={{ border: "1px solid #eee" }} onClick={() => window.open("https://www.youtube.com/watch?v=A0p9qo4c0Zk&feature=youtu.be")}><span className="fa fa-film"></span> Help</button>

        <Formy />
      </header>
    </div >
  );
}

export default App;
