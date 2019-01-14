import _ from 'lodash'

class DivPlayer {
  constructor(id, user) {
    this.id = id
    this.faClasses = {
      rock: 'hand-rock',
      paper: 'hand-paper',
      scissors: 'hand-scissors'
    }
    this.choices = ['rock', 'paper', 'scissors']
    this.init()
    if (user) this.initChoices()
  }

  init() {
    const root = document.getElementById('container')
    this.elt = document.createElement('div')
    this.elt.setAttribute('id', this.id)
    this.elt.setAttribute('class', 'player')
    root.appendChild(this.elt)
  }

  initChoices() {
    this.choicesElt = document.createElement('div')
    this.choicesElt.setAttribute('id', 'choices')
    this.choicesElt.style.display = 'none'
    this.elt.appendChild(this.choicesElt)
    this.choices.forEach(it => this.addChoice(this.choicesElt, it))
  }

  displayChoices() {
    this.choicesElt.style.display = 'block'
  }

  hideChoices() {
    this.choicesElt.style.display = 'none'
  }

  addChoice(parent, type) {
    const choiceElt = document.createElement('button')
    choiceElt.setAttribute('id', `choice${this.capitalize(type)}`)
    choiceElt.innerHTML = `<i class="fa fa-4x fa-${this.faClasses[type]}" ></i>`
    parent.appendChild(choiceElt)
  }

  displayResult(result) {
    this.displayChoice(result.choice)
  }

  displayChoice(n) {
    this.choiceElt = document.createElement('div')
    this.choiceElt.setAttribute('id', `choiceDone${this.id}`)
    this.choiceElt.innerHTML = `<i class="fa fa-4x fa-${
      this.faClasses[this.choices[n]]
    }" ></i>`
    this.elt.appendChild(this.choiceElt)
  }
  reset() {
    if (!_.isUndefined(this.choiceElt)) this.choiceElt.remove()
  }

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
}

export default DivPlayer
