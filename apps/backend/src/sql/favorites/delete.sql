DELETE FROM customers_products
WHERE
  rel_type = 'favorite' AND customer_id = ${parentId} AND product_id = ${id}
RETURNING
  *