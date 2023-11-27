import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        loading: false,
        error: null,

    },
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload
            state.loading = false;
            state.error = null;
            return state
        },
        addUser: (state, action) => {
            state.users = [...state.users, action.payload];
            return state
        },
        deleteUser: (state, action) => {
            let index = state.users.findIndex((obj) => obj.id === action.payload.id)
            state.users.splice(index, 1)
            return state
        },
        editUser: (state, action) => {
            const index = state.users.findIndex((obj) => obj.id === action.payload.id)
            state.users[index]=action.payload.values;
            return state
        },
        setLoading: (state) => {
            state.loading = true;
            state.error = null;
        },
        
    }
})

export const { setUsers, addUser, deleteUser, editUser,setLoading } = UserSlice.actions;