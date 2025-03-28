INSERT INTO customers_products
  (customer_id, product_id, rel_type)
VALUES
  (${parentId}, ${productId}, 'compare')
RETURNING
  *