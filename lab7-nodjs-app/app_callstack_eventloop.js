function myAsync(callback) {
    console.log('---Start---');
    setTimeout(() => {
         const res = callback('First');
         console.log(res);
    }, 2000);
    setTimeout(() => {
        const res = callback('Second');console.log(res);
   }, 1000);
   setTimeout(() => {
        const res = callback('Third');console.log(res);
    }, 0);

    console.log('---Finish---');


}
function myCallback(mess) {
    return mess+ ' done!!';
}

myAsync(myCallback);