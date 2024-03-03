import { useState } from "react";

function App(){
  const [ad, adGuncelle] = useState("Erdoğan")
  console.log("app çalıştı")

  return(
    <div>
    Merhaba! {ad}
    <button onClick={ () => {adGuncelle("Gonca")}}>Adı Değiştir</button>
    </div>
  )
}

export default App;