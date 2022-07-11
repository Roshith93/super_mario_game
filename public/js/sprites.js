import SpriteSheet from './SpriteSheet.js'

import { loadImage, } from './loaders.js'

export const loadBackgroundSprites =  async () => {
 return await loadImage('/img/tiles.png').then((img) => {
   const sprite = new SpriteSheet(img, 16, 16)
   sprite.defineTile('ground', 0, 0)
   sprite.defineTile('sky', 3, 23)
   return sprite
 })
}

export const loadMarioSprites =  async () => {
 return await loadImage('/img/characters.gif').then((img) => {
   const sprite = new SpriteSheet(img, 16, 16)
   sprite.define('idle', 276, 44, 16, 16)
   return sprite
 })
}