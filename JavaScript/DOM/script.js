// console.log("Hey From JS");
// console.log(window);

// getElementById
// getElementsByClassName
// getElementsByTagName

// let P = document.getElementById('heading')
// console.log(P.textContent);
// P.innerText = "This is a Dynamic JS"

// let data = document.getElementsByClassName("heading1")
// console.log(data);
// data[2].setAttribute('style', "color:red")

// let docTag = document.getElementsByTagName('h1')

// console.log(docTag);

// let q = document.querySelector('#heading');
// console.log(q);

let details = document.querySelectorAll('span');

function startclock(){
    setInterval(() => {
        const data = new Date();
        // console.log(data);
        details[0].innerText = data.getHours();
        details[2].innerText = data.getMinutes();
        details[4].innerText = data.getSeconds();  
    }, 1000);
}

// console.log(!false);


// calling function


setInterval(() => {
    console.log("Hey After second");
}, 1000)