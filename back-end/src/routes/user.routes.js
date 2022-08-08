import userFavoritesAddController from '#Controllers/user-favorites-add.controller.js';
import userFavoritesAllController from '#Controllers/user-favorites-all.controller.js';
import userFavoritesRemoveController from '#Controllers/user-favorites-remove.controller.js';
import userLoginController from '#Controllers/user-login.controller.js';
import userProfileController from '#Controllers/user-profile.controller.js';
import userRegisterController from '#Controllers/user-register.controller.js';
import userUpdatePasswordController from '#Controllers/user-update-password.controller.js';
import userUpdateProfileController from '#Controllers/user-update-profile.controller.js';
import carIDDTO from '#Dto/car-id.dto.js';
import userJWTDTO from '#Dto/user-jwt.dto.js';
import userLoginDTO from '#Dto/user-login.dto.js';
import userRegisterDTO from '#Dto/user-register.dto.js';
import userUpdatePasswordDTO from '#Dto/user-update-password.dto.js';
import userUpdateProfileDTO from '#Dto/user-update-profile.dto.js';
import { Router } from 'express';

const userRouter = Router();

userRouter.post('/register', userRegisterDTO, userRegisterController);
userRouter.post('/login', userLoginDTO, userLoginController);
userRouter.get('/profile', userJWTDTO, userProfileController);
userRouter.patch(
    '/update-profile',
    userJWTDTO,
    userUpdateProfileDTO,
    userUpdateProfileController
);
userRouter.patch(
    '/update-password',
    userJWTDTO,
    userUpdatePasswordDTO,
    userUpdatePasswordController
);
userRouter.patch(
    '/favorites/add',
    userJWTDTO,
    carIDDTO,
    userFavoritesAddController
);
userRouter.delete(
    '/favorites/remove',
    userJWTDTO,
    carIDDTO,
    userFavoritesRemoveController
);
userRouter.get('/favorites/all', userJWTDTO, userFavoritesAllController);

export default userRouter;
