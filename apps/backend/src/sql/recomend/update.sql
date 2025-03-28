UPDATE
  customers_products
SET
  product_id = COALESCE(${productId}, product_id)
WHERE
  rel_type = 'recomend' AND customer_id = ${parentId} AND product_id = ${id}
RETURNING
  *