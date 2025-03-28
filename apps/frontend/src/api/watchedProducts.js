import normalizeProducts from './utils/normalizeProducts'
import sendRequest from './sendRequest'
import { getProductById } from './products'
import auth from './auth'

const { APP_ORIGIN } = process.env
const url = `${APP_ORIGIN}/api/v0/customers/3/watched/`

export async function getWatchedProducts() {
  const responce = await getWatchedProductsDraft()
  const promises = responce.map(wp => getProductById(wp.productId))
  const watchedProducts = await Promise.all(promises)
  const normalizedProducts = normalizeProducts(watchedProducts)
  return normalizedProducts
}

export async function getWatchedProductsDraft() {
  await auth()
  const response = await sendRequest(url)
  return response.payload
}

export async function getWatchedProductById(id) {
  await auth()
  const response = await sendRequest(url + id)
  return response.payload
}

export async function postWatchedProduct(watchedProduct) {
  await auth()
  const response = await sendRequest(url, 'POST', watchedProduct)
  return response.payload
}

export async function patchWatchedProductById(id, watchedProduct) {
  await auth()
  const response = await sendRequest(url + id, 'PATCH', watchedProduct)
  return response.payload
}

export async function deleteWatchedProductById(id) {
  await auth()
  const response = await sendRequest(url + id, 'DELETE')
  return response
}
