import fs from 'fs'
import type * as React from 'react'
import { Project } from 'ts-morph'

console.log('fs', fs)

// const basePath = `../../../ivi/ivi_react_native`
const project = new Project({
  tsConfigFilePath: `tsconfig.json`
})

export function App() {
  console.log('🚀 ~ file: App.tsx ~ line 8 ~ project', project.getSourceFiles())
  console.log('hi')
  return <div className="App"> App</div>
}
