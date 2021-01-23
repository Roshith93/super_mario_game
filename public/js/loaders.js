export const loadImage = (url) =>
  new Promise((resolve, reject) => {
    const image = new Image() //image instances
    image.addEventListener('load', () => {
      resolve(image)
    })
    image.src = url
    image.alt = 'tiles'
  })

  export const loadLevel = (name) => {
    const res = fetch(`levels/${name}.json`)
    return res.then(r => r.json())
  }