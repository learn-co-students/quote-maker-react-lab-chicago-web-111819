import React, { Component } from 'react';
import QuoteForm from './components/QuoteForm';
import Quotes from './containers/Quotes';

class App extends Component {
  render() {
    // const { quotes, removeQuote, upvoteQuote, downvoteQuote } = this.state;
    return (
      <div className="container-fluid">
        <div className="row title justify-content-center" style={{ paddingTop: '12px' }}>
          <h1>Quote Maker</h1>
        </div>
        <hr />
        <QuoteForm />
        <hr />
        <Quotes />
      </div>
    );
  }
}

export default App;
