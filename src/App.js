import { useState } from 'react';

import './common/variables.scss';
import './App.scss';
import Header from './header/index';
import Home from './home';

import getContent from './content';

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

  const content = getContent(currentPage);

  return (
    <div className="App">
      <Header pages={pages} changePageHandler={onChangePage} currentPage={currentPage} />
      <div className="content">
        <Home content={content}  />
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



