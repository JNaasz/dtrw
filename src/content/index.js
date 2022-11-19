import home from './home.json';

function getContent(page) {
  console.log('page selection in content:', page);
  switch (page) { 
    case 'home': return home;
    case 'calendar': return {};
    default: return home;
  }
}

export default getContent;