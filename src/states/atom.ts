import { atom } from "recoil";
import {authService} from "configs/firebase";

export const authState = atom<boolean>({
    key: "auth",
    default: Boolean(authService.currentUser)
});