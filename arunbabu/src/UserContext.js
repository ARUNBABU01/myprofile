import React, {createContext, useContext, useMemo, useState} from "react";

const UserContext = createContext();

export function UserProvider({children}){
    const [userId, setUserId] = useState('');
    const [userData, setUserData] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);

    const login = (userid = 'arunbabu_anandakumar_3639') => {
        localStorage.setItem('user', JSON.stringify(userid));
        setUserId(userid);
        setLoggedIn(true)
    }

    const logout = () => {
        localStorage.setItem('userid', '');
        setUserId('');
        setLoggedIn(false)
    }

    const setUserProfile = (data) => {
        setUserData(data);        
    }

    const value = useMemo(() => ({
        login, logout, userId,userData, setUserProfile,loggedIn,
    }), [ userId, userData, loggedIn])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>

}

export function useUserData(){
    const {userId, userData, loggedIn} = useContext(UserContext)
    return {userId, userData, loggedIn}
}


export function useUserActions(){
    const {login, logout, setUserProfile } = useContext(UserContext)
    return {login, logout, setUserProfile};
}