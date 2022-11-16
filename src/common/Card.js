import './Card.scss';

import Event from './Event';

function Card({ content, className }) {
  console.log('content', content);
  const cardContent = content.content.type === 'event'
    ? <Event details={content.content.details} />
    : content.content.type === 'image'
      ? <img style={{ backgroundImage: `url(${content.content.details})` }} />
      : '';
  return (
    <div className={`card ${className ?? ''}`}>
      <div className="card-details">
        <h4>{content.title}</h4>
        <h6>{content.subtitle}</h6>
        <p className="card-body">{content.body}</p>
      </div>
      <div className="card-content">
        { cardContent }
      </div>
    </div>
  )
}

export default Card;