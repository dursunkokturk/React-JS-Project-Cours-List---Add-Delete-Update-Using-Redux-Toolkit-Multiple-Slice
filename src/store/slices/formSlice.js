import { createSlice } from '@reduxjs/toolkit';
import { addCourse } from './courseSlice';

const formSlice = createSlice({
    name: 'form',
    initialState: {
        name: '',
        description: '',
        cost: 0,
    },
    reducers: {

        // Veri Girilen Input Icindeki Degeri Aliyoruz
        changeName(state, action) {
            state.name = action.payload;
        },

        // Veri Girilen Input Icindeki Degeri Aliyoruz
        changeDescription(state, action) {
            state.description = action.payload;
        },

        // Veri Girilen Input Icindeki Degeri Aliyoruz
        changeCost(state, action) {
            state.cost = action.payload;
        },
    },

    // Form Inputlarina Girilen Verileri Kaydetme Isleminden Sonra 
    // Form Icindeki Inputlarin Icini Bosaltmak Gerekiyor
    extraReducers(builder) {
        builder.addCase(addCourse, (state, action) => {
            state.name = '';
            state.description = '';
            state.cost = 0;
        });
    },
});

export const { changeName, changeDescription, changeCost } = formSlice.actions;

// Slice i Disaridan Erisime Acmak Icin
// Degisken Adi Uzerinden Islem Yapiyoruz
export const formReducer = formSlice.reducer;