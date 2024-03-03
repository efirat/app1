import Sayac from "./Sayac";
import Kasa from "./Kasa";
import { useState } from "react";

function App(){
  console.log("App render")


  const [sayi, sayiGuncelle] = useState(0)
  function sayacIslem(){
    sayiGuncelle(eskiDeger => eskiDeger+1) // Kisa hali
    //sayiGuncelle((eskiDeger) => {return eskiDeger+1}) //Uzun hali
  }

  return(
    <div>

      <Sayac sayi={sayi} sayacIslem={sayacIslem}/>

      <br/><br/><hr/>

      <Kasa sayi={sayi} />
    </div>

  )
}

export default App;