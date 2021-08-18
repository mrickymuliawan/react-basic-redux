import { actionType } from "../actions/quoteAction"

const INIT_STATE = {
  quote: [],
  favorite: '',
  generatedQuote: ''
}

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionType.UPDATE_QUOTE:
      return {
        ...state,
        quote: action.quote,
      }

    default:
      return state
  }
}

export default reducer
