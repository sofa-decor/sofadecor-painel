import { useContext } from "react";
import AuthUserContext from "../../contexts/AuthUserContext";

export default function useAuthUserHook() {
    return useContext(AuthUserContext);
}
