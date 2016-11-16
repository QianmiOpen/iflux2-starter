import {Store} from 'iflux2'
import {fetchText} from './webapi'
import HelloActor from './actor/hello-actor'
import LoadingActor from './actor/loading-actor'


export default class AppStore extends Store {

  constructor(props) {
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
}

