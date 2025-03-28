UPDATE
  customers_products
SET
  product_id = COALESCE(${productId}, product_id)
WHERE
  rel_type = 'compare' AND customer_id = ${parentId} AND product_id = ${id}
RETURNING
  *