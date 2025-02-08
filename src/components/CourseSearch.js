import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeSearchTerm } from '../store/slices/courseSlice';

function CourseSearch() {
    const dispatch = useDispatch();

    // useSelector Kullanarak
    // store.js Dosyasindaki store Degiskeni Uzerinden
    // formSlice.js Dosyasindaki formSlice Degiskeni Uzerinden
    // initialState Degiskenine Atanan Objeye Ulasiyoruz Ve
    // Ulasilan Datanin searchTerm Degiskeni Uzerinden
    // Data yi Ekrana Yazdiriyoruz
    const searchTerm = useSelector((state) => {
        return state.courses.searchTerm;
    });
    return (
        <div className="listHeader">
            <h3 className="title is-3">Kurslarım</h3>
            <div className="search field is-horizontal">
                <label className="label">Ara</label>

                {/* Arama Isleminin Yapilacagi input Elementinin
                    onChange Attribute Icinde dispatch Yontemini Kullanarak
                    courseSlice.js Dosyasindaki 
                    changeSearchTerm Methodunu Cagiriyoruz */}
                <input className="input"
                        onChange={(event) => {
                            dispatch(changeSearchTerm(event.target.value));
                        }}
                        value={searchTerm}
                />
            </div>
        </div>
    );
}

export default CourseSearch;