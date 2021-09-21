console.log('Wall clock program');

setInterval(() => {
    let  date = new Date;
    let htime = date.getHours();
    let mtime = date.getMinutes();
    let  stime = date.getSeconds();
    let Hr_Rotation = 30*htime + mtime/2;
    let Mnt_Rotation =  6*mtime;
    let Sec_Rotation = 6*stime;

    hour.style.transform  = `rotate(${Hr_Rotation}deg)`;
    mints.style.transform  = `rotate(${Mnt_Rotation}deg)`;
    seconds.style.transform  = `rotate(${Sec_Rotation}deg)`;
}, 1000);