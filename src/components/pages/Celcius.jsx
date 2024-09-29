import React ,{useState} from 'react'

const Celcius = () => {
  
    const [ferenhite, setferenhite] = useState('')
    const [kelvin, setkelvin] = useState('')
    const [celcius, setcelcius] = useState('')

    
    const handleCelciusChange = (e) => {
        const value = Number(e.target.value);
        setcelcius(value);
    
        // If the input is not empty, convert to Celsius
        if (value !== '') {
          const ferenhiteValue = value * (9/5) + 32;
          setferenhite(ferenhiteValue); 
        } else {
          setferenhite('');
        }
      };

      const handleKelvinChange = (e) => {
        const value = Number(e.target.value);
        setcelcius(value);
    
        // If the input is not empty, convert to Celsius
        if (value !== '') {
          const kelvinValue = value + 273.25;
          setkelvin(kelvinValue); 
        } else {
          setkelvin('');
        }
      };

      const change =(e)=>{
        e.preventDefault();
        handleCelciusChange (e)
        handleKelvinChange(e)
      }
    
  return (
    <>
      <form>
  <div className="form-group">
    <label>Enter temprtaure in celcius</label>
    <input type="number" value={celcius} className="form-control"   placeholder=" temprtaure in ferenhite" onChange={change}/>
  </div>
  
  <div className="form-group">
    <label> temprtaure in ferenhite</label>
    <input type="number" value={ferenhite} className="form-control"   placeholder=" temprtaure in celcius" />
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

export default Celcius
