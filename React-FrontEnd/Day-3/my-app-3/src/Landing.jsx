import React, { Component } from 'react'

export class Landing extends Component {
  render() {
    return React.createElement('div', {id:"main", className:"module"},
    React.createElement('p', null,"ReactJS",React.createElement('span',null,"Test")), React.createElement('p', null,"NodeJS"))
  }
}

export default Landing