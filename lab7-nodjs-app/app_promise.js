const p =  new Promise((resolve, reject) => {
  setTimeout(() => {
      let sid = "B6015145"
      if(sid){
          resolve({id:sid,name:"wasan"})
      }
      else{
          reject(new Error('Error 404 Bad Request'))
      }
  }, 1000);
})

p.then(res =>{
    console.log(res)
})
.catch(err => {
    console.log(err)
})
