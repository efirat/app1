
function Sayac({sayi,sayacIslem}){
    console.log("Arac sayim re-render")



  
    return(
        <>
            <h1>ARAÇ : {sayi}</h1>
            <button onClick={sayacIslem}>Yeni Araç</button>
        </>
        
    )
}

export default Sayac