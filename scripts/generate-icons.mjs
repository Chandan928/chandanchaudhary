// One-time icon generation script — run with: node scripts/generate-icons.mjs
// Reads public/favicon.svg and produces all required PNG sizes + favicon.ico
import sharp from 'sharp'
import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, '..', 'public')

const svgBuffer = readFileSync(join(publicDir, 'favicon.svg'))

const pngSizes = [
  { name: 'favicon-48x48.png', size: 48 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'icon-192x192.png', size: 192 },
  { name: 'icon-512x512.png', size: 512 },
]

async function main() {
  // Generate all PNG sizes
  for (const { name, size } of pngSizes) {
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(join(publicDir, name))
    console.log(`✓ ${name}`)
  }

  // Generate favicon.ico with embedded 16×16, 32×32, and 48×48 PNGs
  const png16 = await sharp(svgBuffer).resize(16, 16).png().toBuffer()
  const png32 = await sharp(svgBuffer).resize(32, 32).png().toBuffer()
  const png48 = await sharp(svgBuffer).resize(48, 48).png().toBuffer()
  const ico = buildIco([png16, png32, png48], [16, 32, 48])
  writeFileSync(join(publicDir, 'favicon.ico'), ico)
  console.log('✓ favicon.ico')
}

// Builds a valid ICO container with embedded PNGs (Vista+ format)
function buildIco(pngs, sizes) {
  const count = pngs.length
  const dirSize = 6 + count * 16

  let offset = dirSize
  const entries = pngs.map((png, i) => {
    const e = { offset, size: png.length, dim: sizes[i] }
    offset += png.length
    return e
  })

  const buf = Buffer.alloc(dirSize + pngs.reduce((s, p) => s + p.length, 0))

  // ICONDIR header
  buf.writeUInt16LE(0, 0) // reserved
  buf.writeUInt16LE(1, 2) // type = 1 (icon)
  buf.writeUInt16LE(count, 4)

  // ICONDIRENTRY per image
  entries.forEach((e, i) => {
    const b = 6 + i * 16
    const d = e.dim >= 256 ? 0 : e.dim
    buf.writeUInt8(d, b)
    buf.writeUInt8(d, b + 1)
    buf.writeUInt8(0, b + 2)  // color count
    buf.writeUInt8(0, b + 3)  // reserved
    buf.writeUInt16LE(1, b + 4)  // planes
    buf.writeUInt16LE(32, b + 6) // bit count
    buf.writeUInt32LE(e.size, b + 8)
    buf.writeUInt32LE(e.offset, b + 12)
  })

  // Image data
  pngs.forEach((png, i) => png.copy(buf, entries[i].offset))

  return buf
}

main().catch(err => { console.error(err); process.exit(1) })
