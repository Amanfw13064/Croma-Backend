
     document.getElementById('form1').addEventListener('submit',function(e){
        e.preventDefault();
        let pro=document.getElementById("submit12");
           pro.textContent="Proccesing"
          let div=document.getElementById('pro4')
          div.style.display="block"
          setTimeout(()=>{
            var ca=document.getElementById('card').value;
        var da=document.getElementById('date').value;
        var cv=document.getElementById('cvv').value;
        var ow=document.getElementById('owner').value;
        if(ca.length!==16)
        {
            alert("Invalid Card Number")
          let div=document.getElementById('pro4')
          div.style.display="none"
        }
        else if(da.length<4)
        {
            alert("Invalid Date ")
          let div=document.getElementById('pro4')
          div.style.display="none"
        }
        else if(cv.length!==3)
        {
            alert("Invalid CVV Number")
          let div=document.getElementById('pro4')
          div.style.display="none"
        }
        else if(ow.length<4)
        {
            alert("Invalid Card Name")
          let div=document.getElementById('pro4')
          div.style.display="none"
        }else{

         let Payment_details={
             card_number:document.getElementById('card').value,
         date:document.getElementById('date').value,
         cvv_number:document.getElementById('cvv').value,
         holder_name:document.getElementById('owner').value, 
         }

         Payment_details=JSON.stringify(Payment_details)
         Verify()
         async function Verify(){
             let Payment_api="http://localhost:5555/payment";
             let response=await fetch(Payment_api,{
                 method:"POST",
                 body:Payment_details,
                 headers:{
                     'Content-Type':'application/json'
                 }
             })
             let data=await response.json()
             console.log(data)
             if(data.message== 'User with Email already exists'){
                alert("Payment Unsuccessful")
                let pro=document.getElementById("submit12");
           pro.textContent="Proccesing"
          let div=document.getElementById('pro4')
          div.style.display="none"
  }
  else
  {
    setTimeout(()=>{
      alert("Payment Successful")
      alert('Thank You For Shopping')
    let div=document.getElementById('pro4')
    div.style.display="none"
 
    location.href="/Home"
   
    },3000)
    
  }
         }
    
          }},1000)
    })