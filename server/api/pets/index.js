
import {Router} from 'express';
import controller from './pets.controller'

var router = new Router();

router.post('/', controller.createPet )
router.get('/', controller.getPets )
router.get('/:id', controller.getPet )
router.put('/:id', controller.updatePet )
router.delete('/:id', controller.destroyPet )

module.exports = router
