import React from "react";
import './App.css';
import "semantic-ui-css/semantic.min.css";
import { useDispatch,useSelector } from "react-redux";
import {increment,decrement} from "./store/actions/counterActions"
import {Button} from "semantic-ui-react"

function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
 
  return (
    <div className="App">
      <h1  className="text">Counter: {counter}</h1>
      <Button.Group>
      <Button primary size="massive" onClick={() => (dispatch(increment(1)))}>+1 </Button>
      <Button.Or/>
      <Button secondary size="massive" onClick={() => (dispatch(decrement(1)))}>-1 </Button>
      <Button.Or/>
      <Button positive size="massive" onClick={() => (dispatch(increment(5)))}>+5 </Button>
      </Button.Group>
     
    </div>
  );
}

export default App;