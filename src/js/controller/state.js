const toggle = () => {
  state.autoMode = !state.autoMode
}

const state = {
  //Auto mode = true => machine vs machine
  autoMode: false
}

export { state, toggle }
