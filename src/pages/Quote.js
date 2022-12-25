import React from "react";
import { Container, Spinner } from "react-bootstrap";
import { useQuery } from "react-query";
import { getQuoteApi } from '../componets/api/axios'

function Quote() {
  const { data, isLoading, isError, error } = useQuery("quote", getQuoteApi);
  const quote = data?.data;
  
  if (isLoading) {
    return (
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <Spinner animation="grow" variant="success" />
      </div>
    );
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <Container>
      <h1>Quotable Api</h1>
      <p>{quote?.content}</p>
    </Container>
  );
}

export default Quote;
