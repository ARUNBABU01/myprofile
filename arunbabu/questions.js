

const arr = [
    {
      "name": "Orange",
      "expired": false,
      "expiryDate": 165716
    },
    {
      "name": "Apple",
      "expired": true,
      "expiryDate": 1657154477
    }
  ]
  
  
  const fixedExpiryDate = new Date('28-02-2023')
  
  // 01 mat not expired, 
  // 27 expired
  
  const returnList = arr.filter( prod => {
  
    const {expired, expiryDate} = prod
    if(expired) {
      return !!prod
    }
    return expiryDate <= fixedExpiryDate
     
  })
  
console.log({returnList});

  const newObj = {}
  
  returnList.forEach( item => {
  
      newObj[item.name] = {...item}
  })
  
  console.log({newObj});
  
  
  const newObjList2 = returnList.reduce( (newObj, item) => {
    newObj[item.name] = {...item}
    return newObj
  },{})
  
  console.log({newObjList2});