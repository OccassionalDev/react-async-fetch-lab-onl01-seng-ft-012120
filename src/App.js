import React from 'react'

class App extends React.Component {
  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then(res => res.json())
      .then(data => {
        this.setState({
          people: data.people
        })
      })
  }
  
  render() {}
  
}

export default App