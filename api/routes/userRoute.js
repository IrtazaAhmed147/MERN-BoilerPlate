import express from 'express';
import { deleteUser, getAllUsers,  getSingleUser, updateUser } from '../controllers/userController.js';
import multer from 'multer';

const userRouter = express.Router();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + `.${file.mimetype.split('/')[1]}`)
    }
})

const upload = multer({ storage: storage })

// router.post('/', verifyToken, upload.single('image'), imageUpload)
// router.post('/', verifyToken, upload.array('image',10), imageUpload)


userRouter.get('/', getAllUsers)
userRouter.get('/:id', getSingleUser)
userRouter.delete('/:id', deleteUser)
userRouter.put('/:id', upload.single('image'),updateUser)




export { userRouter }