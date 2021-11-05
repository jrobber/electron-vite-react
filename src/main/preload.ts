import { Project } from 'ts-morph'
// const basePath = `../../../ivi/ivi_react_native`
const project = new Project({
  tsConfigFilePath: `tsconfig.json`
})
// electron_1.contextBridge.exposeInMainWorld('myAPI', {
//     project: 'project'
// });
console.log('PRELOAD', project.getSourceFiles())
