DELETE FROM customers
WHERE
  id = ${id};

DELETE FROM users
WHERE
  id = ${id}
RETURNING
  *