import React from 'react'
import Blog from '../Blog'
import { api_config } from '../api_config'
import { useEffect, useState } from 'react'
import config from '../../config.json'

const Featured = () => {

    const [content, setContent] = useState([])
    const [Answer, setAnswer] = useState()
    const [Result, setResult] = useState('-')
    const [inputText, setInputText] = useState('');

    function handleInputChange() {
        // setInputText(parseInt(event.target.value));
        Checkk()
      }

    const dataContent = {
    
        model: "text-davinci-003",
        prompt: "Can you write a random mathematics numerical challenge for me for grade 8 with answers in one number after Answer :",
        max_tokens: 102,
        temperature: 1,
      };


const api_call = async() =>{ await  fetch("https://api.openai.com/v1/completions", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${config.apiKey}`,
    },
    body: JSON.stringify(dataContent),
  })
    .then((response) => {
      return response.json();
      
    }).then((data) => {
        console.log(data);
        // setContent(data.choices[0].text)
        // const supAnswer = () =>{
            let searchString = "Answer";
            let index = data.choices[0].text.indexOf(searchString);
            if (index !== -1) {
                let valueAfterSearchString2 = data.choices[0].text.substring(0,index);
                setContent(valueAfterSearchString2)

                let valueAfterSearchString = data.choices[0].text.substring(index + searchString.length + 1);
                setAnswer(valueAfterSearchString)
                // console.log(valueAfterSearchString); // Output: "fox jumps over the lazy dog"
              }
        }
      )

    .catch((error) => {
      console.error(error);
    });

}

useEffect(() => {
      
    const api_call = async() =>{ await  fetch("https://api.openai.com/v1/completions", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${config.apiKey}`,
      },
      body: JSON.stringify(dataContent),
    })
      .then((response) => {
        return response.json();
        
      }).then((data) => {
          console.log(data);
          console.log(data);
        // setContent(data.choices[0].text)
        // const supAnswer = () =>{
            let searchString = "Answer";
            let index = data.choices[0].text.indexOf(searchString);
            if (index !== -1) {
                let valueAfterSearchString2 = data.choices[0].text.substring(0,index);
                setContent(valueAfterSearchString2)

                let valueAfterSearchString = data.choices[0].text.substring(index + searchString.length + 1);
                setAnswer(valueAfterSearchString)
                // console.log(valueAfterSearchString); // Output: "fox jumps over the lazy dog"
              }
        })
  
      .catch((error) => {
        console.error(error);
      });
    }
      api_call();
    }, []);


const Checkk = () =>{
    console.log("ANS: ",Answer,typeof(Answer), "Input: " ,inputText,typeof(inputText))
    if (inputText.trim() === Answer.trim()){
        setResult('Correct')
        
    }else{
        setResult('Wrong')
    }
        
}

  return (
    <div>
        <div className="blog">
            <h1>Today's Challenge</h1> 
            <div className="featured">
                
                <h2 className='ques'>
                    {content}
                 
                </h2>
                <input className='innn' name="" id="note1"  value={inputText}   onChange={e => setInputText(e.target.value)} ></input> <br />
               <br />
                <button onClick={handleInputChange}>Check</button>
                <br />   
                <h2>
                Result :  {Result}
                </h2>
                <br />
                <button onClick={api_call}>Next Challenge</button>
                
              
            </div>
        </div>
    </div>
  )
}

export default Featured