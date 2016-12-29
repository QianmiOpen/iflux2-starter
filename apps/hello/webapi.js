/**
 * @flow
 */
export const fetchText = (): Promise<{err: ?Error, res: any}> => {
  return new Promise(resolve => {
    //稍微延时一下
    setTimeout(() => {
       fetch('/__mock__/message.json')
      .then((res) => res.json())
      .then(res => resolve({
        err: null,
        res: res.message
      }))
    }, 500)
  })
}
