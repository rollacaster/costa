import fs from 'fs'

const images = fs.readdirSync('src/mobile/images')

images.forEach((file) => {
  const key = require.resolve(`../images/${file}`)
  require.cache[key] = {
    id: key,
    filename: key,
    loaded: true,
    exports: {file}
  }
})
