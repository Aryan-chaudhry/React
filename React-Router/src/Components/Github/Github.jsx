import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/Aryan-chaudhry')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setData(data);
        })
    }, [])

  return (
    <div className='flex items-center justify-center gap-4 m-4 bg-black text-white p-4 text-3xl'>
    <img 
      src={data.avatar_url}  
      alt="Git picture" 
      width={50} 
      height={50}  
      style={{ borderRadius: '50%', objectFit: 'cover' }} 
    />
    <span>Github followers: {data.followers}</span>
    
  </div>
  
  )
}

export default Github
