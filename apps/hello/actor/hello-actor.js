//@flow
import {Actor, Action} from 'iflux2'

import type {ActorState} from 'iflux2'

export default class HelloActor extends Actor {
  defaultState() {
    return {
      text: 'new idea, new world!'
    }
  }

  @Action('update')
  update(state: ActorState, {message}: {message: string}) {
    return state.set('text', message)
  }
}
