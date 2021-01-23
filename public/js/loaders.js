export const loadImage = (url) =>
  new Promise((resolve, reject) => {
    const image = new Image() //image instances
    image.addEventListener('load', () => {
      resolve(image)
    })
    image.src = url
    image.alt = 'tiles'
  })
