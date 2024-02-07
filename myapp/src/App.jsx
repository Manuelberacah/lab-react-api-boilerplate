
import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios"

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("https://reactnd-books-api.udacity.com/books", {headers: { 'Authorization': 'whatever-you-want' }})
    .then((res) => setData(res.data.books))
    .catch((error) => console.error(error))
  },[])

  return (
    <>
      {
        data.map(items => {
          return(
            <div className='content'>
              
              <div>
              <h2>{items.title}</h2>
              <img src={items.imageLinks.thumbnail} alt="" />
              {items.authors.map((ele, i) => {
                console.log(ele)
                return <p key={i}>{ele}</p>
              })}
              </div>
              <p>{items.description}</p>
              
            </div>

          )
        })
      }
    </>
  )
}

export default App