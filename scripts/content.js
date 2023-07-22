function showAlert(minutes){
    if(minutes !== 15){
        alert('You have spent  ' + minutes + ' minutes YouTubing!')
    }
    else{
        alert('You have spent  ' + minutes + ' minutes YouTubing! Close it NOW!')
    
    }
}
let time = 5
while(time <= 15){
    setTimeout(showAlert, time  * 1000, time)
    time += 5
}