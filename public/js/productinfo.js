let flag=0
function addTo(product){
    console.log("fdfd")
    if(flag==1)
    {
        alert(' already in the cart')
    }
    if(flag==0){
     alert('Add To Cart')
        Register()
        async function Register(){
          let addto_url='http://localhost:5555/addtocart'  
          let response=await fetch(addto_url,{
              method:"POST",
              body:product,
              headers:{
                  'Content-Type':'application/json'
              }
          })
          let data=await response.json()
          console.log(data)
        }
        console.log(JSON.parse(product))

        flag=1
    }    
}

