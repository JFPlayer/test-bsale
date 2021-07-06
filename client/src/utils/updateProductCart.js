import { getCart } from "./getCart"

export const updateProductCart = (productId, action) => {
  const products = getCart()

  const updatedCart = products.map(product => {
    if(product.productId === productId) {
      return {
        ...product,
        quantity: action === 'add' ? product.quantity + 1 : product.quantity - 1
      }
    }
    return product
  })
  .filter(({quantity}) => quantity)

  localStorage.setItem('productsCart', JSON.stringify(updatedCart))
}
