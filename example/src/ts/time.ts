function getFutureTime(hours: number): string {
  let date = new Date();
  date.setHours(date.getHours() + hours);

  return ('0' + date.getHours()).slice(-2)
    + ':' + ('0' + date.getMinutes()).slice(-2)
    + ':' + ('0' + date.getSeconds()).slice(-2);
}

window.onload = () => {
  document.getElementById('currentTime').innerText = getFutureTime(0);
  document.getElementById('futureTime').innerText = getFutureTime(8);
}
