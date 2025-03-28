INSERT INTO products
  (price, caption, description, created_at, updated_at, category_id)
VALUES
  (${price}, ${caption}, ${description}, NOW(), NOW(),
    (SELECT id FROM categories WHERE caption = ${category}))
RETURNING
  *