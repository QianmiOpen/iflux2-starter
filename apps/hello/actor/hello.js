/**
 * hello actor 
 */
import {Action, Actor} from 'iflux2'


export default class HelloActor extends Actor {
  defaultState() {
    return {
      msg: 'new idea, new world!'
    }
  }

  @Action('update')
  update(state, {message}) {
    return state.set('msg', message)
  }
}