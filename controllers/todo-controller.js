const express = require('express');
const TodoList = require('../models/todo');

const findAllTodo = (req,res) => {
  TodoList.findAll()
  .then((TodoList) => {
    res.json(TodoList)
  })
  .catch((err) => {
    console.error('Gagal mengambil data table todolist', err)
    res.status(400).json({ error: 'Gagal mengambil data table todolist'})
  })
}

const findById = (req,res) => {
  TodoList.findByPk(req.params.id)
  .then((TodoList) => {
    res.json(TodoList)
  })
  .catch((err) => {
    console.error('Gagal mengambil data table todolist', err)
    res.status(500).json({ error: 'Gagal mengambil data table todolist'})
  })
}

const PostTodo = (req,res) => {
  TodoList.create(req.body)
  .then((TodoList) => {
    res.json(TodoList)
  })
  .catch((err) => {
    console.error('Gagal menambahkan data todolist', err)
    res.status(500).json({ error: 'Gagal menambahkan data todolist'})
  })
}

const updateTodo = (req, res) => {
  TodoList.update(req.body, { where: { id: req.params.id } })
    .then(() => {
      return TodoList.findByPk(req.params.id);
    })
    .then((updateTodo) => {
      if (!updateTodo) {
        return res.status(404).json({ error: 'Tidak ada todo list' });
      }
      res.json(updateTodo);
    })
    .catch((err) => {
      console.error('Gagal mengupdate data todolist', err);
      res.status(500).json({ error: 'Gagal mengupdate data todolist' });
    });
};

const deleteTodo = (req, res) => {
  TodoList.destroy({where: {id: req.params.id}})
  .then(() => {
    res.json({message: 'data berhasil dihapus'});
  })
  .catch((err) => {
    console.error('Gagal menghapus data todolist', err);
    res.status(500).json({ error: 'Gagal menghapus data todolist' });
  });
}


module.exports = {
  findAllTodo,
  findById,
  PostTodo,
  updateTodo,
  deleteTodo
}