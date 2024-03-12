//Question #1;
let my_car: string[] = ["Bugatti","Lamborghini","ferrari"];
for(let i=0; i<my_car.length; i++){
    console.log(`I want to buy ${my_car[i]}`);
    
}

//Question 2;
let guest: string[] = ["Arsalan","Ishaq","Junaid"];
for(let i=0; i<guest.length; i++){
    console.log(`I would like to invite for dinner ${guest[i]}`);
    
}

//Question 3;

let guestList: string[] = ["Arsalan","Ishaq","Junaid"];
function replaceGuest(oldGuest: string, newGuest: string): void {
    const index = guestList.indexOf(oldGuest);
    if (index !== -1) {
        guestList[index] = newGuest;
    } else {
        console.log(`${oldGuest} is not in the guest list.`);
    }
}
replaceGuest("Junaid", "Danish");
guestList.forEach(guest => {
console.log(`I would like to invite for dinner ${guest}`);
});


