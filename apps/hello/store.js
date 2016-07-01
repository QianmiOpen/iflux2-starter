/**
 * appstore, state container
 */
import {Store} from 'iflux2'
import HelloActor from './actor/hello'
import {fetchMsg} from './webapi'


export default class AppStore extends Store {
  bindActor() {
    return [
      new HelloActor
    ]
  }

  
  //;;;;;;;;;;;;;;;action;;;;;;;;;;;;;;;
  init = async () => {
    const {message} = await fetchMsg()
    console.log(message)
    this.dispatch('update', {message})
  };
}

