import styles from './index.scss';

import Pages from './Pages';

function header(props) {
  return (
    <div className="header">
      <img src="/whiteLarge.png" />
      <Pages pages={props.pages} changePageHandler={props.changePageHandler} className={styles.pages} currentPage={props.currentPage} />
    </div>
  );
}

export default header;