import { useState } from 'react'
import GlobalContext from './Context/GlobalContext'
import Index from './Pages/Index.jsx'
import Movies from './Pages/Movies.jsx'
import Series from './Pages/Series.jsx'
import axios from 'axios'
import { API_BASE_URI, API_KEY, SEARCH_MOVIE_ENDPOINT, SEARCH_SERIES_ENDPOINT } from './config/config'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './Layout/DefaultLayout'

function App() {

  const [movies, setMovies] = useState([])
  const [series, setSeries] = useState([])

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

    setMovies(movieRes.data.results) 
    setSeries(seriesRes.data.results)
  }
 

  return (
    <GlobalContext.Provider value={{movies, series, handleSearch}}>
      <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout/>}>
          <Route path='/' element={<Index/>}/>
          <Route path='/movies' element={<Movies/>} />
          <Route path='/series' element={<Series/>} />
        </Route>
      </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  )
}

export default App
