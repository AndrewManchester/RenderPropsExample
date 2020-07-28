//https://blogreact.com/higher-order-component-react/
//https://css-tricks.com/what-are-higher-order-components-in-react/
import React from 'react';
const preload = {
  "data": [
    {
      "name": "Ojo",
      "zone": "Lagos State",
      "region": "South West"
    },
    {
      "name": "Ahiazu Mbaise",
      "zone": "Imo State",
      "region": "South East"
    },
    {
      "name": "Akoko-Edo",
      "zone": "Edo State",
      "region": "South South"
    },
    {
      "name": "Anka",
      "zone": "Zamfara State",
      "region": "North West"
    },
    {
      "name": "Akwanga",
      "zone": "Nasarawa State",
      "region": "North Central"
    }
  ]
}

function WithSearch(props)  {
    const inputBox = React.useRef()
    
    React.useEffect(() => {
       inputBox.current.focus()
    })
    
      return (
        <div>
          <div>
            <input ref={inputBox} onChange={props.onChange}  type="text" placeholder="Search" />
          </div>
        </div>
      )
    
  }

function makeString(item) {
   return `${item.name} ${item.zone} ${item.region}`
}
function filterItems(arr, find, fn) {
  if (find === "") return arr
  return arr.filter(function(el) {
      return fn(el).toUpperCase().indexOf(find.toUpperCase()) >= 0
  })
}

const Location = (props) => {
    console.log(props)
    const [searchTerm, setSearchTerm] =React.useState("")
    const onChange = event => {
      setSearchTerm(event.target.value)
    }
   

  return (
    <div>
      <div>
        <div>
          <h2>Preferred Locations</h2>
        </div>
        {props.filterOnRender(onChange)}
        {props.filterFunction(searchTerm).map(location => 
          props.presentRender({...location, comment:props.doesThisProp}))}
      </div>
    </div>
  )
}

const LocationCard = (props) => {
  const { name, zone, region, comment } = props.location
  console.log(props)
  return (
    <div>
      {comment}
      <hr />
      <p><b>Name:</b> {name}</p>
      <p><b>Zone:</b> {zone}</p>
      <p><b>Region:</b> {region}</p>
      <hr />
    </div>
  )
}

const filterData = (source, fn) => (filterOn) => 
  filterItems(source, filterOn, fn)
  
const App = () => (
  <div>
    <Location doesThisProp=''
              filterFunction={filterData(preload.data, makeString)}
              filterOnRender={(handler)=> <WithSearch  onChange={handler}/>}
              presentRender ={(aLocation)=><LocationCard location={aLocation}/>}
    />
  </div>
)


export default App;
