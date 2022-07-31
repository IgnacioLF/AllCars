import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(
            null,
            new Date().toISOString().slice(0, 10) + '__' + file.originalname
        );
    },
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.minetype === 'image/png') {
        cb(null, true);
    } else {
        req.file_error = 'Bad file type';
        cb(null, false);
    }
};

export const upload = multer({
    storage,
    fileFilter,
});
