import SpriteSheet from './SpriteSheet.js'
import { loadImage, loadLevel } from './loaders.js'

function drawBackground(background, context, sprite) {
  background.ranges.forEach(([x1, x2, y1, y2]) => {
    for (let x = x1; x < x2; ++x) {
      for (let y = y1; y < y2; ++y) {
        sprite.drawTile(background.tile, context, x, y)
      }
    }
  })
}

const canvas = document.getElementById('screen')
const context = canvas.getContext('2d')

loadImage('/img/tiles.png').then((img) => {
  const sprite = new SpriteSheet(img, 16, 16)
  sprite.define('ground', 0, 0)
  sprite.define('sky', 3, 23)
  loadLevel('1-1').then((level) =>
  level.backgrounds.forEach(background => {
    drawBackground(background, context, sprite)
  })
  )
  for (let x = 0; x < 25; ++x) {
    for (let y = 12; y < 14; ++y) {
      sprite.drawTile('ground', context, x, y)
    }
  }
})
