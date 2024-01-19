import { createSlice } from '@reduxjs/toolkit'
import phoneNumbers from '../data/data'

const initialState = {
    phoneNumbers
}

export const phoneSlice = createSlice({
    name: 'phones',
    initialState,
    reducers: {
        archive: (state, action) => {
            const modifiedArray = state.phoneNumbers.map(obj => {
                if (obj.id === action.payload) {
                    return { ...obj, archive: true };
                }
                return obj;
            });
            state.phoneNumbers = modifiedArray
        },
        unarchive: (state, action) => {
            const modifiedArray = state.phoneNumbers.map(obj => {
                if (obj.id === action.payload) {
                    return { ...obj, archive: false };
                }
                return obj;
            });
            state.phoneNumbers = modifiedArray
        },
        archiveAll: (state) => {
            const modifiedArray = state.phoneNumbers.map(obj => {
                return { ...obj, archive: true };
            });
            state.phoneNumbers = modifiedArray
        },
        unarchiveAll: (state) => {
            const modifiedArray = state.phoneNumbers.map(obj => {
                return { ...obj, archive: false };
            });
            state.phoneNumbers = modifiedArray
        }
    },
})

// Action creators are generated for each case reducer function
export const { archive, unarchive, archiveAll, unarchiveAll } = phoneSlice.actions

export default phoneSlice.reducer