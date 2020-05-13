function func_1() {
    setTimeout(() => {
        return console.log('The first function done!!');
    }, 3000);
}

function func_2() {
    return console.log('The second function done!!');
}

func_1();
func_2();