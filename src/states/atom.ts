import { atom } from "recoil";
import {authService} from "configs/firebase";

export const authState = atom<boolean>({
    key: "authState",
    default: Boolean(authService.currentUser)
});


