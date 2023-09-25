const asyncHandler = require('express-async-handler')
const Tarea = require('../models/tareasModel')

const getTareas = asyncHandler(async (req, res) => {

    const tareas = await Tarea.find()

    res.status(200).json(tareas)
})

const setTarea = asyncHandler(async (req, res) => {
    if (!req.body.texto) {
        res.status(400)
        throw new Error('Por favor teclea una tarea')
    }

    const tarea = await Tarea.create({
        texto: req.body.texto,
    })
    res.status(201).json(tarea)
})

const updateTarea = asyncHandler(async (req, res) => {

    const tarea = await Tarea.findById(req.params.id)

    if (!tarea) {
        res.status(404)
        throw new Error('La tarea no fué encontrada')
    }

    const updatedTarea = await Tarea.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updatedTarea)
})

const deleteTarea = asyncHandler(async (req, res) => {

    const tarea = await Tarea.findById(req.params.id)

    if (!tarea) {
        res.status(404)
        throw new Error('La tarea no fué encontrada')
    }


    tarea.deleteOne()
    res.status(200).json({ id: tarea._id })


    //const deletedTarea = await Tarea.findByIdAndDelete(req.params.id)
    //tarea.deleteOne()
    //res.status(200).json({ id: tarea._id })
})

module.exports = {
    getTareas,
    setTarea,
    updateTarea,
    deleteTarea
}