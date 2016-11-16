/**
 * @flow
 */
import 'fetch'

export const fetchText = () => {
  return new Promise(resolve => {
    //稍微延时一下
    setTimeout(() => {
       fetch('http://localhost:3000/__mock__/message.json')
      .then((res) => res.json())
      .then(res => resolve({
        err: null,
        res: res.message
      }))
    }, 500)
  })
}