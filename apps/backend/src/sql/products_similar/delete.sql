DELETE FROM related_products
WHERE
  product_id = ${parentId} AND related_product_id = ${id}
RETURNING
  *