import './UpdateCountryForm.css'
import '../sliderBar/SliderBar'
import SliderBar from '../sliderBar/SliderBar'

function UpdateCountryForm() {
  return (
    <div className='slider-bar'>
      <SliderBar />
    <div className='UpdateCountryForm'>
      <div className='container-form-create'>
        <h1 className='title'>Update Country</h1>
        <form>
          <div className='field-code'>
            <label>Code country</label>
          <input type="text" name='code' placeholder='Code' />
          <button className='btn-consult'>Consult</button>
          </div>
          <div className='field-form-update'>
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
            <button className='btn-clean'>Delete</button>
            <button className='btn-create'>create</button>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default UpdateCountryForm;