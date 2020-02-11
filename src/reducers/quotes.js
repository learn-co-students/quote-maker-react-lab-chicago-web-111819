
const quotesReducer = (state = [], action) => {
  let i, quotes = state;

  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];
    case "REMOVE_QUOTE":
      i = quotes.findIndex(quote => quote.id === action.quoteId);
      return [...quotes.slice(0, i), ...quotes.slice(i + 1)];
    case "UPVOTE_QUOTE":
      i = quotes.findIndex(quote => quote.id === action.quoteId);
      let modifiedQuotes = quotes.map(q => {
        if (q === quotes[i]) {
          return { ...q, votes: q.votes + 1
          }
        } else {
          return q;
        }
      });
      return modifiedQuotes;
    case "DOWNVOTE_QUOTE":
      i = quotes.findIndex(quote => quote.id === action.quoteId);
      return quotes.map(q => {
        if (q === quotes[i]) {
          return {
            ...q,
            votes: (q.votes > 0 ? q.votes - 1 : q.votes)
          }
        } else {
          return q;
        }
      });
    default:
      return quotes;
  }
}

export default quotesReducer;

