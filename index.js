// let name = 'Alex'
// let password = 7777
// let cash = 10000

// let userName = prompt('What is ur name?')

// if(userName.trim().toLowerCase() === name.toLowerCase()){
//     let userPassword = +prompt('Enter your password please?')

//     if(userPassword === password){
//         let cashOut = +prompt('How much you wanna out?')

//         if(cashOut <= cash){
//             alert(`
//                Mr ${name}
//                your cash was be: ${cash}
//                your balance now become: ${cash - cashOut}
//                you removed: ${cashOut}
//             `)
//         }else {
//             alert('you havent enough money ')
//         }
//     }else{
//         alert('Wrong password or enter your password again')
//     }
// }else{
//     alert('Wrong user or enter your user name again ')
// }




let userName = prompt('What is your name?')


if(userName[0].toLowerCase().trim() === 'a'){
    let userAge = prompt('How old are you?')

    if(userAge >= 20 && userAge <= 40){
        let cash = prompt('How about your cash ?')

        if(cash >= 100){
            let people = prompt('How many people in your company')

            if(people <= 10){
                alert(`
                   MR ${userName}
                   We glad to see you in our club today!
                `)
            }else{
                alert(`
                    MR ${userName}
                    We dont have enough place today Sorry, but you can join our club next time!
                `)

            }
        }
    }
}