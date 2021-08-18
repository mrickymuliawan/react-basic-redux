import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateQuote } from './redux/actions/quoteAction'

function App2() {
  const quote = useSelector(state => state.quote.quote)

  const dispatch = useDispatch()
  const fetchAllQuote = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
      dispatch(updateQuote({
        quote: response.data
      }))
    })
  }

  const renderQuote = () => {
    return quote.map(item => {
      return <div style={{ marginBottom: 20 }}>
        <span>{item.title} - {item.id}</span>
      </div>
    })
  }
  return (
    <div>
      <button onClick={fetchAllQuote}>fetch all quote</button>
      {renderQuote()}
    </div>
  )
}

export default App2