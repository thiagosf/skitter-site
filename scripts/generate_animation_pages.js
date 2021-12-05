const fs = require('fs')

const main = async () => {
  const template = (await fs.promises.readFile('./templates/animation-template.html'))
    .toString()
  console.log('template', template)
  const data = JSON.parse(
    (
      await fs.promises.readFile('./settings/data.json')
    ).toString()
  )
  const { animations } = data
  await Promise.all(
    animations.map(async (animation) => {
      const templateItem = template.replace('{animation}', animation)
      await fs.promises.writeFile(`./templates/animation-${animation}.html`, templateItem)
    })
  )
}

main()
