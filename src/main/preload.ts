import { SyntaxKind, Project, SourceFile } from 'ts-morph'
// const basePath = `../../../ivi/ivi_react_native`
const project = new Project({
  tsConfigFilePath: `tsconfig.json`
})

const files = project.getSourceFiles()
const file = files[10]
file.getFilePath()

window.myAPI = {
  project,
  SyntaxKind
}

// console.log('PRELOAD', project.getSourceFiles())
