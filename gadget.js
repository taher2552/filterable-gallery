const gadgetForm=document.getElementById('gadget_form');
const deleteButton=document.getElementById('delete_btn');
const displayItem=document.getElementById('display_item');
const error=document.getElementById('error');



const categoryFilter=document.getElementById('category_filter');
let currentFilter = "";
let  gadgetArr=JSON.parse(localStorage.getItem("gadget"));


function display(gadgetArr){

  const displayItem=document.getElementById('display_item');
  displayItem.innerHTML="";

  if(!gadgetArr)return;

 

  gadgetArr.map((val)=>displayItem.innerHTML+=(`<div id="display_section"><img id="${val.id}" class="image" src="${val.imageUrl}" alt="image loading..."> <br><br><button class="delete_btn">Delete</button><div>` ))

}




if (!gadgetArr) {
    gadgetArr = []; 
}

display(gadgetArr);

categoryFilter.addEventListener("click", (e) => {
    e.preventDefault();
  currentFilter = e.target.innerText;

//   console.log(e.target.innerText);
//  return;
  

  let filterCategory = gadgetArr;

//   console.log(filterCategory);
//   return;



  if (currentFilter === "Headphones") {
    filter = filterCategory.filter((item) => item.gadgetCategpry === "headphone");
  } else if (currentFilter === "Laptops") {
    filter = filterCategory.filter((item) => item.gadgetCategpry === "laptop");
  } else if (currentFilter === "Mobiles") {
    filter = filterCategory.filter((item) => item.gadgetCategpry === "Mobile");
  }
   

  if(currentFilter === "All"){
    display(gadgetArr);
  }else{
  display(filter);
  }
});

gadgetForm.addEventListener('submit',(e)=>{
    e.preventDefault();

  

    

    let imageUrl=e.target.url.value;
    let gadgetCategpry=e.target.gadget_category.value;

    if(imageUrl==""){
      error.innerHTML="*Please enter image url"
      return;
    }

    gadgetArr.push({imageUrl,gadgetCategpry,id:Date.now()});

    localStorage.setItem("gadget",JSON.stringify(gadgetArr))

    console.log(gadgetArr)

 
    e.target.url.value="";

    display(gadgetArr);

})



displayItem.addEventListener('click', (e)=>{
  if(e.target.classList.contains("delete_btn")){
    e.target.parentElement.remove();
  }
});
