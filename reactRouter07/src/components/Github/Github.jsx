import React, { useEffect } from 'react'

function Github() {

const [data, setData] = React.useState([])
useEffect(() => {
  fetch('https://api.github.com/users/MaheshMaddela123')
  .then((response) => response.json)
  .then(data => {
    console.log(data)
    setData(data)
  })
}, [])

  return (
    <div className='text-center m-4 text-4xl'>
      <img src= {data.avatar_url} width={300} alt="" />
    </div>
  )
}

export default Github
