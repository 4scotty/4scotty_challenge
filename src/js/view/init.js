import DivPlayer from './model/div-player.js'

const initDom = () => {
  const dom = {
    players: [
      new DivPlayer('player0', false, 'terminator.png'),
      new DivPlayer('player1', true, 'r2d2.png')
    ]
  }
  return dom
}

export default initDom
