import React, { Component } from 'react'

export class Index extends Component {
constructor() {
    super();
    this.state = {
        items: 0,
    }
    console.log("Constructor called!!");
}

componentDidMount() {
    console.log("Component did mount called!!")
}

componentDidUpdate() {
    console.log("Component did Update called!!")
}

componentWillUnmount() {
    alert("The component is going to be unmounted");
}

handleButtonClick = () => {
    this.setState({items: this.state.items + 1});
}
  render() {
    console.log("Render called!!!")
    return (
        <>
      <div>Index</div>
      <p>Items: {this.state.items}</p>
      <button onClick={this.handleButtonClick}>Click Me</button>
      </>
    )
  }
}

export default Index