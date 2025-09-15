import express from "express";

const app = express();
app.use(express.json());

// Mock data
const customers = [
  { id: 1, name: "Alice Smith", email: "alice@example.com" },
  { id: 2, name: "Bob Johnson", email: "bob@example.com" },
];

// Routes
app.get("/customers", (req, res) => {
  res.json(customers);
});

app.get("/customers/:id", (req, res) => {
  const customer = customers.find(c => c.id === Number(req.params.id));
  if (!customer) return res.status(404).json({ error: "Customer not found" });
  res.json(customer);
});

// Start server
const PORT = process.env.PORT || 4002;
app.listen(PORT, () => {
  console.log(`Customer service running on port ${PORT}`);
});
