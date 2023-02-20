import React from 'react'
import Blog from '../Blog'
import { api_config } from '../api_config'
import { useState } from 'react'

const Featured = () => {

    // const [datacontent, setContent] = useState([])

    const dataContent = {
    
        model: "text-davinci-003",
        prompt: "ad for painter",
        max_tokens: 102,
        temperature: 0,
      };

        const apiKey = ""

    const api_call = async() =>{ await  fetch("https://api.openai.com/v1/completions", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
    },
    body: JSON.stringify(dataContent),
  })
    .then((response) => {
      return response.json();
      
    }).then((data) => {
        console.log(data);
       
      })

    .catch((error) => {
      console.error(error);
    });

    

}
  return (
    <div>
        <div className="blog">
            <h1>Featured</h1> 
            <div className="featured">
                <button onClick={api_call}>Generate</button>
            </div>
        </div>
    </div>
  )
}

export default Featured