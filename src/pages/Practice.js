import React, { useReducer } from "react";
import { Button, Container, Stack } from "react-bootstrap";

export default function Practice() {
  const initialstate = { name: "", count: "" };
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {
          name: state.name,
          count: state.count + 1,
        };
      case "DECREMENT":
        return state - 1;
      case "CHANGE_TEXT":
        return state - 1;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialstate);

  return (
    <Container>
      <h1 className="text-center py-4 display-3 fw-bold">
        {state.name} age is{state.count}
      </h1>
      <Stack gap={3} className="col-md-2 mx-auto">
        <input type="text" onChange={() => dispatch({ type: "CHANGE_TEXT" })} />
        <Button
          variant="danger"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          Decrement -
        </Button>
        <Button
          variant="success"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          Increment +
        </Button>
      </Stack>
    </Container>
  );
}
