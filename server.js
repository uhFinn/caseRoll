/**
 * Time Complexity: O(1)
 */

 function calcRoll(values) {
    let odds = { ... values }
  
    totalVal = 0
    for(i in odds) totalVal += odds[i]
  
    totalVal = (1/totalVal)
    for(i in odds) {
      odds[i] *= totalVal
      odds[i] = 1/odds[i]
    }
  
    totalVal = 0
    for(i in odds) totalVal += odds[i]
    
    totalVal = (1/totalVal)
  
    for(i in odds){
      odds[i] *= totalVal
    }
    console.log(odds)
  
    let totalPrizeValues = {}
    let totalValue = 0
    for(i in odds) {
      totalPrizeValues[i] = odds[i] * values[i]
      totalValue += totalPrizeValues[i]
    }
  
    console.log(totalPrizeValues)
    console.log(`Total value of prizes distributed: $${totalValue/100}`)
    console.log(`Average win per spin (Cents): ${totalValue}`)
    console.log(`Average win per spin: $${(totalValue)/100}`)
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /**
   * Below here isnt the actual code for calculating stuff,
   * Just for simulating rolls and showing data
   */
  
  
  
  let valsGivenOut = {}
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
  calcRoll(values)