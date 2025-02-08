import { createSlice, nanoid } from '@reduxjs/toolkit';

const courseSlice = createSlice({
    name: 'form',
    initialState: {
        searchTerm: '',
        data: [],
    },
    reducers: {

        // Form Icinde Girilen 
        // Ad Aciklama Fiyat Input larina Girilen Bilgilerini Aliyoruz
        // toolkit Icinde Yer Alan id Paketini Kullanarak id Bilgisi Uretiyoruz
        addCourse(state, action) {
          debugger;
          state.data.push({
              name: action.payload.name,
              description: action.payload.description,
              cost: action.payload.cost,
              id: nanoid(),
          });
        },

        // courseSlice.js Dosyasindaki
        // courseSlice Degiskenine Atanan Data Uzerinden
        // initialState Icindeki searchTerm Attribute Icindeki
        // Datanin Ilk Haline Ulasmak Icin 
        // action Attribute Uzerinden 
        // payload Attribute a Ulasiyoruz
        changeSearchTerm(state, action) {
            debugger;
            state.searchTerm = action.payload;
        },

        // Silinecek Kursun Yanindaki Sil Butonuna Tiklandiginda
        // state Parametresi Uzerinden 
        // data Attribute Uzerinden 
        // filter method Kullanilarak 
        // course Parametresi Uzerinden Gelen 
        // Silinecek Data nin id Bilgisini payload Attribute Uzerinden
        // Var Olan Database Icinde Var Mi Diye Bakiyoruz
        // id Bilgisi Var Ise Data yi Siliyoruz
        removeCourse(state, action) {
            const updatedCourses = state.data.filter((course) => {
                return course.id !== action.payload;
            });
            state.data = updatedCourses;
        },
    },
});

// reducer Icindeki 
// Methodlara Disaridan Erismek Icin 
// Disaridan Erisime Aciyoruz
export const { addCourse, removeCourse, changeSearchTerm } = courseSlice.actions;

// Slice i Disaridan Erisime Acmak Icin
// Degisken Adi Uzerinden Islem Yapiyoruz
export const courseReducer = courseSlice.reducer;