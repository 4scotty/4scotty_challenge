import { state, toggle } from './state'
import { playAutoMode, playUserMode } from './business-logic'

const processAutoMode = dom => {
  const output = playAutoMode()
  dom.players.forEach((p, i) => p.displayResult(output[i]))
}

const processUserMode = (userChoice, dom) => {
  dom.players[1].hideChoices()
  const output = playUserMode(userChoice)
  dom.players.forEach((p, i) => p.displayResult(output[i]))
}

const handleStartButton = dom => {
  dom.players.forEach(p => p.reset())
  if (state.autoMode) processAutoMode(dom)
  else dom.players[1].displayChoices()
}

const initHandler = dom => {
  getById('autoModeButton').onclick = () => toggle()
  getById('startButton').onclick = () => handleStartButton(dom)

  getById('choiceRock').onclick = () => processUserMode(0, dom)
  getById('choicePaper').onclick = () => processUserMode(1, dom)
  getById('choiceScissors').onclick = () => processUserMode(2, dom)
}

const getById = id => document.getElementById(id)

export default initHandler
