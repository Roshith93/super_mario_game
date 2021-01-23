import SpriteSheet from './SpriteSheet.js'
import { loadImage } from './loaders.js'

const canvas = document.getElementById('screen')
const context = canvas.getContext('2d')
context.fillRect(0, 0, 50, 50)

loadImage('/img/tiles.png').then((img) => {
  const sprite = new SpriteSheet(img, 16, 16)
  sprite.define('ground', 0, 0)
  sprite.draw('ground', context, 45, 62)
})
