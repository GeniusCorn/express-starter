import { defineConfig } from 'tsup'

export default defineConfig({
  clean: true,
  entry: ['./src/index.ts'],
  sourcemap: true,
  splitting: true,
  target: 'node19',
  treeshake: true
})
