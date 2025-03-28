DELETE FROM products_leads
WHERE
  leads_id = ${id};

DELETE FROM leads
WHERE
  id = ${id}
RETURNING
  *