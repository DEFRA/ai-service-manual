import neostandard from 'neostandard'

export default neostandard({
  env: ['node', 'vitest'],
  ignores: [
    ...neostandard.resolveIgnoresFromGitignore(),
    'src/tech-radar/lib/**'
  ],
  noJsx: true,
  noStyle: true
})
