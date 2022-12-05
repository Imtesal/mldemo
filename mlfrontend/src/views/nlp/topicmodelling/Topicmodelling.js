import React from 'react'

import {
  CButton,
  CCol,  
  CFormLabel,
  CFormTextarea,
  CRow,
  CListGroup,
  CCallout,
  CListGroupItem,
  CBadge,
  CContainer
} from '@coreui/react'

import { useEffect, useState } from 'react'

const API_URL='http://localhost:1200'

const Topicmodelling = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [sentiment, setSentiment] = useState([]);


  
  const sentimentAnalysisPost = async() =>{
    const response = await fetch(`${API_URL}/topicmodelling`, {
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
      <h2>Topic Modelling</h2>
      <CCallout color="warning">
      Generate key topics from text by and identify critical moments in unstructured textual/audio data.
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

export default Topicmodelling
