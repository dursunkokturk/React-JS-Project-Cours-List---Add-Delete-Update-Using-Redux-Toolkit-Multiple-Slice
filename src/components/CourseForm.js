import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeName, changeCost, changeDescription } from '../store/slices/formSlice';
import { addCourse } from '../store/slices/courseSlice';

function CourseForm() {
    const dispatch = useDispatch();

    // useSelector Kullanarak
    // store.js Dosyasindaki store Degiskeni Uzerinden
    // formSlice.js Dosyasindaki formSlice Degiskeni Uzerinden
    // initialState Degiskenine Atanan Objeye Ulasiyoruz Ve
    // Ulasilan Datanin name, description, cost Degiskenleri Uzerinden
    // Data lari Ekrana Yazdiriyoruz
    const { name, description, cost } = useSelector((state) => {
        return {
            name: state.form.name,
            description: state.form.description,
            cost: state.form.cost,
        };
    });

    // preventDefault Ozelligini Kullanarak
    // Inputlar Icine Deger Girildigi Surece 
    // Surekli Sayfa Yenilemeyi Durduruyoruz
    // dispatch Yontemini Kullanarak 
    // courseSlice.js Dosyasindaki 
    // addCourse Methoduna Veri Gonderiyoruz
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addCourse({ name, description, cost }));
    };
    console.log(name, description, cost);
    return (
        <div className="courseForm panel">
            <h4 className="subtitle is-3">Kurs Ekle</h4>

            {/* Kurs Adi, Aciklama, Fiyat Bilgileri Girildikten Sonra
                Inputlarin Icini Silmek Icin
                onSubmit Attribute Icinde handleSubmit Method Calistirilacak */}
            <form onSubmit={handleSubmit}>
                <div className="field-group">
                    <div className="field">
                      <label className="label">Ad</label>

                      {/* Isim Input una Veri Girildiginde
                            onChange Attribute Icinde dispatch Yontemi Kullaniarak
                            formSlice.js Dosyasindaki changeName Method Cagirilarak
                            event Parametresi Uzerinden
                            target Attribute Uzerinden
                            value Attribute Ile
                            Input Icine Girilen Degeri Aliyoruz */}
                      <input className="input is-expanded"
                              onChange={(event) => {
                                  dispatch(changeName(event.target.value));
                              }}
                              value={name}
                      />
                    </div>
                    <div className="field">
                      <label className="label">Açıklama</label>

                      {/* Aciklama Input una Veri Girildiginde
                            onChange Attribute Icinde dispatch Yontemi Kullaniarak
                            formSlice.js Dosyasindaki changeName Method Cagirilarak
                            event Parametresi Uzerinden
                            target Attribute Uzerinden
                            value Attribute Ile
                            Input Icine Girilen Degeri Aliyoruz */}
                      <textarea className="input is-expanded"
                                onChange={(event) => {
                                    dispatch(changeDescription(event.target.value));
                                }}
                                value={description}
                      />
                    </div>
                    <div className="field">
                      <label className="label">Fiyat</label>

                      {/* Aciklama Input una Veri Girildiginde
                            onChange Attribute Icinde dispatch Yontemi Kullaniarak
                            formSlice.js Dosyasindaki changeName Method Cagirilarak
                            event Parametresi Uzerinden
                            target Attribute Uzerinden
                            value Attribute Ile
                            Input Icine Girilen Degeri Rakami Aliyoruz
                            Girilen Degerin Veri Tipi Ilk Asamada String Oldugu Icin
                            int tipine Cevirmek Gerekiyor */}
                      <input className="input is-expanded"
                              onChange={(event) => {
                                  dispatch(changeCost(parseInt(event.target.value)));
                              }}
                              type="number"
                              value={cost}
                      />
                    </div>
                </div>
                <div className="field">
                  <button className="button is-primary">
                      Kaydet
                  </button>
                </div>
            </form>
        </div>
    );
}

export default CourseForm;