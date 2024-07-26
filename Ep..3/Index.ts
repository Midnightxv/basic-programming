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

function teach(fname: string, sname: string) {
    if (fname === 'mix' && sname === "zane") {
        console.log('เริ่มสอน')
    } else {
        console.log('ไม่สอน')
    }
}
teach('mix','zane')

function teaching(fname: string, sname: string, kname: string){
    if ((fname === 'mix'|| sname === "zane") && kname === "forth") {
        console.log("เริ่มสอน")
    } else {
        console.log("ไม่สอน")
    }
}
teaching("mix","zane","forth")

function soldier(sex: string, hight: number, weight: number){
    if (sex === 'man'&&( hight > 170 || weight >50 && weight<=110)){
        console.log('จับใบดำใบเเดง')
    } else{
        console.log("ไม่เข้าเกณฑ์")
    }
}
soldier('man',170,60)

function money(age: number,salary: number,total:number ){
    if(age >= 16 && salary < 70000 && total < 500000){
        console.log("รับ10000")
    }else{
        console.log("อด")
    }
}
money(17,20000,300000)
