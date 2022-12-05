import './duplicate.css';
import { useEffect, useState } from 'react'

import {  Backdrop, Button,CircularProgress } from '@mui/material';


function SentimentAnalysis(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sentiment, setSentiment] = useState([]);
  const API_URL='http://localhost:1200'

  const sentimentAnalysisPost = async() =>{
    handleToggle();
    const response = await fetch(`${API_URL}/sentimentanalysis`, {
      method: "POST",
      body: JSON.stringify({
      s: searchTerm
      })
    });
    const data = await response.json()
    console.log(data);
    setSentiment(data.results)
    handleClose();
  }
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="sentimentAnalysis">
         <h1>Sentiment Analysis</h1>
         <p>Analyze the data in terms of sentiment including social media, questionnaires, customer review and even voice.</p>
         <div>Enter text here </div>
         <textarea value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></textarea>
         <Button onClick={()=> sentimentAnalysisPost(searchTerm)}>Analyze</Button>
        <Backdrop  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open} onClick={handleClose} >
          <CircularProgress color="inherit" />
        </Backdrop>

          <br></br>
          <br></br>
          
         <ul class="list-group">
  
  {
      sentiment.map((d) => (
        <li class="list-group-item">{d.s}&nbsp;&nbsp;&nbsp;&nbsp;{d.sentiment}</li>
        
      ))
    }
  
      </ul>
      </div>

    </>
  );
}

export default SentimentAnalysis;
