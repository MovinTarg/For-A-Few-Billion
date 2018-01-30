var payment = 0.01;
var reward = 0;

for (var i = 1; i < 10000; i++) {
    reward = reward + payment;
    console.log ("Day: " + i);
    console.log ("Daily Payment = " + payment);
    console.log ("Reward Total = " + reward);
    payment = payment * 2;
    if(reward == Infinity) {
        console.log(i);
        break;
    }
}
