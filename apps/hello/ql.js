//@flow
import {QL} from 'iflux2'


export const textQL = QL('helloQL', [
  'text',
  (text) => `${text} from ql`
])
