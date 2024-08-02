function SayHi(dayOfWeek: number) {
    if (dayOfWeek === 1) {
        console.log('สวัสดีวันอาทิตย์')
    } else if (dayOfWeek === 2) {
        console.log('สวัสดีวันจันทร์')
    } else if (dayOfWeek === 3) {
        console.log('สวัสดีวันอังคาร')
    } else if (dayOfWeek === 4) {
        console.log('สวัสดีวันพุธ')
    } else if (dayOfWeek === 5) {
        console.log('สวัสดีวันพฤหัสบดี')
    } else if (dayOfWeek === 6) {
        console.log('สวัสดีวันศุกร์')
    } else if (dayOfWeek === 7) {
        console.log('สวัสดีวันเสาร์')
    }
}
d(6)

function SayHi(dayOfWeek: number) {
    switch (dayOfWeek) {
        case 1:
            console.log('สวัสดีวันอาทิตย์')
            break
        case 2:
            console.log('สวัสดีวันจันทร์')
            break
        case 3:
            console.log('สวัสดีวันอังคาร')
            break
        case 4:
            console.log('สวัสดีวันพุธ')
            break
        case 5:
            console.log('สวัสดีวันพฤหัสบดี')
            break
        case 6:
            console.log('สวัสดีวันศุกร์')
            break
        case 7:
            console.log('สวัสดีวันเสาร์')
            break
    }
}
SayHi(5)

function shirt(size: string) {
    switch (size) {
        case 's':
            console.log('ผอม')
            break
        case 'm':
            console.log('ผอม')
            break
        case 'l':
            console.log('ท้วม')
            break
        case 'xl':
            console.log('อ้วน')
            break
        case '2xl':
            console.log('อ้วน')
            break
    }
}
shirt('2xl')

function fixedDecimal(n: number , digit: number){
    const x = n.toFixed(digit)
    return x
}
console.log(fixedDecimal(40.67676,10))

function num(a:number){
    return a.toLocaleString()
}
console.log(num(100000))

const str: string = "  ณเดชณ์ คุคิ งุงิ  "

console.log(str.trimStart())

const str: string = "  ณเดชณ์ คุคิ งุงิ  "

console.log(str.trimEnd())

const str: string = "  ณเดชณ์ คุคิ งุงิ  "

console.log(str.trim())

const str: string = "Natchaporn"

console.log(str.toLowerCase())

const str: string = "Natchaporn"

console.log(str.toUpperCase())

function checkStringLength(x:string){
    console.log(x.length)
}
checkStringLength('Natchaporn')