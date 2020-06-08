import React from 'react'

class App extends React.Component {
  componentDidMount() {
      fetch('the server URL', {
    method: "POST",
    headers: {
      'Content-Type: application/json'
    },
    body: JSON.stringify(this.state)
  })
  }
}

export default App