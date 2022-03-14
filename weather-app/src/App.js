import react, {useState} from 'react' ; 
import './App.css';
import axios from 'axios';
function App() {
  const [data,setData] = useState({});
  const [location,setLocation] = useState('');
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=829bb30e333c3dcc47a1a6b4c57cc4a9';  

  const searchLocation = (event) =>{
    if(event.key === 'Enter'){
      axios.get(url).then((response) =>{
      setData(response.data)
      console.log(response.data)
      
    })
    }
    
  }
  return (
    <div className="App">
      <h1 className='title'> Weather App</h1>
      <h3 className='search'>
        Get Weather By Location
      </h3>
      <h2 id="eror"></h2>
      <div>
        <input 
        value={location}
        onChange = {event => setLocation(event.target.value)}
        onKeyPress = {searchLocation}
        className='searchbar'
        type='text'
        placeholder='Enter Location'
         />
      </div>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>{data.name}</p>
          </div>
          <div className='temp'>
            {data.main ? <h1>{parseFloat(data.main.temp -273.15).toFixed(2)}°C</h1> : null}
          </div>
          <div className='description'>
            {data.weather ? <p>{data.weather[0].description}</p> : null}
          </div>
        </div>
        <div className='bottom'>
          <div className='feels'>
            {data.main ? <p>{parseFloat(data.main.feels_like -273.15).toFixed(2)}°C</p> : null}
            <p>feels like</p>
          </div>
          <div className='humidity'>
            {data.main ? <p>{data.main.humidity}%</p> : null}
            <p>humidity</p>
          </div>
          <div className='wind'>
            {data.wind ? <p>{parseFloat(data.wind.speed * 1.6).toFixed(2)}kph</p> : null}
            <p>wind speed</p>
          </div>
        </div>

      </div>
      
    </div>
  );
}

export default App;