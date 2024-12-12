import { useState, useEffect } from 'react'
import GlobalContext from './Context/GlobalContext'
import Main from './Pages/Main'
import axios from 'axios'
import { API_BASE_URI, API_KEY, SEARCH_MOVIE_ENDPOINT } from './config/config'

function App() {

  const [search, setSearch] = useState('')

  async function handleSearch(query) {
    const response = await axios.get(
      `${API_BASE_URI}${SEARCH_MOVIE_ENDPOINT}`,
      {
        params: {
          api_key: API_KEY,
          query: query,
        },
      }
    )
    const data = response.data.results
    setSearch(data)
  }


  // useEffect(() => {
  //   handleSearch('inception')
  //   console.log(search);  
  // }, []) 

  handleSearch('inception')
  
 
  // useEffect(() => {
  //   console.log(search)
  // }, [search])

  return (
    <GlobalContext.Provider>
      <Main />
    </GlobalContext.Provider>
  )
}

export default App
