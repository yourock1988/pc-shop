SELECT
  *
FROM
  customers
  JOIN users USING (id)
WHERE
  id = ${id}