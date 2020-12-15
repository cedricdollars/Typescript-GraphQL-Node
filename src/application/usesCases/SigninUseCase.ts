import ISignInUseCase from './ISignInUseCase';
import { IUserDTO } from './IUserDTO';

export default class SignInUseCase implements ISignInUseCase {

    
    public async signin(userDto: IUserDTO):Promise<IUserDTO> {
        throw new Error("Not impleted");
    }
}