export const calculateHeight = () =>{
    //64x - MenuBar
    let pageHeight = window.innerHeight - 64;
    console.log(pageHeight, pageHeight*0.8)
    return pageHeight*0.9;
}