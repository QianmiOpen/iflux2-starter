//@flow
import {Actor, Action} from 'iflux2'

import type {ActorState} from 'iflux2'

type Message = {
  message: string;
};

export default class HelloActor extends Actor {
  defaultState() {
    return {
      text: 'new idea, new world!'
    }
  }

  @Action('update')
  update(state: ActorState, {message}: Message) {
    return state.set('text', message)
  }

  @Action('redux:action')
  change(state: ActorState, {message}: Message) {
    return state.set('text', message)
  }
}
