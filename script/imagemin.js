const imagemin = require('imagemin-keep-folder')
const imageminJpegtran = require('imagemin-jpegtran')
const imageminPngquant = require('imagemin-pngquant')

;(async () => {
  // const files = await imagemin(['static/share/**/*.{jpg,png}'], {
  const files = await imagemin(['assets/images/**/*.{jpg,png}'], {
    plugins: [
      imageminJpegtran(),
      imageminPngquant({
        // quality: [0.3, 0.5],
        quality: [0.4, 0.7],
      }),
    ],
    replaceOutputDir: (output) => {
      // return output.replace(/share\//, '../build/images/')
      return output.replace(/images\//, '../build/images/')
    },
  })

  console.log(files.map((img) => img.path))
  //=> [{data: <Buffer 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]
})()
