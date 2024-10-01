// src/store/authStore.js
import { create } from 'zustand';

const useAuthStore = create((set) => ({
    loggedInUser: localStorage.getItem('loggedInUser')
        ? JSON.parse(localStorage.getItem('loggedInUser'))
        : null,

    setCredentials: (userData) => {
        set({ loggedInUser: userData });
        localStorage.setItem('loggedInUser', JSON.stringify(userData));
    },

    logout: () => {
        set({ loggedInUser: null });
        localStorage.removeItem('loggedInUser');
    },
}));

export default useAuthStore;
