import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "./counterSlice";
const Counter = () => {
  const { increment, decrement, incrementByPayload, togglecounter } =
    counterActions;

  const counter = useSelector((state) => {
    return {
      count: state.counter.count,
    };
  });

  const show = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  return (
    <section className="counterApp">
      <h1>
        Counter value:{" "}
        <span style={{ marginLeft: "20px" }}>{counter.count}</span>
      </h1>
      {show && (
        <div className="btn-actions">
          <button
            onClick={() => {
              dispatch(increment());
            }}
            className="btn increment"
          >
            +
          </button>
          <button
            onClick={() => {
              dispatch(decrement());
            }}
            className="btn decrement"
          >
            -
          </button>
          <button
            onClick={() => {
              dispatch(incrementByPayload(5));
            }}
            className="btn incrementBy5"
          >
            +5
          </button>
        </div>
      )}
      <button
        onClick={() => {
          dispatch(togglecounter());  
        }}
        className="btn btn-primary"
      >
        Toggle
      </button>
    </section>
  );
};

export default Counter;
