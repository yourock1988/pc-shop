UPDATE
  leads
SET
  advisor_id = COALESCE(${advisorId}, advisor_id)
WHERE
  id = ${id}
RETURNING
  *
