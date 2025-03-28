const sortFnExpensiveFirst = ({ price }, { price: prev }) => prev - price
const sortFnCheapFirst = ({ price }, { price: prev }) => price - prev
const sortFnIdHightLow = ({ id }, { id: prev }) => prev - id
const sortFnIdLowHight = ({ id }, { id: prev }) => id - prev
const sortFnRandomize = () => Math.random() - 0.5

const expensiveFirst = products => products.toSorted(sortFnExpensiveFirst)
const cheapFirst = products => products.toSorted(sortFnCheapFirst)
const idHightLow = products => products.toSorted(sortFnIdHightLow)
const idLowHight = products => products.toSorted(sortFnIdLowHight)
const randomize = products => products.toSorted(sortFnRandomize)

const sortingMethods = {
  expensiveFirst,
  cheapFirst,
  idHightLow,
  idLowHight,
  randomize,
}

function sortProducts(products, sortingType) {
  if (sortingType in sortingMethods) {
    return sortingMethods[sortingType](products)
  }
  // throw new Error('Sorting Error: wrong sortingType')
  return products
}

export default sortProducts
