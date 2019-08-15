const router = require("express").Router();

router.get("/", async (req, res) => {
  res.status(200).json({ message: "It's working. IT'S WORKING" });
});

router.get("/:id/shoppingList", async (req, res) => {});

router.get("/:id/instructions", async (req, res) => {});

router.get("/:id/recipes", async (req, res) => {});

module.exports = router;
