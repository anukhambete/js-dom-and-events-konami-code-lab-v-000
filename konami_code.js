const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
// 37 - left arrow key 38 --up        39-right 40-down
// up,up,down,down,left,right,left,right,a,b
function init() {
  // Write your JavaScript code inside the init() function
  let index = 0;
  document.body.addEventListener('keydown', function(e){
  const key = parseInt(e.which || e.detail);
  if (key === code[index]) {

  	index++;

  	if(index === code.length) {
  		alert('Hurray!');
  		index = 0;
  	}
    } else {
      index = 0;
      }
});

}

init();
//document.body.addEventListener('keydown', init);

//document.body.addEventListener('keydown',init);
