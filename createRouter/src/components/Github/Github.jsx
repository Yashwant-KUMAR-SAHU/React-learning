import React, { useEffect, useState} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
      fetch('https://api.github.com/users/hiteshchoudhary')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data)
      })
    }, [])
    
    return (
        <div>Github Folloer: {data.followers}
        <img src={data.avatar_url} alt="Git picture" />
        </div>

    )
}


export default Github

/* export const githubInfoLoader = async () => {
    const response = await fetch("github-api")
    return response.json()
    }  */ 