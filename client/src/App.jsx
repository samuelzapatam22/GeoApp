import { useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import CreateCountryForm from './components/createCountryForm/CreateCountryForm'
import UpdateCountryForm from './components/updateCountryForm/UpdateCountryForm'
import SearchBar from './components/searchBar/SearchBar'
import Home from './components/Home/Home'
import SliderBar from './components/sliderBar/SliderBar'
import ListCountries from './components/listCountries/ListCountries'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

export const GET_COUNTRY = gql`
  query GetCountry($code: ID!) {
    country(code: $code) {
      code
      name
      capital
      currency
      languages {
        name
      }
      continent {
        name
      }
    }
  }
`;

function App() {
  const [selectedCountry, setSelectedCountry] = useState(null); 

  const { loading, error, data } = useQuery(GET_COUNTRY, {
    variables: { code: selectedCountry || ''  },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;


  return (
    <div className='container'>
      <Router>
      <div className='content'>
        <Routes>
          <Route path='/*' element={<SliderBar />} />
          <Route path='/' element={<ListCountries />}  />
          <Route path='/create' element={<CreateCountryForm />} />
          <Route path='/update' element={<UpdateCountryForm />} />
        </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App