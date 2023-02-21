import React from 'react'
import { api_config } from '../api_config'
import { useState, useEffect } from 'react'
import config from '../../config.json'

const Latest = () => {
  
  const [content, setContent] = useState("")
  const [Answer, setAnswer] = useState()
  const [Result, setResult] = useState('-')
  const [inputText, setInputText] = useState('');
  const [data1, setData1] = useState([]);




  // const setStuffFirst = async () => {
  //   const jumbledArray = data1.sort(() => Math.random() - 0.5);
  //   setData1(jumbledArray)
  //   console.log(data1);
  //       setContent(data1[0].question)
  //       setAnswer(data1[0].answer)

  // }

  const api_call = async () => {

    let d1 = await fetch("http://0.0.0.0:3000/blogs");
    let d2 = await d1.json();
    setContent(d2[0].text);
    console.log(d2[0].text);
    // console.log(content);

  }


  useEffect(() => {
    api_call();
  }, []);




  return (
    <div>
      <div className="blog">
        <h1>A blog about painter</h1>
        <div className="featured">

          <p className='ques'>
            {content}
        
          </p>


        </div>
      </div>
    </div>
  )
}

export default Latest