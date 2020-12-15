import { IUserDTO } from './IUserDTO';


export default interface ISignInUseCase {
    signin(userDto: IUserDTO): Promise<IUserDTO>
}