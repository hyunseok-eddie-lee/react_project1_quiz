import React from "react";
import './App.css';

import {Route} from "react-router-dom";

import Start from "./Start";
import Quiz from "./Quiz";
import Ranking from "./Ranking";
import Message from "./Message";

import Score from "./Score";
import Spinner from "./Spinner";

import { useSelector } from "react-redux";


function App() {
  const [name, setName] = React.useState("La’eeb");
  const is_loaded = useSelector(state => state.ranking.is_loaded);

  return (
    <div className="App" style={{
      maxWidth: "350px",
      margin: "auto", 
    }}>
      {!is_loaded && <Spinner/>}

      {/* <Route path="/spinner" exact>
        <Spinner/>
      </Route> */}

      <Route path="/" exact>
        <Start name={name}/>
      </Route>

      <Route path="/quiz" exact>
        <Quiz/>
      </Route>

      <Route path="/score" exact>
        <Score name={name}/>
      </Route>

      <Route path="/message" exact>
        <Message/>
      </Route>

      <Route path="/ranking" exact>
        <Ranking/>
      </Route>
    </div>
  );
}

export default App;
