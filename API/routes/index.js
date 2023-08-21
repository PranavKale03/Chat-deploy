import express from 'express';

const router = express.Router()

// User
import UserByIdController from '../controllers/UserById.controller.js'
import UserCreateController from '../controllers/UserCreate.controller.js'
import UserDeleteController from '../controllers/UserDeleteById.controller.js'
import UserSearchController from '../controllers/UserSearch.controller.js'
import UserUpdateController from '../controllers/UserUpdate.controller.js'
import UserByFirebaseIdController from '../controllers/UserByFirebaseId.controller.js';
// router.get('/user/:id', UserByIdController)
router.post('/user', UserCreateController)
router.delete('/user', UserDeleteController)
router.post('/user/search', UserSearchController)
router.put('/user', UserUpdateController)
router.get('/user/:id', UserByFirebaseIdController)

// Community
import CommunityByIdController from '../controllers/CommunityById.controller.js'
import CommunityCreateController from '../controllers/CommunityCreate.controller.js'
import CommunityDeleteController from '../controllers/CommunityDeleteById.controller.js'
import CommunitySearchController from '../controllers/CommunitySearch.controller.js'
import CommunityUpdateController from '../controllers/CommunityUpdate.controller.js'
router.get('/community/:id', CommunityByIdController)
router.post('/community', CommunityCreateController)
router.delete('/community', CommunityDeleteController)
router.post('/community/search', CommunitySearchController)
router.put('/community', CommunityUpdateController)

export default router