UPDATE
  users u
SET
  password = COALESCE(${password}, password),
  phone = COALESCE(${phone}, phone),
  email = COALESCE(${email}, email),
  first_name = COALESCE(${firstName}, first_name),
  second_name = COALESCE(${secondName}, second_name),
  updated_at = NOW()
FROM customers c
  WHERE u.id = c.id AND c.id = ${id}
RETURNING
  *