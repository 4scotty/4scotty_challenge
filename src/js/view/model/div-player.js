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

  // Initialization  ===========================================================
  init() {
    this.initPlayerContainer()
    this.initPicture()
    // Init User choices division only if the player could be a real user
    // (bottom player container)
    if (this.user) this.initChoices()
  }

  initPlayerContainer() {
    // Create a player container inside the main container
    this.addDomElt(this.get('container'), 'div', [
      { key: 'id', value: this.id },
      { key: 'class', value: 'player' }
    ])
  }

  initPicture() {
    // Add image in player container
    this.addDomElt(this.get(this.id), 'img', [
      { key: 'id', value: `avatar_${this.id}` },
      { key: 'class', value: 'avatar' },
      { key: 'src', value: `img/${this.picture}` }
    ])
  }

  initChoices() {
    this.addDomElt(this.get(this.id), 'div', [{ key: 'id', value: 'choices' }])
    this.choices.forEach(it => this.addChoice(it))
    this.hideChoices()
  }

  addChoice(type) {
    this.addDomElt(
      this.get('choices'),
      'button',
      [{ key: 'id', value: `choice${this.capitalize(type)}` }],
      `<i class="fa fa-4x fa-${this.faClasses[type]}" ></i>`
    )
  }


  // DOM-updating methods  =====================================================
  displayChoices() {
    this.get('choices').style.display = 'block'
  }

  hideChoices() {
    this.get('choices').style.display = 'none'
  }

  displayResult(output) {
    this.displayChoiceDone(output.choice)
    this.displayColor(output.result)
  }

  displayChoiceDone(n) {
    this.addDomElt(
      this.get(this.id),
      'div',
      [
        { key: 'id', value: `choiceDone${this.id}` },
        { key: 'class', value: 'choice-done' }
      ],
      `<i class="fa fa-4x fa-${this.faClasses[this.choices[n]]}" ></i>`
    )
  }

  displayColor(result) {
    console.log("RESULT =", result)
    switch(result) {
      case 0:
        this.setStatus('loser')
        break;
      case 1:
        this.setStatus('winner')
        break;
      case 2:
        this.setStatus('neutral')
        break;
      default:
        this.setStatus('neutral')
    }
  }

  setStatus(type) {
    this.get(this.id).setAttribute('class', `player ${type}`)
  }

  reset() {
    const elt = this.get(`choiceDone${this.id}`)
    if (!_.isUndefined(elt) && elt !== null) elt.remove()
    this.setStatus('')
  }

  // Generic method to manage DOM ==============================================

  get(id) {
    return document.getElementById(id)
  }

  // Generic method that enables DOM element creation
  addDomElt(parent, tag, attributes, html) {
    const newElt = document.createElement(tag)
    if (attributes) attributes.forEach(a => newElt.setAttribute(a.key, a.value))
    if (!_.isUndefined(html)) newElt.innerHTML = html
    parent.appendChild(newElt)
  }

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
}

export default DivPlayer
