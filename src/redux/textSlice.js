import { createSlice } from '@reduxjs/toolkit'

const textSlice = createSlice({
    name: 'textSlice',
    initialState: {
        items: [],
        type: 'text',
        paras: 4,
    },
    reducers: {
        updateParas: (state, action) => {
            state.paras = action.payload;
        },
        updateType: (state, action) => {
            state.type = action.payload;
        }
    },
})

export const { updateParas, updateType } = textSlice.actions;

export default textSlice.reducer;