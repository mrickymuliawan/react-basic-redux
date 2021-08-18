
import axios from 'axios';
import React from 'react';
class App extends React.Component {
  state = {
    quote: [],
    favorite: '',
    generatedQuote: ''
  }
  componentDidMount() {
    this.fetchquote()
  }

  fetchquote() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
      this.setState({
        quote: response.data
      })
    })
  }

  setFavorite(item) {
    this.setState({
      favorite: item.title
    })
  }

  generateQuote = () => {
    const id = Math.floor(Math.random() * 100) + 1
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(response => {
      this.setState({
        generatedQuote: response.data.title
      })
    })
  }

  renderQuote = () => {
    return this.state.quote.map(item => {
      return <div style={{ marginBottom: 20 }}>
        <span>{item.title} - {item.id}</span>
        <button onClick={() => this.setFavorite(item)}>set favorit</button>
      </div>
    })
  }

  render() {
    return <div>
      <h2>generate 1 random quotes</h2>
      <button onClick={this.generateQuote}>generate</button>
      <h2>generated 1 quotes: {this.state.generatedQuote}</h2>

      <h2>my favorite quotes is: {this.state.favorite}</h2>

      {this.renderQuote()}
    </div>
  }
}


export default App;
