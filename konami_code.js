const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
// 37 - left arrow key 38 --up        39-right 40-down
// up,up,down,down,left,right,left,right,a,b

let index = 0;

function init(e) {
  // Write your JavaScript code inside the init() function
  let var = e.which;
  const key = parseInt(e.which);
  if (key === code[index]) {

  	index++;

  	if(index === code.length) {
  		alert("You did it!!");
  		index = 0;
  	}
    } else {
      index = 0;
      }
}

document.body.addEventListener('keydown', init);

//document.body.addEventListener('keydown',init);
