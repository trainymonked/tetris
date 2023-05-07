import Game from './src/Game.js'
import View from './src/View.js'
import Controller from './src/Controller.js'

const root = document.querySelector('#root')
document.getElementById('year').innerHTML = new Date().getFullYear()

if (navigator.userAgent.includes('Mobile')) {
    const p = document.createElement('p')
    p.id = 'mobile'
    p.innerText = 'The game is only available on PC'
    root.append(p)
} else {
    const game = new Game()
    const view = new View(root, 480, 640, 20, 10)
    const controller = new Controller(game, view)

    window.game = game
    window.view = view
    window.controller = controller
}
