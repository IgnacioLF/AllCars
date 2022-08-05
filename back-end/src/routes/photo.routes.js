import { Router } from 'express';
import { upload } from '#Config/multer.js';
import photoNewDTO from '#Dto/photo-new.dto.js';
import photoNewController from '#Controllers/photo-new.controller.js';
import photoAllDayController from '#Controllers/photo-allday.controller.js';
import photoAllNightController from '#Controllers/photo-allnight.controller.js';
import photoIDDTO from '#Dto/photo-id.dto.js';
import photoRemoveController from '#Controllers/photo-remove.controller.js';

const photoRouter = Router();

photoRouter.get('/allday', photoAllDayController);
photoRouter.get('/allnight', photoAllNightController);
photoRouter.post(
    '/new',
    upload.single('photoImage'),
    photoNewDTO,
    photoNewController
);
photoRouter.delete('/remove', photoIDDTO, photoRemoveController);

export default photoRouter;
