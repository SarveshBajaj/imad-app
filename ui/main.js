/*console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML = 'New Value';

//moving image
var img = document.getElementById('madi');

var marginLeft = 0;

function moveRight(){
  marginLeft = marginLeft+1;
  img.style.marginLeft = marginLeft + 'px';
};
img.onclick = function(){
    var interval = setInterval(moveRight, 50);
}; Old code*/

var button = document.getElementById('counter');
button.onclick = function(){

  //request object created
  var request = new XMLHttpRequest();
  //make a request to counter endpoint
  request.onreadystatechange = function(){
    if(request.readyState === XMLHttpRequest.DONE){
      //Taking action
      if(request.status === 200){
        var counter = request.responseText;
        var span = document.getElementById('count');
        span.innerHTML = counter.toString();
      }
    }
  };
  //capture response and store it in variable

  //render variable in correct span

  //make the request
  request.open('GET','http://localhost:8080/counter', true);
  request.send(null);
};
