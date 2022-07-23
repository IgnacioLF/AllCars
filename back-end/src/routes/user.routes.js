import userLoginDTO from '#Dto/user-login.dto.js';
import userRegisterDTO from '#Dto/user-register.dto.js';
import userUpdatePasswordDTO from '#Dto/user-update-password.dto.js';
import userUpdateProfileDTO from '#Dto/user-update-profile.dto.js';
import { Router } from 'express';

const userRouter = Router();

userRouter.post('/register', userRegisterDTO);
userRouter.post('/login', userLoginDTO);
userRouter.get('/profile');
userRouter.patch('/update-profile', userUpdateProfileDTO);
userRouter.patch('/update-password', userUpdatePasswordDTO);

export default userRouter;
