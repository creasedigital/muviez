const configureListName = (slug: string) => {
  const slugger = slug.split('-');
  return `${slugger[0]} & ${slugger[2]}`
}

export default configureListName;