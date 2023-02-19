import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name:"",
    addres: ""
}

export const userSlicer = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            state.name = action.payload.name
            state.address = action.payload.address
        }
    },
})

export const { setUser } = userSlicer.actions

export default userSlicer.reducers