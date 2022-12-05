import React from 'react'

import {
  CButton,
  CCard,
  CCardBody,
  CCardText,
  CCardImage,
  CCardTitle,
  CContainer,
  CRow,
  CCol

} from '@coreui/react'


import SummarizationIcon from "../../assets/images/lightred.jpeg";
import ChatbotIcon from "../../assets/images/skyblue.png";
import ReactIcon from "../../assets/images/react.jpg";


const Dashboard = () => {
  return (
  <>  
  
  <CContainer>
  <CRow xs={{ cols: 4 }}>
    <CCol><CCard style={{ width: '17rem' }}>
  <CCardImage orientation="top" src={ReactIcon} />
  <CCardBody>
    <CCardTitle>Sentiment Analysis</CCardTitle>
    <CCardText>
      Understand the sentiment of the customer and make informed business decisions.
    </CCardText>
    <CButton color='light' shape="rounded-pill" href="#/nlp/sentimentanalysis">Demo</CButton>
  </CCardBody>
  </CCard></CCol>
  
    <CCol><CCard style={{ width: '17rem' }}>
  <CCardImage orientation="top" src={SummarizationIcon}  />
  <CCardBody>
    <CCardTitle>Text Summarization</CCardTitle>
    <CCardText>
    Reduce the text size and create a summary of our textual data for business advantage.
    </CCardText>
    <CButton color='light' shape="rounded-pill" href="#/nlp/summarization">Demo</CButton>
  </CCardBody>
  </CCard></CCol>

  <CCol><CCard style={{ width: '17rem' }}>
  <CCardImage orientation="top" src={ChatbotIcon} />
  <CCardBody>
    <CCardTitle>Topic Modelling</CCardTitle>
    <CCardText>
    Generate topics from text to make it more searchable and identify critical moments in text.  
    </CCardText>
    <CButton color='light' shape="rounded-pill" href="#/nlp/topicmodelling">Demo</CButton>
  </CCardBody>
  </CCard></CCol>

  <CCol><CCard style={{ width: '17rem' }}>
  <CCardImage orientation="top" src={ReactIcon} />
  <CCardBody>
    <CCardTitle>Web Scrapping</CCardTitle>
    <CCardText>
    Scrape data from any website at scale and accuracy using best in class open source technology 
    </CCardText>
    <CButton color='light' shape="rounded-pill" href="#/nlp/scrapper">Demo</CButton>
  </CCardBody>
  </CCard></CCol>

  
    
  </CRow>
</CContainer>
  </>  
    
  )
}

export default Dashboard
