function Delete(de){
    dee()
            async function dee(){
              let addto_url=`http://localhost:5555/addtocart/${de}`  
              console.log(addto_url)
              let response=await fetch(addto_url,{
                  method:"DELETE",
              })
              let data=await response.json()
              console.log(data)
            }
            location.reload()
   }