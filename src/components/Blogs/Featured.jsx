import React from 'react'
import { api_config } from '../api_config'
import { useEffect, useState } from 'react'
import config from '../../config.json'

const Featured = () => {

  const [content, setContent] = useState([])
  const [Answer, setAnswer] = useState()
  const [Result, setResult] = useState('-')
  const [inputText, setInputText] = useState('');
  const [data1, setData1] = useState([]);


  function handleInputChange() {
    // setInputText(parseInt(event.target.value));
    Checkk()
  }

  const setStuffFirst = async () => {
    const jumbledArray = data1.sort(() => Math.random() - 0.5);
    setData1(jumbledArray)
    console.log(data1);
        setContent(data1[0].question)
        setAnswer(data1[0].answer)

  }

  const api_call = async () => {

    let d1 = await fetch("http://0.0.0.0:3000/questions");
    let d2 = await d1.json();
    let data = d2;
    setData1(data);
    // console.log(data);
    const jumbledArray = data.sort(() => Math.random() - 0.5);
    setData1(jumbledArray)
    console.log(jumbledArray);
        setContent(jumbledArray[0].question)
        setAnswer(jumbledArray[0].answer)

    // await setStuffFirst();


  }


  useEffect(() => {




    api_call();
  }, []);


  const Checkk = () => {
    console.log("ANS: ", Answer, typeof (Answer), "Input: ", inputText, typeof (inputText))
    if (inputText.trim() === Answer.trim()) {
      setResult('Correct')

    } else {
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
          <input className='innn' name="" id="note1" value={inputText} onChange={e => setInputText(e.target.value)} ></input> <br />
          <br />
          <button onClick={handleInputChange}>Check</button>
          <br />
          <h2>
            Result :  {Result}
          </h2>
          <br />
          <button onClick={setStuffFirst}>Next Challenge</button>


        </div>
      </div>
    </div>
  )
}

export default Featured