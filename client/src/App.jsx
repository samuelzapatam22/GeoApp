import { useState } from 'react'
import './App.css'
import { gql, useQuery } from '@apollo/client'


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
    {data.countries.map((country) => (
      <div className='container-country' key={country.name}>
        {country.name}
        <img src={`https://flagsapi.com/${country.code}/flat/64.png`} alt={country.name} />
      </div>
    ))}
   </div>
  )
}

export default App
