function UrunKart({urunBilgi}){

    function uyariVer(mesaj){
        alert(mesaj)
    }

    return(
        urunBilgi?
        (
        <div className="col-12 col-md-3">
            <h3>{urunBilgi.baslik ? urunBilgi.baslik : "Başlık yok.."}</h3>
            <img alt={urunBilgi.baslik} onClick={ ()=>{uyariVer("Merhaba, " + urunBilgi.baslik)}} src={"https://lipsum.app/id/"+ urunBilgi.fotoNo +"/300x200"}/>
        </div>
        ):""
    )
}

export default UrunKart