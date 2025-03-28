UPDATE
  related_products
SET
  related_product_id = COALESCE(${relatedProductId}, related_product_id)
WHERE
  product_id = ${parentId} AND related_product_id = ${id}
RETURNING
  *