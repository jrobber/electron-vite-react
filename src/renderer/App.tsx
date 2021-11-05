import type * as React from 'react'

export function App() {
  const ele = window.myAPI.project.getSourceFiles()[10]
  const SyntaxKind = window.myAPI.SyntaxKind
  console.log(
    'JSX elements',
    ele.getFilePath(),
    ele.getDescendantsOfKind(SyntaxKind.JsxOpeningElement)
  )
  return <div className="App"> App</div>
}
