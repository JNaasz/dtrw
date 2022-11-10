import { useState } from 'react';

import logo from './logo.svg';
import './App.scss';

import Header from './header/index';

function App() {
  const pages = [
    { key: 'home', title: 'Home' },
    { key: 'maps', title: 'Route Maps' },
    { key: 'calendar', title: 'Calendar' },
    { key: 'resources', title: 'Local Resources' },
    { key: 'volunteer', title: 'Volunteer' },
    { key: 'contact', title: 'Contact' }
  ];

  const [currentPage, changePage] = useState('home');
  function onChangePage(pageSelected) {
    // changePage(previousPage => {
    changePage(pageSelected);
    // });
  }

  return (
    <div className="App">
      <Header pages={pages} changePageHandler={onChangePage} currentPage={currentPage} />
      <div className="content">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {
            pages.find(p => p.key === currentPage).title
          }
        </p>
      </div>
    </div>
  );
}

export default App;

/*

header with logo and links - eventually add routing for this? easier to share etc.
body
footer
 */
