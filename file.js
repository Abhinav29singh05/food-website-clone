let btn=document.querySelector("#check");
const pic_names =  ["plant.jpg", "foodmainimg2.jpg","foodorgslide3.jpg"]
let index = 0;    
const testright=()=>{
    let photo = document.getElementById("photo_id");
    index = index + 1;
    if (index >= pic_names.length) {
        index = 0;
    }
    console.log(index);
    photo.src = pic_names[index];
    
}
const testleft=()=>{
    let photo = document.getElementById("photo_id");
    index = index -1;
    if (index <0) {
        index = pic_names.length-1;
    }
    console.log(index);
    photo.src = pic_names[index];
}