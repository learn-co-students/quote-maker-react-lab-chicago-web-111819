export default (state = [], action) => {
  let quote
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      const newState = state.map(quote => {
        if (quote.id === action.quoteId) {
          return {
            ...quote,
            votes: quote.votes + 1
          }
        } else {
          return quote
        }
      })

      return newState
      
    case 'DOWNVOTE_QUOTE':
      quote = state.filter(quote => quote.id === action.quoteId)
      if (quote[0].votes - 1 <= -1) {
        return state
      }
      return state.map(quote => {
        if (quote.id === action.quoteId) {
          return {
            ...quote,
            votes: quote.votes - 1
          }
        } else {
          return quote
        }
      })
    default:
      return state
  }
}