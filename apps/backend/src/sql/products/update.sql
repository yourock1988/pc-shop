UPDATE
  products
SET
  caption = COALESCE(${caption}, caption),
  description = COALESCE(${description}, description),
  price = COALESCE(${price}, price)
WHERE
  id = ${id}
RETURNING
  *