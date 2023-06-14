import {atom} from 'recoil';

export enum AuthModalType {
    SignIn,
    SignUp,
    ResetPassword
}

type AuthModalState =
{
    isOpen: boolean;
    type: AuthModalType;
}

const initalState: AuthModalState = 
{
    isOpen: false,
    type: AuthModalType.SignIn
}

export const authModalState = atom<AuthModalState>({
    key: 'authModalState',
    default: initalState
})