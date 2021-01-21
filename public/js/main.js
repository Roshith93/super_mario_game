const loadImage = (url) =>
  new Promise((resolve, reject) => {
    const image = new Image() //image instances
    image.addEventListener('load', () => {
      resolve(image)
    })
    image.src = url
    image.alt = 'tiles'
  })
const canvas = document.getElementById('screen')
const context = canvas.getContext('2d')
context.fillRect(0, 0, 50, 50)

loadImage('/img/tiles.png').then((img) =>
  context.drawImage(img, 0, 0, 16, 16, 32, 32, 16, 16)
)
