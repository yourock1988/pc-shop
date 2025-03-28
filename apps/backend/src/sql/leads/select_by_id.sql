SELECT
  l.id,
  l.payment_type,
  l.fixed_cost,
  l.created_at,
  l.customer_id,
  l.advisor_id,
  json_agg (p.id) AS products_id
FROM
  leads l
  LEFT JOIN products_leads pl ON pl.leads_id = l.id
  LEFT JOIN products p ON p.id = pl.products_id
WHERE
  l.id = ${id}
GROUP BY
  l.id