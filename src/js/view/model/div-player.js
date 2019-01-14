import _ from 'lodash'

class DivPlayer {
  constructor(id, user, picture) {
    // Player container DOM id
    this.id = id
    this.user = user
    this.picture = picture

    this.faClasses = {
      rock: 'hand-rock',
      paper: 'hand-paper',
      scissors: 'hand-scissors'
    }
    this.choices = ['rock', 'paper', 'scissors']

    // DOM elements regulary used are put into an attribute
    // Block of 3 choices buttons
    this.choicesElt = null
    // Image of choice done by player
    this.choiceElt = null

    this.init()
  }

  init() {
    this.initPlayerContainer()
    this.initPicture()
    // Init User choices division only if player could be a real user
    // (bottom container)
    if (this.user) this.initChoices()
  }

  initPlayerContainer() {
    // Create a player container in main container
    const container = document.getElementById('container')
    this.addDomElt(container, 'div', this.id, 'player')
  }

  initPicture() {
    // Add image in player container
    const plCont = document.getElementById(this.id)
    this.addDomElt(plCont, 'img', `avatar_${this.id}`, 'avatar', [
      { key: 'src', value: `img/${this.picture}` }
    ])
  }

  initChoices() {
    const parent = document.getElementById(this.id)
    this.choicesElt = document.createElement('div')
    this.choicesElt.setAttribute('id', 'choices')
    this.choicesElt.style.display = 'none'
    parent.appendChild(this.choicesElt)
    this.choices.forEach(it => this.addChoice(this.choicesElt, it))
  }

  // Generic method that enables DOM element adding
  addDomElt(parent, tag, id, className, attributes) {
    const newElt = document.createElement(tag)
    newElt.setAttribute('id', id)
    newElt.setAttribute('class', 'player')
    if (attributes) attributes.forEach(a => newElt.setAttribute(a.key, a.value))
    parent.appendChild(newElt)
  }

  displayChoices() {
    this.choicesElt.style.display = 'block'
  }

  hideChoices() {
    this.choicesElt.style.display = 'none'
  }

  displayResult(result) {
    this.displayChoiceDone(result.choice)
  }

  addChoice(parent, type) {
    const choiceElt = document.createElement('button')
    choiceElt.setAttribute('id', `choice${this.capitalize(type)}`)
    choiceElt.innerHTML = `<i class="fa fa-4x fa-${this.faClasses[type]}" ></i>`
    parent.appendChild(choiceElt)
  }


  displayChoiceDone(n) {
    const plCont = document.getElementById(this.id)
    this.choiceElt = document.createElement('div')
    this.choiceElt.setAttribute('id', `choiceDone${this.id}`)
    this.choiceElt.innerHTML = `<i class="fa fa-4x fa-${
      this.faClasses[this.choices[n]]
    }" ></i>`
    plCont.appendChild(this.choiceElt)
  }

  reset() {
    if (this.choiceElt !== null) this.choiceElt.remove()
  }

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
}

export default DivPlayer
