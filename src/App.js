import React from 'react'
import { CatList } from "./components"
class App extends React.Component {
  render () {
    return (
    <div className="container">
      <h1>Catstagram</h1>
      <CatList/>
    </div>)
  }
}

export default App;