import './Event.scss';

function Event({details}) {
  console.log('content in event', details);
  return (
    <div className='event'>
      <div className='event-header'>{details.title}</div>
      <div className='event-body'>{details.body}</div>
    </div>
  )
}

export default Event;