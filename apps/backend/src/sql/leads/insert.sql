INSERT INTO leads
  (payment_type, fixed_cost, created_at, customer_id, advisor_id)
VALUES
  (${paymentType}, ${fixedCost}, NOW(), ${customerId}, ${advisorId})
RETURNING
  *