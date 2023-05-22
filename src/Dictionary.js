import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
import OhNo from "./oh-no-jim-carrey.gif";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(false);
  let [submitted, setSubmitted] = useState(false);

  // we set to null or empty
  // so that if it has something it will return something

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    if (response.data.length > 0) {
      setResults(response.data[0]);
      setError(false);
    } else {
      setResults(null);
      setError(true);
    }
    setLoading(false);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError(false);
    setSubmitted(true); // Set submitted to true when the form is submitted
    // documentation for dictionary api https://api.dictionaryapi.dev
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    console.log(apiUrl);
    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }

  // I added the error handling to the API request using the `.catch` method in the axios request.
  // This allows me to handle any errors that occur during the request, such as mispelled words or words that are not found in the dictionary
  // we are handling the error directly in the catch block of the API request.

  // By implementing this error handling mechanism, we ensure that when a user enters a misspelled word
  // and presses enter, the "not found" message is displayed instead of the default error message.

  return (
    <div className="Dictionary">
      <section>
        <label>What word do you want to look up?</label>
        <form onSubmit={handleFormSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a word"
                className="form-control"
                onChange={handleKeywordChange}
              />
            </div>
            <div className="col-3">
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </div>
          </div>
          <div className="hints">
            Suggestions: <em>bystander, headdesk, meaty, conking, maid,...</em>
          </div>
        </form>
      </section>
      {loading && <div className="loading">Loading...</div>}
      {!loading && error && submitted && (
        <div className="not-found">
          <img src={OhNo} className="gif img-fluid" alt="oh-no" title="oh-no" />
          <p>
            Sorry pal, we couldn't find definitions for the word you were
            looking for.
          </p>
          <p>
            You can try the search again at a later time or head to the web
            instead.
          </p>
        </div>
      )}
      {!loading && !error && results && <Results results={results} />}
    </div>
  );
}

// {loading && <p>Loading...</p>}
// {!loading && results !== null ? <Results results={results} /> : null}
// this part checks 2 conditions: !loading checks if loading state is false. if loading is true
// it means the API request is in progress so we do not want to show any results yet.
// once the loading is complete, and loading is false, we move onto the next condition.
// results !== null checks if the results state is not null. if it is not null, it means
// the API request was successful, and we have something valid to show. in this case,
// the <Results /> component is rendered with the results passed as a prop.
// if either of these conditions is not met (loading is true or results is null) the null
// value is returned. this prevents rendering any content during the loading phase or when no results are available

//{!loading && results === null && submitted &&
// this part is instead used for displaying the error message when the API request fails or returns no results.
// it checks the following conditions:
// {!loading} checks if the loading state is false. we do not want to display the error message when the API request is
// in progress.
// `results === null` checks if the results state is null. if it is null, it means the API request did not return any valid
// results.
// submitted checks if the submitted state is true. it ensures the error message is only displayed if the user
// submits the form.

//if these conditions are met, the error message is rendered inside the <div></div> with the not-found className.
// by using these conditional rendering statements, we can control the results and the error message based on the loading
// state, the presence of results, and the submission status.

// "!" symbol => is the logical NOT operator in Javascript. it negates the boolean value that follows it.

// && symbol => is the logical AND operator in Javascript. it evaluates 2 expressions and returns true if both expressions are true.
// It is used to conditionally render components or execute code.

// the === symbol => is the strict equality operator in JS. it checks if the values on both sides are equal and of the same type.
// if the values are not equal, it returns false.
// if the values are equal, it returns true.

// results === null, checks if the results variable is exactly null. if it is the condition evaluates to true.
// "!==" symbol => is the strict inequality operator in JS.
// it checks if the values on both sides are not equal and of the same type.
// if the values are equal, it returns false.
// if the values are not equal, it returns true.
// In the code results !== null, it checks if the results variable is not exactly equal to null.
// If the value of results is anything other than null, the condition evaluates to true.If results is null,
// the condition evaluates to false.
