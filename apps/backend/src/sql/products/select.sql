SELECT
  pr.id,
  pr.price,
  pr.caption,
  pr.description,
  c.caption AS category,
  json_object_agg (COALESCE(a.key, ''), COALESCE(a.value, '')) AS attributes,
  (
    SELECT
      json_agg (
        COALESCE(ph.uri, '')
        ORDER BY
          ph.id
      )
    FROM
      photos ph
    WHERE
      ph.product_id = pr.id
  ) AS photos
FROM
  products pr
  LEFT JOIN categories c ON c.id = pr.category_id
  LEFT JOIN attributes a ON a.product_id = pr.id
GROUP BY
  pr.id,
  c.caption
ORDER BY
  pr.id;