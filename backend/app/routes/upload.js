import express from 'express'
import multer from 'multer'
import path from 'path'

const router = express.Router()

//save uploaded file
const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'uploads/')
    },
    filename(req, file, cb) {
        filename - date - fileextension
        cb(null, `${file.fieldname}-${Date.now().toISOString().replace(/:/g, '-')}${path.extname(file.originalname)}`)
        // var fileFormat = (file.originalname).split(".");
        // cb(null, file.fieldname + '-' + new Date().toISOString().replace(/:/g, '-') + '.' + fileFormat[fileFormat.length - 1]);
    }
})

function checkFileType(file, cb) {
    //allowed file extensions
    const filetypes = /jpg|jpeg|png/
    //make sure that the uploaded files mathces the allowed extensions
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
    //check mime type
    const mimetype = filetypes.test(file.mimetype)

    if (extname && mimetype) {
        return cb(null, true)
    } else {
        cb('Images only')
    }
}

const upload = multer({
    storage,
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb)
    }
})

router.post('/', upload.single('image'), (req, res) => {
    //send image path
    res.send(`/ ${req.file.path}`)
})



export default router