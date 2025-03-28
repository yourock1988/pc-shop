SELECT
  *
FROM
  customers_products
WHERE
  rel_type = 'compare' AND customer_id = ${parentId}