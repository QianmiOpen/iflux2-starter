//@flow
import {Actor, Action} from 'iflux2'

export default class LoadingActor extends  Actor {
  defaultState() {
    return {
      loading: true
    }
  }

  @Action('loading')
  setLoding(state: Object, status: boolean) {
    return state.set('loading', status);
  }
}
