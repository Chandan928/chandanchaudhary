import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schema } from './schema'

export default defineConfig({
  name: 'default',
  title: 'Chandan Chaudhary — CMS',
  projectId: 'e85x2s85',
  dataset: 'production',
  basePath: '/studio',
  plugins: [
    structureTool(),
    visionTool(),
  ],
  schema,
})
