import type { Project } from 'ts-morph'
import SyntaxKind from 'ts-morph'

export interface IProject {
  project: Project
  SyntaxKind: typeof SyntaxKind
}

declare global {
  interface Window {
    myAPI: IProject
  }
}
