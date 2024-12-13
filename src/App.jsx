import { useState } from 'react'
import GlobalContext from './Context/GlobalContext'
import Index from './Pages'
import axios from 'axios'
import { API_BASE_URI, API_KEY, SEARCH_MOVIE_ENDPOINT, SEARCH_SERIES_ENDPOINT } from './config/config'

function App() {

  const [search, setSearch] = useState([])

  async function handleSearch(query) {
    const movieRes = await axios.get(
      `${API_BASE_URI}${SEARCH_MOVIE_ENDPOINT}`,
      {
        params: {
          api_key: API_KEY,
          query: query,
        },
      }
    )

    const seriesRes = await axios.get(
      `${API_BASE_URI}${SEARCH_SERIES_ENDPOINT}`,
      {
        params: {
          api_key: API_KEY,
          query: query,
        },
      }
    )

    const data = [
      ...movieRes.data.results,
      ...seriesRes.data.results
    ]

    console.log(data);
    setSearch(data)
    console.log(data);
  }
 

  return (
    <GlobalContext.Provider value={{search, handleSearch}}>
      <Index/>
    </GlobalContext.Provider>
  )
}

export default App
