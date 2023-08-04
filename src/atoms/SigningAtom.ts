import { onlineUserManager } from '@/firebase/firebase';
import { atom } from 'recoil';

export const IsSignedIn = atom<boolean>({
    key: 'IsSignedIn',
    default: onlineUserManager.GetUser() !== null
})