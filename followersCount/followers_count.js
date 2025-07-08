let count = 0; // initialize the count 

function increaseCount() {
    count++;
    displayCount();
    checkCountValue();
}

function resetCount(){
    count = 0;
    displayCount();
    alert("You are back to 0 followers!")
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count;
}


function checkCountValue() {
    if (count === 10) {
        alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if (count === 20) {
        alert("Your Instagram post gained 20 followers! Keep it up!");
    }
}