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