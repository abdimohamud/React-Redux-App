import React,  {useEffect} from 'react';
import ProgrammerQuotes from './components/ProgrammerQuotes'
import './App.css';
import { connect } from "react-redux";
import { fetchData } from "./actions";

function App({fetchData, loadingFacts, errorMessage}) {
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <div className="App">
      <h1> Welcome to Programmers Quotes</h1>
      <h2>Here's an relatable quotes!</h2>
      {!loadingFacts ? <ProgrammerQuotes /> : <div>... Fetching Programming Quotes for you...</div>}
      {errorMessage !== "" ? <div>{errorMessage}</div> : null}
    </div>
  );
}
function mapStateToProps(state) {
  return {
    loadingFacts: state.loadingFacts,
    errorMessage: state.errorMessage
  };
}
export default connect(mapStateToProps, { fetchData })(App);
