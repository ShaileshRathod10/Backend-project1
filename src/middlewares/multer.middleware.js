import multer from "multer";

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
        // change file name
        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        // cb(null , file.fieldname + '-' + uniqueSuffix)

        //upload original file name
        cb(null, file.originalname)
    }
})

export const upload = multer({ storage, })