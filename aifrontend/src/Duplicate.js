import './duplicate.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
function Duplicate(props) {
  return (
    <>
      <h1 className='duplicateHeading'>
      
         Duplicate Records Detector Through Machine Learning - Proof Of Concept 
        </h1>
      <div className="duplicateBox">
        <div className="left">
          <div className="content">
          <div className="header">
                <button>Find Duplicates With Selected % Accuracy</button>
                <button>%</button>
                <button>All or Top count</button>
              </div>
            <div className="leftContent">
              <h5>Select From The Data Uploaded </h5>
              <div className="selectBox">
                <select>
                  <option>Selct Full Name</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  <option>Option 4</option>
                  <option>Option 5</option>
                </select>
                <select>
                  <option>Selct First Name</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  <option>Option 4</option>
                  <option>Option 5</option>
                </select>
                <select>
                  <option>Selct Last Name</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  <option>Option 4</option>
                  <option>Option 5</option>
                </select>
                <select>
                  <option>Selct Address</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  <option>Option 4</option>
                  <option>Option 5</option>
                </select>
                <select>
                  <option>Selct Phone</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  <option>Option 4</option>
                  <option>Option 5</option>
                </select>
                <select>
                  <option>Selct Postcode</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  <option>Option 4</option>
                  <option>Option 5</option>
                </select>
              </div>
            </div>
            <div className="rightContent">
             
              <h5>Or Enter Record to detect duplicity: </h5>
              <div className="inputBox">
                <input name="file-upload-field" type="text" className="input" placeholder="Enter Name" />
                <input name="file-upload-field" type="text" className="input" placeholder="Enter First Name" />
                <input name="file-upload-field" type="text" className="input" placeholder="Enter Last Name" />
                <input name="file-upload-field" type="text" className="input" placeholder="Enter Address " />
                <input name="file-upload-field" type="text" className="input" placeholder="Enter Phone" />
                <input name="file-upload-field" type="text" className="input" placeholder="Enter Postcode" />
              </div>
              <div className='bottom'>

                <button>Reset</button>
                <button>Detect</button>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <h5>Outcome</h5>
          <table className="rwd-table">
            <tbody>
              <tr>
                <th>Record Found</th>
                <th>Accuracy %</th>

              </tr>
              <tr>
                <td data-th="Supplier Code">
                  32
                </td>
                <td data-th="Supplier Name">
                  4%
                </td>
              </tr>
              <tr>
                <td data-th="Supplier Code">
                  32
                </td>
                <td data-th="Supplier Name">
                  4%
                </td>
              </tr>
              <tr>
                <td data-th="Supplier Code">
                  32
                </td>
                <td data-th="Supplier Name">
                  4%
                </td>
              </tr>
              <tr>
                <td data-th="Supplier Code">
                  32
                </td>
                <td data-th="Supplier Name">
                  4%
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Duplicate;
