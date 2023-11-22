import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useQuery } from "react-query";
import { getQuoteApi } from "../componets/api/axios";

function Quote() {
  const { data, isLoading, isError, error, refetch } = useQuery("quote", getQuoteApi, {
    refetchOnWindowFocus:false
  });
  const quote = data?.data;

  const [count, setCount] = useState(10);

  useEffect(() => {
     setTimeout(() => {
      if (count > 0) {
        setCount(count - 1);
      }
    }, 1000);

    if (count === 0) {
      refetch()
      setCount(10);
    }
  }, [count]);

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <Container>
   
      <h1>Quotable Api</h1>
      <p>get new data after {count}s</p>
      {isLoading ? (
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <Spinner animation="grow" variant="success" />
        </div>
      ) : (
        <p>{quote?.content}</p>
      )}
    </Container>
  );
}

export default Quote;
