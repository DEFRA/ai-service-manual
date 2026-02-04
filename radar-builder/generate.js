import { readFile } from 'node:fs/promises'
import { mapEntries } from './radar/entries-mapper.js'

import { buildRadar } from './radar/builder.js'
import { radarSchema } from './data/schema.js'
import { exportAsPng, exportAsSvg } from './radar/exporter.js'

const dest = '.artifacts/tech-radar/aice-tech-radar'

async function main() {
  const data = JSON.parse(
    await readFile('./src/tech-radar/data/radar.json', 'utf-8')
  )

  const { value: validated, error } = radarSchema.validate(data)

  if (error) {
    throw new Error(`Invalid radar data: ${error.message}`)
  }

  const entries = mapEntries(validated.entries)
  const svg = await buildRadar(entries)

  await exportAsPng(svg, `${dest}.png`, 1450, 1000)
  await exportAsSvg(svg, `${dest}.svg`)
}

await main()
