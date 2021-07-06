import axios from 'axios'

export const getProducts = async (url) => {
  const { data } = await axios.get(url)

  return {
    products: data.body.rows,
    total: data.body.count,
  }
}