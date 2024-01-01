//kisi bhi cheez ka promise karna 
//either a promise will be fullfilled or will be rejected if fullfilled it will be resolved 
//and if rejected it will be catch
//step1 promise ko likhna 
const math=require("math");
let promise = new Promise(function(res,rej)
{
   var num = math.floor(math.random()*10);
   if(num > 5)
   {
    return res();
   }
   else if(num<5)
   {
    return rej();
   }
})
promise.then(function()
   {
     console.log("above");
   }
   
   )
   .catch(function(){
    console.log("below"); 
   
   })