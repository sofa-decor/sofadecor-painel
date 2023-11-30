import { useContext } from "react";
import RouterContext from "../contexts/RouterContext";

export default function useAppRouterHook() {
    return useContext(RouterContext);
}
