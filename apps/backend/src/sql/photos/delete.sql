DELETE FROM photos
WHERE
  id = ${id}
RETURNING
  *