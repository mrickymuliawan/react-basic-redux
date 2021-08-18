export const actionType = {
  UPDATE_QUOTE: 'UPDATE_QUOTE'
}

const updateQuote = (payload) => {
  return {
    type: actionType.UPDATE_QUOTE,
    quote: payload.quote,
  }
}

export { updateQuote }