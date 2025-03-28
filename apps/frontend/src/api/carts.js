import sendRequest from './sendRequest'

const { APP_ORIGIN } = process.env
const url = `${APP_ORIGIN}/api/v0/customers/3/carts/`

export async function getCarts() {
  const response = await sendRequest(url)
  return response.payload
}

export async function getCartById(id) {
  const response = await sendRequest(url + id)
  return response.payload
}

export async function postCart(cart) {
  const response = await sendRequest(url, 'POST', cart)
  return response.payload
}

export async function patchCartById(id, cart) {
  const response = await sendRequest(url + id, 'PATCH', cart)
  return response.payload
}

export async function deleteCartById(id) {
  const response = await sendRequest(url + id, 'DELETE')
  return response
}

// getCarts().then(console.log)
// getCartById(58).then(console.log)
// postCart({ productId: 13 })
// patchCartById(22, { productId: 11 })
// deleteCartById(22)
