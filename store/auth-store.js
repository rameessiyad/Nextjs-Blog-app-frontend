import { create } from "zustand";

const useAuthStore = create((set) => ({
    loggedinUser: localStorage.getItem('loggedinUser')
        ? JSON.parse(localStorage.getItem('loggedInUser'))
        : null,

    setCredentials: (userData) => {
        set(() => ({
            loggedInUser: userData,
        }));
        localStorage.setItem('loggedinUser', JSON.stringify(userData));
    },
    
    logout: () => {
        set(() => ({
            loggedInUser: null,
        }));
        localStorage.removeItem('loggedInUser');
    },
}));

export default useAuthStore