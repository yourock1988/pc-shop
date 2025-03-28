UPDATE
  photos
SET
  uri = COALESCE(${uri}, uri)
WHERE
  product_id = ${parentId}
RETURNING
  *