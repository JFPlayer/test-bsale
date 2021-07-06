
//styles
import '../styles/Cart.scss'

//utils
import { getCart } from '../utils/getCart'

//template
import CartProduct from '../templates/CartProduct'
import { updateProductCart } from '../utils/updateProductCart'

//header functions
import './header'

let state = {
  cart: [],
}

const getState = key => {
  return state[key]
}

const setState = (action, payload) => {
  switch (action) {
    case 'set-cart':
      state = {
        ...state,
        cart: payload
      }
      renderProducts()
      break
    default:
      null
  }
}

const actionCart = event => {
  const { action, productId } = event.target.dataset

  if(!action) return;

  updateProductCart(productId, action)
  setState('set-cart', getCart())
}

function renderProducts() {
  const cartList = document.querySelector('#cart-list')
  const fragment = document.createDocumentFragment()

  const products = getState('cart')
  products.forEach(product => {
    fragment.appendChild(CartProduct(product))
  })

  cartList.innerHTML = ''
  cartList.appendChild(fragment)

  cartList.addEventListener('click', actionCart)
}

function main() {
  setState('set-cart', getCart())
}

main()