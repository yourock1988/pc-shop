SELECT
  *
FROM
  customers_products
WHERE
  rel_type = 'recomend' AND customer_id = ${parentId}