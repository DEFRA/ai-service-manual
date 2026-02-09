import neostandard from 'neostandard'

export default neostandard({
  env: ['node', 'vitest'],
  ignores: [
    ...neostandard.resolveIgnoresFromGitignore(),
    'radar-builder/lib/**'
  ],
  noJsx: true,
  noStyle: true
})
