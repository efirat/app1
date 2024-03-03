import { useState } from "react";

function Kasa({sayi}){
    console.log("Kasa re-render")

    const parkUcreti = 40;
    //toplamFiyat arttir
    const [toplamFiyat, toplamFiyatGuncelle] = useState(0)
    function ucretEkle(){
      toplamFiyatGuncelle(eskiDeger => eskiDeger+parkUcreti)
    }
    
    return(
        <>
            <h2>KASA TOPLAM : {toplamFiyat} TL</h2>
            <button onClick={ucretEkle}>Ücret Al ({parkUcreti} TL)</button>
            <p>Araç başına gelir: {toplamFiyat && toplamFiyat/sayi}TL</p>
        </>
    )
}

export default Kasa