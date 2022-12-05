
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

function Card(props) {
  return (
    <div className="single-services-box">
      <div className="icon">
        <FontAwesomeIcon icon={props.icon} className="faHouse"/>
        <h3><a className='cardHref' href="/service-details/">{props.title}</a></h3>
      </div>
      <p className='cardp'>{props.description}</p>
      <a className="button" onClick={props.onDemoClick}>Demo</a>
    </div>
  );
}

export default Card;
