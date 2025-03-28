DELETE FROM related_products
WHERE
  product_id = ${id} OR related_product_id = ${id};

DELETE FROM photos
WHERE
  product_id = ${id};

DELETE FROM attributes
WHERE
  product_id = ${id};

DELETE FROM products
WHERE
  id = ${id}
RETURNING
  *