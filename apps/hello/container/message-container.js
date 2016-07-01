import React, {Component} from 'react'
import {Relax} from 'iflux2'
import Message from '../component/message'
import {helloQL} from '../ql'


@Relax
export default class MessageContainer extends Component {
  static defaultProps = {
    msg: '', //auto bind from appstore's state
    textQL: helloQL //auto bind from helloQL  
  };

  render() {
    const {msg, textQL} = this.props;

    return (
      <div>
        <Message text={msg}/>
        <br/>
        <Message text={textQL}/>
      </div>
    )
  }
}
