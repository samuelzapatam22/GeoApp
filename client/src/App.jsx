import { useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import CreateCountryForm from './components/createCountryForm/CreateCountryForm'
import SearchBar from './components/searchBar/SearchBar'
import Home from './components/Home/Home'
import SliderBar from './components/sliderBar/SliderBar'
import ListCountries from './components/listCountries/ListCountries'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
<<<<<<< Updated upstream
=======
/* import { gql, useQuery } from '@apollo/client'*/
import SearchBar from './components/searchBar/SearchBar';
>>>>>>> Stashed changes

const GET_ALL_COUNTRIES = gql`
query countries{
  countries {
    code
    name
    continent {
      name
    }
    languages {
      name
    }
  }
}
`

function App() {
  const { data, loading, error } = useQuery(GET_ALL_COUNTRIES)

  if (loading) return <p>loading..</p>
  if (error) return <p>Error..{error.message}</p>

  return (
    <div className='container'>
      <Router>
      <div className='content'>
        <Routes>
          <Route path='/*' element={<SliderBar />} />
          <Route path='/' element={<Home />}  />
          <Route path='/create' element={<CreateCountryForm />} />
          <Route path='/home' element={<ListCountries />} />
        </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App