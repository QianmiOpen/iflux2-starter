import {Action, Actor} from 'iflux2'


export default class HelloActor extends Actor {
  defaultState() {
    return {
      text: 'new idea, new world!'
    }
  }

  @Action('update')
  update(state, {message}) {
    return state.set('text', message)
  }
}