// let sum: number = 0

// for (let i = 1; i <= 31; i+++){
//      sum = sum + 1
// }

// console.log('Total: ', sum)

let sum: number = 0

while (i <= 31){
    sum = sum + i
}

let sum: number = 0
let i: number = 1
//

do {
    sum =  sum + i
    i++
} while (i <= 31)

console.log('Total: ',sum)

let sum: number = 0
let i: number = 1
//

while (i <= 31) {
    sum = sum + i
    i++
}

console.log('Total: ',sum)
//
let count: number = 0

while (true){
    console.log("โสดโว้ย")
    count++
    if (count === 10){
        break
    }
}
//เบรคตัวลูป ใส่if
let count: number = 1

while (true){
    console.log("ฉันอายุ "+count.toString()+"ปี")
    count++
    if (count === 19){
        break
    }
}
//whileคือลูปเก็บรอบ

for (let i = 1; i <= 18; i++){
    console.log('ฉันอายุ'+ i + "ปี")
}
//เเบบง่ายสั้นๆ

let car1: string = 'Toyota'
let car2: string = 'honda'
let car3: string = 'Suzuki'
let car4: string = 'Yamaha'
let car5; string = 'Mazda'

//const cars: string[] = ['Toyota','Honda','Suzuki','Yamaha','Mazda']

const cars: string[] = ['Toyota','Honda','Suzuki','Yamaha','Mazda']

for(let i = 0; i< 5; i++){
    console.log(cars[i])
}
//วนลูปเรียกค่าทั้ง5
const cars: string[] = ['Toyota','Honda','Suzuki','Yamaha','Mazda','Byd']

for(let i = 0;i< cars.length; i++){
    console.log(cars[i])
}
//วนลูปตามค่า arrayเริ่มจาก0 วนรอบไม่เกินความยาวของค่าที่กำหนดไว้
for(let i = 0;i<cars.length; i++){
    if (cars[i]=== 'Yamaha'){
        console.log('รถซื้อเเกง จะเเรงได้ไง')
    }
} 
//เเบบเจอค่าyamahaให้เปลี่ยนเป็นรถซื้อเเกง จะเเรงได้ไง
const F: string[] = ['pim','L','ink','first','V']

for (let i = 0;i<5; i++){
    if (F[i] === 'L'){
        console.log('ไปกินหมูกะทะกัน')
    }else{
        console.log('ไม่เจอชื่อที่จะชวนไป')
    }
}

const num: number[] = [0,1,2,3,4,5,6,7,8,9,10]

for(let i = 0;i<11;i++){
    if(num[i]=== 3||num[i]===5||num[i]===7){
        console.log(0)
    }else{
        console.log(num[i])
    }
}
//ต้องทำการตรวจสอบทุกค่า 
//num[i]===...=ตรวจสอบเพราะจิงเท็จเป็น0,1 0=เท็จ 1=จริง