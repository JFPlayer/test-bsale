import { getCart } from './getCart'

export const addProductToCart = newProduct => {
  const products = getCart()
  let isRepeated = false

  const updatedCart = products.map(product => {
    if(product.productId === newProduct.productId){
      isRepeated = true
      return {
        ...product,
        quantity: product.quantity + 1
      }
    }
    return product
  })
  
  if(!isRepeated) {
    updatedCart.push({
      ...newProduct,
      quantity: 1,
    })
  }

  localStorage.setItem('productsCart', JSON.stringify(updatedCart))
}
