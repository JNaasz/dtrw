import './index.scss';

import Card from '../common/Card';

function Home(props) {
  return (
    <div className="body">
      <div className="behind">
      </div>
      <div className="body-content">
        <div className="image">
          <img src="/whiteLarge.png" />
        </div>
        <div className="body-cards">
          {
            props.content.map((content, i) => {
              return <Card content={content} key={content.title} className={`${i === 0 ? 'transparent' : ''} n${i}`} />
            })
          }
        </div>
      </div>
    </div>

  );
}

export default Home;