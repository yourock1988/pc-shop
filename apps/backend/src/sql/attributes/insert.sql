INSERT INTO attributes
  (key, value, product_id)
VALUES
  (${key}, ${value}, ${parentId})
RETURNING
  *