import styles from './index.scss';

import Pages from './Pages';

function header(props) {
  return (
    <div className="header">
      <div className="left-item">DTRW</div>
      <Pages pages={props.pages} changePageHandler={props.changePageHandler} className={styles.pages} currentPage={props.currentPage} />
    </div>
  );
}

export default header;