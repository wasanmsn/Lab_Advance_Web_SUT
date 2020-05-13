function checkAuth(username,pass) {

    return new Promise((resolve, reject) => {
      setTimeout(() => {
          if (username == 'wasan' && pass == '6015145') {
              console.log('---checkAuth---')
              resolve({autData:username+pass})
          } else {
              reject(new Error('Authenitication Fail!!'))
          }
      }, 2000);
    })
    
    
}
function getStudent() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
          console.log('---getStudent---')
          const data = {name : 'Wasan Chatchamnan',permission:'Admin'}
          resolve(data)
      }, 3000);
    })

    
}

async function getTheResult() {
    const auth = await checkAuth('wasan','6015145')
    const data = await getStudent(auth)
    console.log(data)
}

console.log('---Start---')
getTheResult()
console.log('---Finish---')