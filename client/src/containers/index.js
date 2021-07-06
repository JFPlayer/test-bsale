//templates
import Product from '../templates/Product'
import Pagination from '../templates/Pagination'

// styles
import '../styles/Home.scss'

//utils
import { getProducts } from '../utils/getProducts'
import { getCart } from '../utils/getCart'
import { addProductToCart } from '../utils/addProductToCart'

//header functions
import './header.js'

const catalogList = document.querySelector('#catalog-list')
const paginationContainer = document.querySelector('#pagination-container')

let state = {
  products: [],
  page: 1,
  search: '',
  cart: [],
  totalPages: 0,
  timeoutId: null,
}

function getState(key) {
  return state[key]
}

function setState(action, payload) {

  switch (action) {
    case 'set-products':
      state = {
        ...state,
        products: payload.products,
        totalPages: payload.totalPages,
      }
      renderProducts()
      break
    case 'set-timeoutId':
      state = {
        ...state,
        timeoutId: payload
      }
      break
    case 'set-page':
      state = {
        ...state,
        page: payload
      }
      break
    case 'set-search':
      state = {
        ...state,
        search: payload
      }
      getProductsBySearch()
      break
    case 'update-cart':
      addProductToCart(payload)
      state = {
        ...state,
        cart: getCart()
      }
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

const changePage = (event) => {
  const page = event.target.dataset.page || event.target.parentNode.dataset.page
  let changePage = false
  const currentPage = getState('page')
  const totalPages = getState('totalPages')
  
  if(page === 'back' && currentPage > 1) {
    setState('set-page', currentPage - 1)
    changePage = true
  }
  
  if(page === 'forward' && currentPage < totalPages) {
    setState('set-page', currentPage + 1)
    changePage = true
  }
  
  if(page > 0 && page <= totalPages && page != currentPage) {
    setState('set-page', page)
    changePage = true
  }

  if(changePage) {
    getProductsBySearch()
    window.scrollTo(0, 0)
  }
}

const addCart = (event) => {
  const action = event.target.dataset.action || event.target.parentNode.dataset.action
  if(action === 'add-cart') {
    const data = {
      name: event.target.dataset.productName || event.target.parentNode.dataset.productName,
      productId: event.target.dataset.productId || event.target.parentNode.dataset.productId,
      category: event.target.dataset.productCategory || event.target.parentNode.dataset.productCategory,
      src: event.target.dataset.productSrc || event.target.parentNode.dataset.productSrc,
      price: event.target.dataset.productPrice || event.target.parentNode.dataset.productPrice,
      discount: event.target.dataset.productDiscount || event.target.parentNode.dataset.productDiscount,
    }
    setState('update-cart', data)
  }
}

const renderProducts = () => {
  const fragment = document.createDocumentFragment()
  getState('products').forEach(product => {
    const data = {
      productId: product.id,
      src: product.url_image,
      name: product.name,
      category: product.Category.name,
      price: product.price,
      discount: product.discount,
    }
    fragment.appendChild(Product(data))
  })
  catalogList.innerHTML = ''
  catalogList.append(fragment)
  catalogList.addEventListener('click', addCart)

  paginationContainer-addEventListener('click', changePage)
  paginationContainer.innerHTML = ''
  paginationContainer.appendChild(Pagination(getState('totalPages')))
}

function getProductsBySearch() {
  const page = getState('page')
  const search = getState('search')
  getProducts(`/api/products?limit=10&page=${page}&search=${search}`)
    .then(({ products, total }) => {
      setState('set-products', { products, totalPages: Math.ceil(total / 10) })
    })
    .catch(() => {
      setState('set-products', { products: [], totalPages: 0 })
    })
}


function onChangeSearchBar(event) {
  const { value } = event.target
  clearTimeout(getState('timeoutId'))
  
  const timeoutId = setTimeout(() => {
    setState('set-search', value)
  }, 1000)
  setState('set-timeoutId', timeoutId)
}


function main() {
  getProductsBySearch()
  const products = getCart()
  if(products.length) setState('set-cart', products)

  //listener search bar
  const searchBar = document.querySelector('#search-bar')
  searchBar.addEventListener('input', onChangeSearchBar)
}

main()