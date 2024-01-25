import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";
import { APIError } from "../clients/axios.client";
import { User, useGetUserHook } from "../hooks/user-hooks/useGetUserHook";

interface AuthUserContextParams {
    children: React.ReactNode;
}

interface AuthUserContextData {
    loading: boolean | null;
    error: APIError | null;
    user: User | null;
    setUser: Dispatch<SetStateAction<User | null>>;
    fetch: () => Promise<void>;
    logout: VoidFunction;
}

const AuthUserContext = createContext<AuthUserContextData>({} as AuthUserContextData);

const AuthUserContextProvider = ({ children }: AuthUserContextParams) => {
    const { data, fetch, loading, error } = useGetUserHook();
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => setUser(data), [data]);

    async function logout() {
        // localStorage.clear();
        // setUserContext(null);
        // sendSuccessMessage(UserMessages.logout.ok);
        // AppNavigate.home();
    }

    return (
        <AuthUserContext.Provider
            value={{
                user,
                setUser,
                fetch,
                error,
                loading,
                logout,
            }}
        >
            {children}
        </AuthUserContext.Provider>
    );
};

export { AuthUserContextProvider };
export default AuthUserContext;
