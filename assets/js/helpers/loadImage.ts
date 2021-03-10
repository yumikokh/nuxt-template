export function loadImage(path: string): Promise<HTMLImageElement> {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.src = require(`@img/${path}`)
  })
}

export function loadImages(paths: string[] | string) {
  const ary = Array.isArray(paths) ? paths : [paths]
  return Promise.all(ary.map((path) => loadImage(path)))
}
