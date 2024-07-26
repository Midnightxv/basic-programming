function helloWorld() {
    console.log("สวัสดี");  
}

helloWorld() //ไม่มี input ไม่มี output

function helloName(name: string){
     console.log(name)
}

helloName('Max') //มี input ไม่มี output

function  getPi() {
    return 3.14
}

console.log(getPi()) //ไม่มี input เเต่มี output

function st(fname: string, sname: string) {
    if (fname === 'mix' && sname === "zane") {
        console.log('เริ่มสอน')
    } else {
        console.log('ไม่สอน')
    }
}

st('mix','zane')