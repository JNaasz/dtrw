import home from './home.json';

function getContent(page) {
  console.log('page selection in content:', page);
  switch (page) { 
    case 'home': return home;
    default: return home;
  }
}

export default getContent;