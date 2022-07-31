import { upload } from '#Config/multer.js';
import carAllController from '#Controllers/car-all.controller.js';
import carNewCarController from '#Controllers/car-new-car.controller.js';
import carNewCarDTO from '#Dto/car-new-car.dto.js';
import { Router } from 'express';

const carRouter = Router();

carRouter.get('/all', carAllController);
carRouter.post(
    '/new-car',
    upload.single('carImage'),
    carNewCarDTO,
    carNewCarController
);

export default carRouter;
