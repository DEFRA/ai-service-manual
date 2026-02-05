import path from 'node:path'
import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

import { mapEntries } from './radar/entries-mapper.js'

import { buildRadar } from './radar/builder.js'
import { radarSchema } from './data/schema.js'
import { exportAsPng, exportAsSvg } from './radar/exporter.js'

const dest = '.artifacts/tech-radar/aice-tech-radar'

const dirname = path.dirname(fileURLToPath(import.meta.url))

const PNG_WIDTH = 1450
const PNG_HEIGHT = 1000

async function main() {
  const data = JSON.parse(
    await readFile(path.join(dirname, '../src/tech-radar/radar.json'), 'utf-8')
  )

  const { value: validated, error } = radarSchema.validate(data)

  if (error) {
    throw new Error(`Invalid radar data: ${error.message}`)
  }

  const entries = mapEntries(validated.entries)
  const svg = await buildRadar(entries)

  await exportAsPng(svg, `${dest}.png`, PNG_WIDTH, PNG_HEIGHT)
  await exportAsSvg(svg, `${dest}.svg`)
}

await main()
