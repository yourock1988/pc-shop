WITH inserted_id AS (
  INSERT INTO users
    (password, phone, email, role, first_name, second_name, created_at, updated_at)
  VALUES
    (${password}, ${phone}, ${email}, 'customer', ${firstName}, ${secondName}, NOW(), NOW())
  RETURNING
  *
)

INSERT INTO customers (id)
SELECT id
FROM inserted_id
RETURNING *

-- INSERT INTO users
--   (password, phone, email, role, first_name, second_name, created_at, updated_ad)
-- VALUES
--   (${password}, ${phone}, ${email}, 'advisor', ${firstName}, ${secondName}, NOW(), NOW());
-- RETURNING id

-- INSERT INTO customers
--   (id)
-- VALUES
--   (${id})
-- RETURNING id