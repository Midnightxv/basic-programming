console.log('1')
console.log('2')
console.log('3')
setTimeout(() => {
    console.log('4')
})
console.log('5')



function register(email: string, password: string) {
    if (email.includes("@") && email.lastIndexOf('@') !== email.length - 1) {
        if (password.length > 8 && password.length < 16) {
            const userObject = {
                email: email,
                password: password
            }
            database.push(userObject)
            alert('สมัครสมาชิกเเล้ว ยินดีต้อนรับคุณ' + email)
        } else {
            alert('รหัสผ่านต้องมากกว่า 8 ตัว เเละไม่เกิน 16 ตัว')
        }
    } else {
        alert('Email ไม่ถูกต้อง')
    }
}

const database = [
    {
        email: 'user@gmail.com',
        password: 'loveYou3000'
    }
]
/////////////////functionอีเมล กำหนดรหัสเเละตรวจสอบเมลเเละเก็บไว้ในdatabase////////////////////////////////
//////////วิธีเรียก functionคือ register('eamil','password')//////////////////////////////////////
