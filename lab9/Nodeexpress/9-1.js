const bcr = require('bcryptjs')

async function makeHash(Text) {
    const res = await bcr.hash(Text,10)
    return res
}

async function compareHash(Text,myHash) {
    const resComp = await bcr.compare(Text,myHash)
    return resComp
}

const Text = '523419'

makeHash(Text).then( hash => {
    console.log(hash)

    compareHash(Text,hash).then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
})
.catch(err => {
    console.log(err)
})