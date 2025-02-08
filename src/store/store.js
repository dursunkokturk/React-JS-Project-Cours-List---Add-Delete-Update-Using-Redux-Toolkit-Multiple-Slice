import { configureStore } from '@reduxjs/toolkit';
import { courseReducer } from './slices/courseSlice';
import { formReducer } from './slices/formSlice';

// FormSlice.js Dosyasinda Ve CourseSlice.js Dosyasinda 
// Yapilacak Islemlerin 
// Yonetimi Bu Kisimda Yapilacak 
export const store = configureStore({
    reducer: {
        form: formReducer,
        courses: courseReducer,
    },
});