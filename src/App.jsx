import { useState } from 'react'
import GlobalContext from './Context/GlobalContext'
import Main from './Pages'

function App() {

  return (
    <GlobalContext.Provider>
      <Main/>
    </GlobalContext.Provider>
  )
}

export default App
