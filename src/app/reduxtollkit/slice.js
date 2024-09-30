import { createSlice } from '@reduxjs/toolkit';
let theme = localStorage.getItem('theme')
const initialState = {
    mode: theme || 'light',
}

export const slice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setMode: (state, action) => {
            state.mode = action.payload
            localStorage.setItem('theme', action.payload)
        }
    }
})

export const { setMode } = slice.actions
export default slice.reducer