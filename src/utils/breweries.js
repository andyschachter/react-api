import fetchApiData from '../actions/manufacturers'

export const fetchData = async () => {
  const data = await fetchApiData()

  return data
}

export const filtered = (breweryData, searchTerm) => breweryData.filter(brewery => {
  return brewery.name.toLowerCase().includes(searchTerm.toLowerCase())
})