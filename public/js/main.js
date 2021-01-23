const loadImage = (url) =>
  new Promise((resolve, reject) => {
    const image = new Image() //image instances
    image.addEventListener('load', () => {
      resolve(image)
    })
    image.src = url
    image.alt = 'tiles'
  })

class SpriteSheet {
  constructor(image, width, height) {
    this.image = image
    this.width = width
    this.height = height
    this.tiles = new Map()
  }
  // save the subset of the image to buffer, A buffer to keep the tile
  define(name, x, y) {
    const buffer = document.createElement('canvas')
    buffer.width = this.width
    buffer.height = this.height
    buffer
      .getContext('2d')
      .drawImage(
        this.image,
        x * this.width,
        y * this.height,
        this.width,
        this.height,
        0,
        0,
        this.width,
        this.height
      )
    this.tiles.set(name, buffer)
  }
  draw(name, context, x, y) {
    const buffer = this.tiles.get(name)
    context.drawImage(buffer, x, y)
  }
}
const canvas = document.getElementById('screen')
const context = canvas.getContext('2d')
context.fillRect(0, 0, 50, 50)

loadImage('/img/tiles.png').then((img) => {
  const sprite = new SpriteSheet(img, 16, 16)
  sprite.define('ground', 0, 0)
  sprite.draw('ground', context, 45, 62)
})
