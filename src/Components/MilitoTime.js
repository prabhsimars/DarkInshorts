export function padTo2Digits(num) {
    return num.toString().padStart(1);
  }

export function convertMsToTime(milliseconds) {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
  
    seconds = seconds % 60;
    minutes = minutes % 60;
    hours = hours % 24;
  
    // return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`;

    if(padTo2Digits(hours)>0){
      return `${padTo2Digits(hours)}h ago`
    }
    else if(padTo2Digits(hours)<=0){
      return `${padTo2Digits(minutes)}mins ago`
    }

  }