import React, {Component} from 'react'
import {Relax} from 'iflux2'
import Message from './message'
import Loading from './loading'

@Relax
export default class HelloContainer extends Component {
  static defaultProps = {
    loading: false
  };


  render() {
    const {loading} = this.props;
    return (loading 
      ? <Loading/> 
      : <Message/>
    );
  }
}