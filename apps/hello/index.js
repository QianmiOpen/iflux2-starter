import React, {Component} from 'react'
import {StoreProvider} from 'iflux2'
import AppStore from './store'
import MessageContainer from './container/message-container'


@StoreProvider(AppStore, {debug: true})
export default class HelloApp extends Component {
  componentDidMount() {
    this.props.store.init()
  }


  render() {
    return (
      <MessageContainer/>
    )
  }
}