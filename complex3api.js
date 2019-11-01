
 let apiKey = "42017905a115ec21e231aa7e7578668ee9e7791d"

 const btn = document.querySelector('.button1')
 btn.addEventListener('click', ()=> {
 // getExternalAPI
 // let challenge = document.querySelector('.challenge').value
   fetch (`https://api.census.gov/data/2014/ase/csa?get=NAICS2012_TTL,GEO_TTL,EMP,PAYANN&for=state:*&key=${apiKey}`)
   .then(res=>res.json())
   .then(response=>{
     // console.log(response)
     document.querySelector('#results').innerHTML=response.ETH_GROUP
     // document.querySelector("#results").innerHTML = response
     // for (var i = 0; i < question.length; i++) {
     //   array[i]
   })

   .catch(err=> {
     console.log(`error ${err}`)
     alert("sorry, there are no results for your search")
   })
})
