import React, { useState } from 'react'

const Farenhite = () => {
    const [ferenhite, setferenhite] = useState('')
    const [kelvin, setkelvin] = useState('')
    const [celcius, setcelcius] = useState('')

    
    const handleFahrenheitChange = (e) => {
        const value = Number(e.target.value);
        setferenhite(value);
    
        // If the input is not empty, convert to Celsius
        if (value !== '') {
          const celsiusValue = ((value - 32) * 5) / 9;
          setcelcius(celsiusValue); 
        } else {
          setcelcius('');
        }
      };

      const handleKelvinChange = (e) => {
        const value =Number( e.target.value);
        setferenhite(value);
    
        // If the input is not empty, convert to Celsius
        if (value !== '') {
          const kelvinValue = (value - 32) * 5 / 9 + 273.15;
          setkelvin(kelvinValue); 
        } else {
          setkelvin('');
        }
      };

      const change =(e)=>{
        e.preventDefault();
        handleFahrenheitChange (e)
        handleKelvinChange(e)
      }
    
  return (
    <>
      <form>
  <div className="form-group">
    <label>Enter temprtaure in ferenhite</label>
    <input type="number" value={ferenhite} className="form-control"   placeholder=" temprtaure in ferenhite" onChange={change}/>
  </div>
  
  <div className="form-group">
    <label> temprtaure in celcius</label>
    <input type="number" value={celcius} className="form-control"   placeholder=" temprtaure in celcius" />
  </div>

  <div className="form-group">
    <label> temprtaure in kelvin</label>
    <input type="number" value={kelvin} className="form-control"   placeholder=" temprtaure in celcius" />
  </div>
  <button  className="btn btn-primary" >Clear</button>
</form>
    </>
  )
  
}

export default Farenhite
