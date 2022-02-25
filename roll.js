/**
 * Time Complexity: O(n)
 */

 function roll(dictionaryInput) {
    // We are not going to talk about what is below,
    // This is a horrible work around to cloning an object in node.js, 
    // I would never do this in real code
    let dict = { ... dictionaryInput }
  
    totalVal = 0
    //Calculates total value of all the reward set
    for(i in dict) totalVal += dict[i]
  
    // Gets the reciprocal of the total value
    // Each object is then multiplied by the reciprocal,
    // We then proceed to find the reciprocal of that value,
    // This places them into a decimal odd based on: Highest value, Highest chance
    // This is important for ensuring each prize entry distributes the same~ish value of prizes as others based on their odds
    // All these odds are changed to our main dict value
    totalVal = (1/totalVal)
    for(i in dict) {
      dict[i] *= totalVal
      dict[i] = 1/dict[i]
    }
  
    // Calculating the total value of our newly updated dictionary
    totalVal = 0
    for(i in dict) totalVal += dict[i]
    
    // The total value is once again its reciprocal...
    // Then we iterate through the dictionary and multiply each prize by totalVal
    // This puts it into complete decimal form that will result in all values adding to 1
    totalVal = (1/totalVal)
    for(i in dict) dict[i] *= totalVal
    //console.log(dict)
  
    /**
     * Working out prize based on weighted odds;
     * iterates through the dictionary and adds the value to the variable 'sum',
     * if the random number generated (0-1.000...) is less than or equal to the sum,
     * return the item name won
     */
    var i, sum=0, r=Math.random();
    for (i in dict) {
      sum += dict[i];
      if (r <= sum) return i;
    }
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /**
   * Below here isnt the actual code for calculating stuff,
   * Just for simulating rolls and showing data
   */
  
  
  let spent = 0
  let earnt = 0
  let cost = 39
  let valsGivenOut = {}
  let spins = 100000
  for(let i = 0; i < spins; i++) {
    let values = {
        "R8 Revolver | Skull Crusher": 177,
        "Dual Berettas | Royal Consorts": 60,
        "P250 | Inferno": 55,
        "M249 | Aztec": 50,
        "Five-Seven | Buddy": 50,
        "MP9 | Goo": 40,
        "UMP-45 | Exposure": 53,
        "TEC-9 | Bamboozle": 38,
        "G3SG1 | Stinger": 46,
        "UMP-45 | Moonrise": 36,
        "MP5-SD | Gauss": 45,
        "P90 | Off World": 40,
        "SG 553 | Danger Close": 25,
        "FAMAS | Crypsis": 20,
        "GLOCK-18 | Sacrifice": 14,
        "Five-Seven | Flame Test": 18,
        "DESERT EAGLE | Blue Ply": 15,
        "M4A4 | Magnesium": 12,
        "R8 Revolver | Bone Forged": 8,
        "MP5-SD | Desert Strike": 8,
        "FAMAS | Decommisioned": 8
      }
    let res = roll(values)
    spent += cost
    earnt += values[res]
    if(!valsGivenOut[res]) valsGivenOut[res] = 0
    valsGivenOut[res] += values[res]
  }
  console.log(valsGivenOut)
  let totalGiven = 0;
  for(i in valsGivenOut) {
    totalGiven += valsGivenOut[i]
  }
  console.log(`Total value of prizes distributed: ${totalGiven}`)
  console.log(`Average win per spin (Cents): ${totalGiven/spins}`)
  console.log(`Average win per spin: $${(totalGiven/spins)/100}`)
  console.log('---------')
  console.log(`Spent: $${spent/100}`)
  console.log(`Earnt: $${earnt/100}`)
  console.log(`Profit: $${(spent-earnt)/100}`)