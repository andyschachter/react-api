import axios from 'axios'

const fetchData = async () => {
  const { data } = await axios.get('http://localhost:1344/api/brewery/')

  return data
}

export default fetchData