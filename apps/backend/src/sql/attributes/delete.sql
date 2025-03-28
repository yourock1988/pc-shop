DELETE FROM attributes
WHERE
  id = ${id}
RETURNING
  *