import express from "express";

const app = express();
app.use(express.json());

const invoices = [
  { id: 1, customerId: 1, amount: 120.5, status: "paid" },
  { id: 2, customerId: 2, amount: 300.0, status: "unpaid" },
];

app.get("/invoices", (req, res) => {
  res.json(invoices);
});

app.get("/invoices/:id", (req, res) => {
  const invoice = invoices.find(i => i.id === Number(req.params.id));
  if (!invoice) return res.status(404).json({ error: "Invoice not found" });
  res.json(invoice);
});

const PORT = process.env.PORT || 4003;
app.listen(PORT, () => {
  console.log(`Billing service running on port ${PORT}`);
});
