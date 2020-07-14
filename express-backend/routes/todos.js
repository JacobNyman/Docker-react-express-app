const express = require("express");
const moment = require("moment");
const router = express.Router();

// Schemas
const todolist = require("../models/todolist");

// Post new todolist
router.post("/todolist", async (req, res) => {
  try {
    const { title } = req.body;
    const tempObj = { title, todos: [] };
    const newTodoList = new todolist(tempObj);
    await newTodoList.save().then((list) => res.send(list));
  } catch (error) {
    return res.status(400).json({ msg: error });
  }
});

// Get all todolists
router.get("/allTodoLists", async (req, res) => {
  try {
    const allLists = await todolist.find({});

    return res.status(200).json(allLists);
  } catch (error) {
    return res.status(400).json({ msg: error });
  }
});

router.get("/getTodoList/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const list = await todolist.findOne({ _id: id });

    if (!list) {
      return res.status(404).json("List not found...");
    }

    return res.status(200).json(list);
  } catch (error) {
    return res.status(400).json({ msg: error });
  }
});

// Delete one todolist
router.delete("/deleteList/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const found = await todolist.countDocuments({ _id: id });
    if (found !== 1) {
      return res.status(404).json("List not found...");
    }

    await todolist.deleteOne({ _id: id });

    return res.status(200).json("List deleted...");
  } catch (error) {
    return res.status(400).json({ msg: error });
  }
});

// Update todolist(title)
router.put("/updatelist/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const list = await todolist.findOne({ _id: id });
    if (!list) {
      return res.status(404).json("List not found...");
    }

    await todolist.updateOne({ _id: id }, { title: title });

    return res.status(200).json("List updated...");
  } catch (error) {
    return res.status(400).json({ msg: error });
  }
});

router.post("/postTodo/:listId", async (req, res) => {
  try {
    const { listId } = req.params;
    const { text } = req.body;

    const list = await todolist.findOne({ _id: listId });
    if (!list) {
      return res.status(404).json("List not found...");
    }

    await todolist.findByIdAndUpdate(list._id, {
      $push: {
        todos: {
          text,
          timeStamp: moment(),
        },
      },
    });

    return res.status(200).json("Todo added...");
  } catch (error) {
    return res.status(400).json({ msg: error });
  }
});

router.delete("/deleteTodo/:listId/:todoId", async (req, res) => {
  try {
    const { listId, todoId } = req.params;

    const list = await todolist.findOne({ _id: listId });
    if (!list) {
      return res.status(404).json("List not found...");
    }

    await todolist.findByIdAndUpdate(list._id, {
      $pull: {
        todos: {
          _id: todoId,
        },
      },
    });

    res.status(200).json("Todo remowed");
    return;
  } catch (error) {
    return res.status(400).json({ msg: error });
  }
});

router.put("/updateTodo/:listId/:todoId", async (req, res) => {
  try {
    const { listId, todoId } = req.params;
    const { text } = req.body;
    const list = await todolist.findOne({ _id: listId });
    if (!list) {
      return res.status(404).json("List not found...");
    }

    await todolist.updateOne(
      { _id: list._id },
      { $set: { "todos.$[todo].text": text } },
      { arrayFilters: [{ "todo._id": todoId }] }
    );

    res.status(200).json("Todo updated");

    return;
  } catch (error) {
    return res.status(400).json({ msg: error });
  }
});

router.put("/updateTodos/:listId/", async (req, res) => {
  try {
    const { listId } = req.params;
    const { todos } = req.body;

    const list = await todolist.findOne({ _id: listId });
    if (!list) {
      return res.status(404).json("List not found...");
    }

    const updatedList = list.todos.map((todo, i) => {
      todo.text = todos[i].text;
      todo.timeStamp = moment();

      return todo;
    });

    await todolist.updateOne(
      { _id: list._id },
      { $set: { todos: updatedList } }
    );

    res.status(200).json("Todos updated");

    return;
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = router;
