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

function tt(fname: string, sname: string) {
    if (fname === 'mix' && sname === "zane") {
        console.log('เริ่มสอน')
    } else {
        console.log('ไม่สอน')
    }
}

st('mix','zane')

function th(fname: string, sname: string, kname: string){
    if ((fname === 'mix'|| sname === "zane") && kname === "forth") {
        console.log("เริ่มสอน")
    } else {
        console.log("ไม่สอน")
    }
}
st("mix","zane","forth")

function sd(sex: string, hight: number, weight: number){
    if (sex === 'man'&& hight > 170 || weight === 50>=110){
        console.log('จับใบดำใบเเดง')
    } else{
        console.log("ไม่เข้าเกณฑ์")
    }
}
sd('man',170,60)