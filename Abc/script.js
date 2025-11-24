let val = document.getElementById('get')
let data = document.querySelectorAll('span');
function startclock(){    
    setInterval(() => {
        const cls = new Date();
        data[0].innerHTML = cls.getHours()
        data[1].innerHTML = cls.getMinutes()
        data[2].innerHTML = cls.getSeconds()
        // startclock()
    }, 1000);
}

startclock()