function normalizeProducts(products) {
  const clonedProducts = structuredClone(products)

  clonedProducts.forEach(p => {
    const pattern = {
      'Частота процессора': [[' Ghz', 'Ghz']],
      'Блок питания': [['P', '']],
      'Материнская плата': [
        ['AsRock', 'ASRock'],
        ['LGA1200', 'LGA'],
        ['LGA1700', 'LGA'],
      ],
      Процессор: [
        ['LGA1700', 'LGA'],
        ['INTEL', 'Intel'],
      ],
    }

    Object.entries(pattern).forEach(([key, val]) => {
      if (p.attributes?.[key]) {
        val.forEach(v => {
          p.attributes[key] = p.attributes?.[key]?.replace(v[0], v[1])
        })
      }
    })
  })

  return clonedProducts
}

export default normalizeProducts
