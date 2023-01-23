let id = location.search.split('?')[1]
console.log(id)

// if(document.cookie.indexOf(',counter=')>=0)
// {
//     let counter = document.cookie.split(',')[1].split('=')[1]
//     document.getElementById("badge").innerHTML = counter
// }

function dynamicDetails(ob)
{
    productt=ob[id-1];
    console.log(productt);
    let mainContainer = document.createElement('div')
    mainContainer.id = 'containerD'
    document.getElementById('containerProduct').appendChild(mainContainer);

    let imageSectionDiv = document.createElement('div')
    imageSectionDiv.id = 'imageSection'

    let imgTag = document.createElement('img')
     imgTag.id = 'imgDetails'
     //imgTag.id = ob.photos
     imgTag.src = productt.image;

    imageSectionDiv.appendChild(imgTag)

    let productDetailsDiv = document.createElement('div')
    productDetailsDiv.id = 'productDetails'

    console.log(productDetailsDiv);

    let h1 = document.createElement('h1')
    let h1Text = document.createTextNode(productt.title)
    h1.appendChild(h1Text)

    let h4 = document.createElement('h4')
    let h4Text = document.createTextNode(productt.category)
    h4.appendChild(h4Text)
    console.log(h4);

    let detailsDiv = document.createElement('div')
    detailsDiv.id = 'details'

    let h3DetailsDiv = document.createElement('h3')
    let h3DetailsText = document.createTextNode( productt.price+" $")
    h3DetailsDiv.appendChild(h3DetailsText)

    let h3 = document.createElement('h3')
    let h3Text = document.createTextNode('Description')
    h3.appendChild(h3Text)

    let para = document.createElement('p')
    let paraText = document.createTextNode(productt.description)
    para.appendChild(paraText)

    let productPreviewDiv = document.createElement('div')
    productPreviewDiv.id = 'productPreview'

    let h3ProductPreviewDiv = document.createElement('h3')
    let h3ProductPreviewText = document.createTextNode('Product Preview')
    h3ProductPreviewDiv.appendChild(h3ProductPreviewText)
    productPreviewDiv.appendChild(h3ProductPreviewDiv);
    // for(let i=0; i<productt.images.length; i++)
    // {
    //     let imgTagProductPreviewDiv = document.createElement('img')
    //     imgTagProductPreviewDiv.id = 'previewImg'
    //     imgTagProductPreviewDiv.src = productt.images[i];
    //         imgTagProductPreviewDiv.onclick = function(event)
    //     {
    //         console.log("clicked" + this.src)
    //         imgTag.src = productt.images[i];
    //         document.getElementById("imgDetails").src = this.src 
            
    //     }
    //     productPreviewDiv.appendChild(imgTagProductPreviewDiv)
    // }

    let buttonDiv = document.createElement('div')
    buttonDiv.id = 'button'

    let buttonTag = document.createElement('button')
    buttonDiv.appendChild(buttonTag)

    buttonText = document.createTextNode('Add to Cart')

    buttonTag.appendChild(buttonText)


    console.log(mainContainer.appendChild(imageSectionDiv));
    mainContainer.appendChild(imageSectionDiv)
    mainContainer.appendChild(productDetailsDiv)
    productDetailsDiv.appendChild(h1)
    productDetailsDiv.appendChild(h4)
    productDetailsDiv.appendChild(detailsDiv)
    detailsDiv.appendChild(h3DetailsDiv)
    detailsDiv.appendChild(h3)
    detailsDiv.appendChild(para)
    productDetailsDiv.appendChild(productPreviewDiv)
    
    
    productDetailsDiv.appendChild(buttonDiv)


    return mainContainer
}

    

fetch('https://fakestoreapi.com/products?limit=10')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    dynamicDetails(data);
  })
  .catch(error => {
    console.log("Error:", error);
  });

