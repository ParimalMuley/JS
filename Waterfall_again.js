//lets try waterfall model 
//lets define a problem statement to focus on
//lets integrate some defined statements to cook a noodle packet with the following stages
/*1. Boil water
  2. cut the noodle packet and add it to the boiling water
  3. add the masala mix to it 
  4. cook it for two minutes */
  //correcting the mistake I made earlier by re- understanding the concepts and the error.
  //lets create the first promise.
  var boilWater = new Promise(function(res,rej){
    return res("water has started boiling ");
  })
  var cutNoodles=boilWater.then(function(data)
  {
    console.log(data);
    //the mistake was made here we need to return a promise here which we were not doing and were trying to acces it again outside the func.
    return new Promise(function(res,rej){
        return res("added the noodles to the boiling water ");
        //now here as we are returning the promise we need to add a var, let, const that will contain the promise 
    })
  })
  var masalaMix=cutNoodles.then(function(data){
    console.log(data)
    return new Promise(function(res,rej){
        return res("added the masala mix");
    })

  })
 var cook= masalaMix.then(function(data)
  {
    console.log(data);
    return new Promise((res,rej)=>{
        return res("cooked for two miutes");
    }) 
  })
  cook.then((data)=>{
    console.log(data);
  })

  
  