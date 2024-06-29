const button = document.getElementById('search-btn')
const input = document.getElementById('ipt')

const cityName = document.getElementById('city-name')
const cityTime = document.getElementById('city-time')
const cityTemp = document.getElementById('city-temp')



const getData = async (city)=>{
    const result = await fetch(`http://api.weatherapi.com/v1/current.json?key=1fa2c4af23784100b9f65946242906&q=${city}&aqi=yes`);
    return await result.json()
}


button.addEventListener('click', async()=>{
    const value = input.value;
    const result = await getData(value);
    cityName.innerText = `${result.location.name}, ${result.location.region}, ${result.location.country}`
    cityTime.innerText = result.location.localtime;
    cityTemp.innerText = result.current.temp_c +" degree Celcius"
})

