import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { fileURLToPath } from 'node:url'
import fetch from 'node-fetch'

const dirname = path.dirname(fileURLToPath(import.meta.url))
const CONTENT_DIR = path.resolve(dirname, '../../../../src/content')

// Simple in-memory cache for external content (TTL: 5 minutes)
const externalContentCache = new Map()

const CACHE_TTL = 5 * 60 * 1000 // 5 minutes

async function fetchExternalContent(url) {
  const cached = externalContentCache.get(url)
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.content
  }

  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(
      `Failed to fetch external content from ${url}: ${response.statusText}`
    )
  }

  const content = await response.text()
  externalContentCache.set(url, {
    content,
    timestamp: Date.now()
  })

  return content
}

export async function loadContent(filename, externalUrl = null) {
  let fileContent

  if (externalUrl) {
    fileContent = await fetchExternalContent(externalUrl)
  } else {
    const fullPath = path.join(CONTENT_DIR, filename)

    if (!fs.existsSync(fullPath)) {
      throw new Error(`Content file not found: ${filename}`)
    }

    fileContent = fs.readFileSync(fullPath, 'utf8')
  }

  const { data, content } = matter(fileContent)

  return {
    meta: data,
    content
  }
}
