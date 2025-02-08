import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeCourse } from '../store/slices/courseSlice';

function CourseList() {
    const dispatch = useDispatch();

    // useSelector Kullanarak
    // store.js Dosyasindaki store Degiskeni Uzerinden
    // formSlice.js Dosyasindaki formSlice Degiskeni Uzerinden
    // initialState Degiskenine Atanan Objeye Ulasiyoruz Ve
    // Ulasilan Datanin name, description, cost Degiskenleri Uzerinden
    // Data lari Donduruyoruz Ve
    // courses Degiskeni Uzerinden Kullanilabilir Hale Getiriyoruz
    // Arama Islemi Yapmak Icin courseSlive.js Dosyasindaki
    // searchTerm Degiskeni Uzerinden Islem Yapiyoruz 
    const { courses } = useSelector(({ form, courses: { data, searchTerm } }) => {

        // Array Icinde Arama Islemi Yapmak Icin
        // data Attribute Uzerinden filter Method Kullanilarak
        // searchTerm Degiskeni Uzerinden Arama Islemi Yapiliyor
        // Arama Islemi Kucuk Harf Kullanimi Olacak Sekilde Yapilacak
        const filteredCourses = data.filter((course) =>
            course.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return {
            courses: filteredCourses,
        };
        // debugger;
        // return state.courses.data;
    });

    // courses Degiskeni Uzerinden Array Icinde 
    // map Method Ile Tarama Yapiyoruz
    // Tarama Isleminin Sonucunda Ulasilan Attribute lere 
    // course Degiskeni Uzerinden Ulasiyoruz
    const renderedCourses = courses.map((course) => {
        return (
          <div key={course.id} className="panel">
              <h1>
                  {course.name}
              </h1>
              <p>
                  {course.description}
              </p>
              <p>
                  {course.cost}
              </p>

              {/* Butona Tiklandiginda onClick Attribute Icinde
                    dispatch Yontemi Ile 
                    courseSlice.js Dosyasindaki
                    removeCourse Methodunu Cagiriyoruz */}
              <button className="button is-danger"
                      onClick={() => {
                          dispatch(removeCourse(course.id));
                      }}
              >
                  Sil
              </button>
          </div>
        );
    });
    return <div className="courseList">{renderedCourses}</div>;
}

export default CourseList;