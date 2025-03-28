SELECT
  *
FROM
  customers_products
WHERE
  rel_type = 'cart' AND customer_id = ${parentId}