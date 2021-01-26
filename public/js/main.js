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
const loadBackgroundSprites = () => {
  return loadImage('/img/tiles.png').then((img) => {
    const sprite = new SpriteSheet(img, 16, 16)
    sprite.define('ground', 0, 0)
    sprite.define('sky', 3, 23)
    return sprite
  })
}
const canvas = document.getElementById('screen')
const context = canvas.getContext('2d')

Promise.all([loadBackgroundSprites(), loadLevel('1-1')]).then(
  ([sprite, level]) =>
    level.backgrounds.forEach((background) => {
      drawBackground(background, context, sprite)
    })
)
