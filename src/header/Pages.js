function Pages(props) {
  const onPageSelection = (pageSelected) => {
    console.log('hiya', pageSelected);
    props.changePageHandler(pageSelected);
  }

  return (
    <ul className="pages">
      {
        props.pages.map(page => {
          return (
            <li key={page.key} onClick={() => onPageSelection(page.key)} className={props.currentPage === page.key ? 'active' : '' } >
              {page.title}
            </li>
          );
        })
      }
    </ul>
  );
}

export default Pages;