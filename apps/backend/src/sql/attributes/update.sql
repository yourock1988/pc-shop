UPDATE
  attributes
SET
  key = COALESCE(${key}, key),
  value = COALESCE(${value}, value)
WHERE
  product_id = ${parentId}
RETURNING
  *