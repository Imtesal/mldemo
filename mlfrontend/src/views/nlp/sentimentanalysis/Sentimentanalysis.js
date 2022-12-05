import React from 'react'

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CAccordionHeader,
  CRow,
  CAccordion,
  CAccordionBody,
  CAccordionItem,
  CListGroup,
  CCallout,
  CListGroupItem,
  CBadge,
  CContainer
} from '@coreui/react'

import { useEffect, useState } from 'react'

const API_URL='http://localhost:1200'

const Sentimentanalysis = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [sentiment, setSentiment] = useState([]);


  
  const sentimentAnalysisPost = async() =>{
    const response = await fetch(`${API_URL}/sentimentanalysis`, {
      method: "POST",
      body: JSON.stringify({
      s: searchTerm
      })
    });
    const data = await response.json()
    console.log(data);
    setSentiment(data.results)
  }

  useEffect(()=>{
    //textCall();
  })
  return (


    <CContainer className="px-4">
  <CRow xs={{ gutterX: 5 }}>
    <CCol>
    <div className="mb-3"  >
      <h2>Sentiment Analysis</h2>
      <CCallout color="warning">
      Analyze the data in terms of Sentiment including social media,
        questionnaires, customer reviews and even voice.
</CCallout>
      <CFormLabel htmlFor="exampleFormControlTextarea1">Enter text here</CFormLabel>
      <CFormTextarea id="exampleFormControlTextarea1" style={{ width: '100%' }} value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}></CFormTextarea>
    <p></p>
    
    <CButton color='dark' key='0' onClick={()=> sentimentAnalysisPost(searchTerm)}>Analyze</CButton>
    <p></p>
    <CListGroup>
    {
      sentiment.map((d) => (
        
        <CListGroupItem key={1} className="d-flex justify-content-between align-items-center">
          {d.s}
          <CBadge color="primary" shape="rounded-pill">
          {d.sentiment}
          </CBadge>
        </CListGroupItem>
      ))
    }
    </CListGroup>
  </div>
    </CCol>
    
  </CRow>
</CContainer>

  )
}

export default Sentimentanalysis
