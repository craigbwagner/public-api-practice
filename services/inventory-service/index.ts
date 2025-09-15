import express from "express";

const app = express();
app.use(express.json());

// Mock data
const items = [
  { id: 1, name: "Excavator", available: true },
  { id: 2, name: "Forklift", available: false },
  { id: 3, name: "Scissor Lift", available: true },
];

// Routes
app.get("/items", (req, res) => {
  res.json(items);
});

app.get("/items/:id", (req, res) => {
  const item = items.find(i => i.id === Number(req.params.id));
  if (!item) return res.status(404).json({ error: "Item not found" });
  res.json(item);
});

// Start server
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Inventory service running on port ${PORT}`);
});
