import './duplicate.css';

import {  useState } from 'react'
import {  Backdrop, Button,CircularProgress } from '@mui/material';

const API_URL='http://localhost:1200'

function TextSummarization(props) {
  const [urlText, setUrlText] = useState("");
  const [article, setArticle] = useState([]);

  //url ='https://mcpress.mayoclinic.org/emotional-health/building-self-esteem-is-an-important-part-of-self-care/'
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
      <div className="textSummarization sentimentAnalysis">
         <h1>Text Summarization</h1>
         <div>Enter text URL</div>
         <div className='urlInput'>
          <label>https://example.com/article/</label>
          <input onChange={(e) => setUrlText(e.target.value)} value={urlText} />
         </div>
         
         <Button onClick={()=> webScrappingPost(urlText)}>Analyze</Button>
         
    
        {
            article?.length > 0 ? (
              <p className="text-medium-emphasis">
              {
                  article[0].summary
              }
              </p>
            ):(
                <p className="text-medium-emphasis"></p>
            )
            
        }
      </div>

  );
}

export default TextSummarization;
