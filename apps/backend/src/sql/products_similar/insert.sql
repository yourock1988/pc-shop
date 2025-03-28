INSERT INTO related_products
  (product_id, related_product_id)
VALUES
  (${parentId}, ${relatedProductId})
RETURNING
  *