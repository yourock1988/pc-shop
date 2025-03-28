INSERT INTO photos
  (uri, product_id)
VALUES
  (${uri}, ${parentId})
RETURNING
  *