import React, { Component } from "react";
import logo from "./logo.svg";
import { ApolloProvider, Query } from "react-apollo";
import gql from "graphql-tag";

import "./App.css";

import ApolloClient from "apollo-boost";
const client = new ApolloClient({
  uri: "/.netlify/functions/graphql"
});

const LambdaDemo = () => (
  <ApolloProvider client={client}>
    <Query
      query={gql`
        {
          hello
        }
      `}
    >
      {({ data }) => <div>A greeting from the server: {data.hello}</div>}
    </Query>
  </ApolloProvider>
);
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <LambdaDemo />
        </header>
      </div>
    );
  }
}

export default App;
