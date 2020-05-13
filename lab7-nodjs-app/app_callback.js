function myReq(mess,callback) {
    console.log('---Start---')
    const res = mess+' done!!';
    const err = undefined;
    const result = callback(err,res);
    console.log(result);
    console.log('---Finish---');
}

function myCallBack(err,res) {
    if(err){
        return 'Error '+err;
    }
    else{
        return res;
    }
}

myReq('Hello World',myCallBack);