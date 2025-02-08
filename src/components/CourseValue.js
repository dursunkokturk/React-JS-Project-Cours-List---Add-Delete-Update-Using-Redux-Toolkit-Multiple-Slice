import React from 'react';
import { useSelector } from 'react-redux';

function CourseValue() {

    // useSelector Kullanarak
    // store.js Dosyasindaki store Degiskeni Uzerinden
    // formSlice.js Dosyasindaki formSlice Degiskeni Uzerinden
    // initialState Degiskenine Atanan Objeye Ulasiyoruz Ve
    // Ulasilan Datanin name, description, cost Degiskenleri Uzerinden
    // Data lari Donduruyoruz Ve
    // courses Degiskeni Uzerinden Kullanilabilir Hale Getiriyoruz
    // Arama Islemi Yapmak Icin courseSlive.js Dosyasindaki
    // searchTerm Degiskeni Uzerinden Islem Yapiyoruz 
    const totalCost = useSelector(({ form, courses: { data, searchTerm } }) =>

        // Fiyat Hesaplamak Icin
        // data Attribute Uzerinden 
        // filter Method Kullanilarak
        // course Degiskeni Uzerinden 
        // name Attribute Uzerinden 
        // searchTerm Attribute Uzerinden
        // Aranan Kurs Adini Filtreleme Yaparak Listeliyoruz
        // Arama Islemi Kucuk Harf Kullanimi Olacak Sekilde Yapilacak
        // reduce Method Kullanilarak 
        // Arama Islemi Sonunda Listelenen Kursun Fiyat Bilgisini Kullaniciya Veriyoruz
        data
        .filter((course) => course.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .reduce((acc, course) => acc + course.cost, 0)
    );
    return <div className="coursePrice">Toplam Tutar: {totalCost} TL</div>;
}

export default CourseValue;