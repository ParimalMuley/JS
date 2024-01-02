//lets try waterfall model 
//lets define a problem statement to focus on
//lets integrate some defined statements to cook a noodle packet with the following stages
/*1. Boil water
  2. cut the noodle packet and add it to the boiling water
  3. add the masala mix to it 
  4. cook it for two minutes */

  var boil = new Promise(function(res,rej)
  {
    return res("water started boiling");
  })
  let secondstate =boil.then(function(data)
  {
    console.log(data)

    var cutNoodles= new Promise(function(res,rej)
    {
        return res("Noodles has been cut and added to the boling water");

    })
}  )
  secondstate.cutNoodles.then(function(data)
  {
    console.log(data)
    var Masala = new Promise(function(res,rej)
    {
        return res("masala has been added to the boiling noodles");
    })}
  )
  Masala.then(function(data)
  {
    console.log(data)
    var cook = new Promise(function(res,rej)
    {
        return res("noodles cooked for more than two minutes")

    })
}
  )
  cook.then(function(data)
  {
    console.log(data);
    console.log("all functions completed");
  })