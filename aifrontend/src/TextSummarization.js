import './duplicate.css';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
function TextSummarization(props) {
  return (
      <div className="textSummarization sentimentAnalysis">
         <h1>Text Summarization</h1>
         <div>Enter text URL</div>
         <div className='urlInput'>
          <label>https://example.com/article/</label>
          <input />
         </div>
         <button>Analyze</button>
      </div>

  );
}

export default TextSummarization;
