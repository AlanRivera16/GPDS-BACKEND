const express = require('express');
const Test = require('../models/Test');
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const tests = await Test.find({ deleted: false });
        res.json(tests);
      } catch (error) {
        res.status(500).send(error);
      }
});

router.get("/:id", async (req, res) => {
    try {
      const test = await Test.findById(req.params.id);
      res.json(test);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  router.post("/", async (req, res) => {
    try {
      const test = new Test({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        edad: req.body.edad,
      });
      const testSaved = await test.save();
      res.json(testSaved);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  router.put("/:id", async (req, res) => {
    try {
      const updatedTest = await Test.findByIdAndUpdate(req.params.id, {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        edad: req.body.edad,
      });
      res.json(updatedTest);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  router.patch("/delete/:id", async (req, res) => {
    try {
      const testDeleted = await Test.findByIdAndUpdate(req.params.id, {
        deleted: true,
        deletedAt: Date.now(),
      });
      res.json(testDeleted);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  router.delete("/:id", async (req, res) => {
    try {
      const deletedTest = await Test.deleteOne({ _id: req.params.id });
      res.json(deletedTest);
    } catch (error) {
      res.status(500).send(error);
    }
  });

module.exports = router;
