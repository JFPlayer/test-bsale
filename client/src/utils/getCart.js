
export const getCart = () => {
  const products = localStorage.getItem('productsCart')
  if(!products) return []
  return JSON.parse(products)
}
