import React,{useState} from 'react'

const Kelvin = () => {
    const [ferenhite, setferenhite] = useState('')
    const [kelvin, setkelvin] = useState('')
    const [celcius, setcelcius] = useState('')

    
    const handleCelciusChange = (e) => {
        const value = Number(e.target.value);
        setkelvin(value);
    
        // If the input is not empty, convert to Celsius
        if (value !== '') {
          const celcuisvalue = value - 273;
          setcelcius(celcuisvalue); 
        } else {
          setcelcius('');
        }
      };

      const handleFerenhightChange = (e) => {
        const value = Number(e.target.value);
        setkelvin(value);
    
        // If the input is not empty, convert to Celsius
        if (value !== '') {
          const ferenhightValue = ((value - 273)*9/5 )+ 32 ;
          setferenhite(ferenhightValue); 
        } else {
          setferenhite('');
        }
      };

      const change =(e)=>{
        e.preventDefault();
        handleCelciusChange (e)
        handleFerenhightChange(e)
      }
    
  return (
    <>
      <form>
  <div className="form-group">
    <label>Enter temprtaure in kelvin</label>
    <input type="number" value={kelvin} className="form-control"   placeholder=" temprtaure in ferenhite" onChange={change}/>
  </div>
  
  <div className="form-group">
    <label> temprtaure in ferenhite</label>
    <input type="number" value={ferenhite} className="form-control"   placeholder=" temprtaure in celcius" />
  </div>

  <div className="form-group">
    <label> temprtaure in celcius</label>
    <input type="number" value={celcius} className="form-control"   placeholder=" temprtaure in celcius" />
  </div>
  <button  className="btn btn-primary" >Clear</button>
</form>
    </>
  )
}

export default Kelvin
