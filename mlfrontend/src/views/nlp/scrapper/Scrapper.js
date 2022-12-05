import React from 'react'

import {
  CButton,
  CFormInput,
  CFormLabel,
  CInputGroupText,
  CInputGroup
  
} from '@coreui/react'

import { useEffect, useState } from 'react'

const API_URL='http://localhost:1200'

const Sentimentanalysis = () => {

  const [urlText, setUrlText] = useState("");
  const [article, setArticle] = useState([]);


  const webScrappingPost = async() =>{
    setArticle([]);
    const response = await fetch(`${API_URL}/webscrapper`, {
      method: "POST",
      body: JSON.stringify({
      url: urlText
      })
    });
    const data = await response.json()
    setArticle(data.results)
  }

  
  return (

    
    <div className="mb-3">
      <h2>Web Scrapping</h2>

      
      <CFormLabel htmlFor="basic-url">Enter URL</CFormLabel>
        <CInputGroup className="mb-3">
        <CInputGroupText id="basic-addon3">https://example.com/article/</CInputGroupText>
        <CFormInput id="basic-url" onChange={(e) => setUrlText(e.target.value)} value={urlText} aria-describedby="basic-addon3"/>
    </CInputGroup>      
    <p></p>
    <CButton color='dark' key='0' onClick={()=> webScrappingPost(urlText)}>Fetch</CButton>
    <p></p>

    
    
        {
            article?.length > 0 ? (
             
            <p className="text-medium-emphasis">
            {
                article[0].text
            }
            </p>
            ):(
                <p className="text-medium-emphasis">
                    
            </p>
            )
            
        }
    

  </div>
  )
}

export default Sentimentanalysis
