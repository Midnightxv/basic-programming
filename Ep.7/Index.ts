const score=[10,23,26,30,33]
let sum: number =0
for(let i=0;i<score.length; i++){
    sum = sum+score[i]
}
let avg = sum / score.length
console.log('Total;',sum)
console.log('avg:',avg)
//หาผลรวมเเละค่าเฉลี่ยของตัวเลข

const myStudent:string = 'เเซน,เเทน,เวฟ,รุ้ง,เเทค,สร'

const myStudentArray: string[] = myStudent.split(',')

console.log(myStudent)
console.log(myStudentArray)
//string&array

const fullName: string = "สุดสวย สวยสุด"
console.log(fullName.split(' ')[0])

console.log(fullName.slice(0, fullName.indexOf(' ')))
//
const animal:string = 'เเมว*เสือ*หมี*กระต่าย'

const animalArray :string[] = animal.split('*')

console.log(animalArray)
//เเปลงstringเป็นArray

//method
const animal:string = 'เเมว*เสือ*หมี*กระต่าย'
const animalArray :string[] = animal.split('*')

console.log('ตั้งต้น:',animalArray)

animalArray.pop()//เอาตัวสุดท้ายออก
console.log('เอาตัวสุดท้ายออก',animalArray)

animalArray.push('ยีราฟ')//เพิ่มเข้า,ใส่ต่อท้าย
console.log('เพิ่มเข้า',animalArray)

animalArray.shift()//เอาตัวหน้าออก
console.log('เอาตัวหน้าออก',animalArray)

animalArray.unshift('คาปิบาร่า')//เพิ่มเข้าข้างหน้า
console.log('เพิ่มเข้าข้างหน้า',animalArray)
//
const fruits = ["Banana","Orange","Apple","Mango"]

fruits.sort()//เรียงA-z
console.log('เรียงA-Z',fruits)

fruits.reverse()//เรียงZ-a
console.log("เรียงZ-A",fruits)

const friend: string = "เเอล,พืม,อิ๊ง,จีน"

const friendArray:string[] = friend.split(',')

console.log(friendArray)

friendArray.sort()
console.log("เรียงตัวอักษร",friendArray)

friendArray.reverse()
console.log("เรียงกลับหลัง",friendArray)

const me = {
    firstName : 'Natchaporn',
    lastName : 'Lerdrungrassmee',
    age: 18
}
console.log(me)
//ประวัติส่วนตัว
//ชื่อจริง ณัฐชาภรณ์
//นามสกุลเลิศรุ่งรัศมี
//อายุ18