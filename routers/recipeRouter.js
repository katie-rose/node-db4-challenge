const router = require("express").Router();
const db = require("../data/models/recipeBookModel");

router.get("/", async (req, res) => {
  res.status(200).json({ message: "It's working. IT'S WORKING" });
});

router.get("/:id/shoppingList", async (req, res) => {
  const { id } = req.params;
  try {
    const list = await db.getShoppingList(id);
    if (!list) {
      res.status(404).json({
        message: `No ingredients for recipe with id ${id}.`
      });
    } else {
      res.status(200).json(list);
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.get("/:id/instructions", async (req, res) => {
  const { id } = req.params;
  try {
    const list = await db.getInstructions(id);
    if (!list) {
      res.status(404).json({
        message: `No instructions for recipe with id ${id}.`
      });
    } else {
      res.status(200).json(list);
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// router.get("/:id/recipes", async (req, res) => {});

module.exports = router;
