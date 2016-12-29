//@flow
import {Store} from 'iflux2'
import {fetchText} from './webapi'
import HelloActor from './actor/hello-actor'
import LoadingActor from './actor/loading-actor'

import type {StoreOptions} from 'iflux2'

export default class AppStore extends Store {

  constructor(props: StoreOptions = {debug: false}) {
    super(props)
    if (__DEV__) {
      window._store = this;
    }
  }

  bindActor() {
    return [
      new LoadingActor,
      new HelloActor
    ]
  }

  //;;;;;;;;;;;;;;;action;;;;;;;;;;;;;;;
  init = async () => {
    const {res: message, err} = await fetchText()
    if (err) {
      console.error(err.message);
    }
    this.dispatch('loading', false)
    this.dispatch('update', {message})
  };


  reduxAction = () => {
    this.dispatch({
      type: 'redux:action',
      message: 'hello text from redux action'
    });
  };
}
