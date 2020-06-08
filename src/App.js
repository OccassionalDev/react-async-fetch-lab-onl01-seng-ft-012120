import React from 'react'

class App extends React.Component {
  componentDidMount() {
      fetch('http://api.open-notify.org/astros.json', {
        method: "POST",
        headers: {
          'Content-Type: application/json'
        },
        body: JSON.stringify(this.state)
      })
  }
}

export default App