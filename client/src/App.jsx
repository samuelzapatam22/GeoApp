import { useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import CreateCountryForm from './components/createCountryForm/CreateCountryForm'
import './App.css'
<<<<<<< Updated upstream
=======
/* import { gql, useQuery } from '@apollo/client'*/
import SearchBar from './components/searchBar/SearchBar';
>>>>>>> Stashed changes


const GET_ALL_COUNTRIES = gql `
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
  const {data, loading, error} = useQuery(GET_ALL_COUNTRIES)

  if(loading) return <p>loading..</p>
  if(error) return <p>Error..{error.message}</p>

  return (
   <div className='container'>
    <CreateCountryForm />
   </div>
  )
}

export default App