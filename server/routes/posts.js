import express  from "express";
import {getposts,createpost} from '../controllers/posts.js';
const router = express.Router();

//localhost:5000/posts
//
router.get('/',getposts);
router.get('/',createpost);
export default router;