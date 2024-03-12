//Question #1;
var my_car = ["Bugatti", "Lamborghini", "ferrari"];
for (var i = 0; i < my_car.length; i++) {
    console.log("I want to buy ".concat(my_car[i]));
}


//Question 21;
var guest = ["Arsalan", "Ishaq", "Junaid"];
for (var i = 0; i < guest.length; i++) {
    console.log("I would like to invite for dinner ".concat(guest[i]));
}


var guestList = ["Arsalan", "Ishaq", "Junaid"];
function replaceGuest(oldGuest, newGuest) {
    var index = guestList.indexOf(oldGuest);
    if (index !== -1) {
        guestList[index] = newGuest;
    }
    else {
        console.log("".concat(oldGuest, " is not in the guest list."));
    }
}
replaceGuest("Junaid", "Danish");
guestList.forEach(function (guest) {
    console.log("I would like to invite for dinner ".concat(guest));
});
