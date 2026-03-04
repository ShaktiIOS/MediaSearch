import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const initialState = {
    items: JSON.parse(localStorage.getItem('collection')) || []
}

const collectionSlice = createSlice({
    name: 'collection',
    initialState,
    reducers: {
        addToCollection: (state, action) => {
            const alreadyExists = state.items.find(item => item.id === action.payload.id)
            if (!alreadyExists) {
                state.items.push(action.payload)
                localStorage.setItem('collection', JSON.stringify(state.items))
            }
        },
        removeCollection: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
            localStorage.setItem('collection', JSON.stringify(state.items))
        },
        clearCollection: (state) => {
            state.items = [];
            localStorage.setItem('collection', JSON.stringify(state.items))
        },
        addToast: () => {
            toast.success('Added to collection!', {
                theme: "dark"
            })
        },
        removeToast: (state, action) => {
            toast.error(action.payload, {
                theme: "dark"
            })
        }
    }
})

export const { addToCollection, removeCollection, clearCollection, addToast, removeToast } = collectionSlice.actions
export default collectionSlice.reducer