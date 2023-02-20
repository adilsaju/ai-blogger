// import React from 'react'
// import { useState } from 'react';




// const api_config = async() =>{

//     const [datacontent, setContent] = useState('')

//     const dataContent = {
    
//         model: "text-davinci-003",
//         prompt: "write an article on ant man in MCU",
//         max_tokens: 1024,
//         temperature: 0,
//       };
    


// const api_call = await  fetch("https://api.openai.com/v1/completions", {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": `Bearer ${apiKey}`,
//     },
//     body: JSON.stringify(dataContent),
//   })
//     .then((response) => {
//       return response.json();
      
//     })
//     .then((data) => {
//       console.log("content")
//       console.log(data.choices[0].text);
//       setContent(data.choices[0].text)
//     })
//     .catch((error) => {
//       console.error(error);
//     });

//     return (
//         <div>
//             <div className="blog">
//                 <h1>Featured</h1> 
//                 <div className="featured">
                    
//                 </div>
//             </div>
//         </div>
//       )
// }

// export default api_config
