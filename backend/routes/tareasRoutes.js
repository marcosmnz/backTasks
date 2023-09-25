const express = require('express')
const router = express.Router()
const { getTareas, setTarea, updateTarea, deleteTarea } = require('../controllers/tareasControllers')

router.get('/', getTareas)
router.post('/', setTarea)

router.put('/:id', updateTarea)
router.delete('/:id', deleteTarea)

module.exports = router