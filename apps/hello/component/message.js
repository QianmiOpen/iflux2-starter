import React, {Component} from 'react'

export default class Message extends Component {
  static defaultProps = {
    text: ''
  };

  render() {
    return (
      <div>{this.props.text}</div>
    )
  }
}