import axios from 'axios'

export const getProductById = async id => {
  return (await axios.get(`/api/products/${id}`)).data.body
}
