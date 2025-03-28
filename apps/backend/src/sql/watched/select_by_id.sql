SELECT
  *
FROM
  customers_products
WHERE
  rel_type = 'watched' AND customer_id = ${parentId} AND product_id = ${id}