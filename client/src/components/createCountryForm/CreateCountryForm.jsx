import React from 'react'
import './createCountryForm.css'

function CreateCountryForm() {
  return (
    <div className='CreateCountryForm'>
      <div className='container-form-create'>
        <h1 className='title'>Create Country</h1>
        <form>
          <div className='field-code'>
            <label>Code country</label>
          <input type="text" name='code' placeholder='Code' />
          <button className='btn-consult'>Consult</button>
          </div>
          <div className='field-form-create'>
            <label>Name</label>
            <input type="text" name="name" placeholder='Name' />
            <label>Capital</label>
            <input type="text" name="capital" placeholder='Capital' />
            <label>Languages</label>
            <input type="text" name="languages" placeholder='Languages' />
            <label>Currency</label>
            <input type="text" name="currency" placeholder='Currency' />
            <label>Continent</label>
            <input type="text" name="continent" placeholder='Continent' />
          </div>
          <div className='buttons'>
            <button className='btn-clean'>Clean</button>
            <button className='btn-create'>create</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateCountryForm