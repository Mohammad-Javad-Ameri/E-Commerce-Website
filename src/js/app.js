let products = [];
let mainContainer = document.getElementById("mainContainer");
let containerClothing = document.getElementById("containerClothing");

let inputText = document.getElementById('input');
let Founds;

inputText.addEventListener("input", async (e) => {
  const value = e.target.value.toLowerCase();
    const Found= products.filter((list => {
        return (list.title.toLowerCase().includes(value) );
    }))
    

    if (e.target.value === "") {
        box.classList.add("hide");
    }

})
function drawdata(productContainer) {

    console.log(productContainer);
    for (let i = 0; i < productContainer.length; i++) {

dynamicSection(productContainer[i]);
    }
}

function dynamicSection(ob) {
  let boxDiv = document.createElement("div");
  boxDiv.id ="box"+ob.id;
  boxDiv.classList="box";
 
  let boxLink = document.createElement("a");
  // boxLink.href = '#'
  boxLink.href = "/oneproduct.html?" + ob.id;
  // console.log('link=>' + boxLink);
 let h4 = document.createElement("h4");
  let h4Text = document.createTextNode(ob.category);
  h4.appendChild(h4Text);
  let imgTag = document.createElement("img");
  imgTag.id="image1";
  imgTag.src = ob.image;

  let detailsDiv = document.createElement("div");
  detailsDiv.id = "details";

  let h3 = document.createElement("h3");
  let h3Text = document.createTextNode(ob.title);
  h3.appendChild(h3Text);



  let h2 = document.createElement("h2");
  let h2Text = document.createTextNode(ob.price +" $");
  h2.appendChild(h2Text);

  boxDiv.appendChild(boxLink);
  boxLink.appendChild(imgTag);
  boxLink.appendChild(detailsDiv);
    detailsDiv.appendChild(h4);
  detailsDiv.appendChild(h3);
  detailsDiv.appendChild(h2);

  return boxDiv;
}







fetch('https://fakestoreapi.com/products?limit=10')
  .then(response => response.json())
  .then(data => {

   
   for (let i = 0; i < data.length; i++) {
         products = [...data];
   
        containerClothing.appendChild(dynamicSection(data[i]));

         
    }
  })
 
  .catch(error => {
    console.log("Error:", error);
  });
  
