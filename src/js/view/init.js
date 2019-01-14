import DivPlayer from './model/div-player.js'

const initDom = () => {
  const dom = {
    players: [new DivPlayer('player0', false), new DivPlayer('player1', true)]
  }
  return dom
}

export default initDom
