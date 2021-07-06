
//styles
import '../styles/Products.scss'

//header functions
import './header'

//utils
import { getProductById } from '../utils/getProductById'
import { addProductToCart } from '../utils/addProductToCart'
import { getCart } from '../utils/getCart'

let state = {
  product: {},
  cart: [],
}

const getState = key => {
  return state[key]
}

const setState = (action, payload) => {
  switch (action) {
    case 'set-product':
      state = {
        ...state,
        product: payload
      }
      renderProduct(state.product)
      break
    case 'set-cart':
      state = {
        ...state,
        cart: [...state.cart, payload]
      }
      break
    default:
      null
  }
}

const renderProduct = ({ src, name, discount, price, category}) => {
  //product__image
  const productImage = document.querySelector('#product-image')
  //product__image img
  let productImageImgElement

  if(src) {
    productImageImgElement = document.createElement('img')
    productImageImgElement.src = src
    productImageImgElement.alt = name
  }else {
    productImageImgElement = document.createElement('div')
    productImageImgElement.innerText = 'NO IMAGE'
  }

  productImage.appendChild(productImageImgElement)
  //product__title
  const productTitle = document.querySelector('#product-title')
  //product__title h1 h2
  const productTitleH1 = document.createElement('h1')
  const productTitleH2 = document.createElement('h2')
  productTitleH1.innerText = name
  productTitleH2.innerText = category
  productTitle.append(productTitleH1, productTitleH2)
  //price-discount price-total
  const productDiscount = document.querySelector('#price-discount')
  const productTotal = document.querySelector('#price-total')
  const priceTotal = discount ? (100 - discount) * price : price 
  productDiscount.innerHTML = discount ? `$${price.toLocaleString('de-DE')}` : ' '
  productTotal.innerHTML = `$${priceTotal.toLocaleString('de-DE')}`
}


const addProduct = () => {
  const product = getState('product')
  const data = {
    category: product.category,
    name: product.name,
    productId: product.productId,
    price: product.price,
    discount: product.discount,
    src: product.src,
    quantity: 1,
  }
  addProductToCart(data)
}


async function main() {
  //get productId from URL 
  const productId = new URLSearchParams(window.location.search)
  .get("productId")

  const products = getCart()
  if(products.length) setState('set-cart', products)
  
  try {
    const product = await getProductById(productId)
    
    const data = {
      src: product.url_image,
      name: product.name,
      price: product.price,
      discount: product.discount,
      category: product.Category.name,
      productId: product.id + '',
    }
    
    setState('set-product', data)

    const buttonCart = document.querySelector('.product__cart')
    buttonCart.addEventListener('click', addProduct)
    
  } catch (error) {
    const productContainer = document.querySelector('.product__container')
    productContainer.innerText = "PRODUCT NOT FOUND"
  }
}

main()