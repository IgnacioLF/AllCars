import { upload } from '#Config/multer.js';
import carAllController from '#Controllers/car-all.controller.js';
import carCarController from '#Controllers/car-car.controller.js';
import carNewCarController from '#Controllers/car-new-car.controller.js';
import carRemoveController from '#Controllers/car-remove.controller.js';
import carUpdateImageController from '#Controllers/car-update-image.controller.js';
import carIDDTO from '#Dto/car-id.dto.js';
import carNewCarDTO from '#Dto/car-new-car.dto.js';
import { Router } from 'express';

const carRouter = Router();

carRouter.get('/all', carAllController);
carRouter.post('/car', carIDDTO, carCarController);
carRouter.post(
    '/new-car',
    upload.single('carImage'),
    carNewCarDTO,
    carNewCarController
);
carRouter.delete('/remove', carIDDTO, carRemoveController);
carRouter.patch(
    '/update-image',
    upload.single('carImage'),
    carIDDTO,
    carUpdateImageController
);

export default carRouter;
