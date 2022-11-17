import './index.scss';
import '../common/parallax.scss';

import Card from '../common/Card';

function Home(props) {
  return (
    <div className="body parallax">
      <div className="behind parallax__layer--back"></div>
      <div className="body-content parallax__layer--base">
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