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


  //render variable in correct span

  //make the request



var button = document.getElementById('counter');
button.onclick = function(){

  //request object created
  var request = new XMLHttpRequest();
  //capture response and store it in variable
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

  //render variable in correct span

  //make the request
  request.open('GET','http://localhost:8080/counter', true);
  request.send(null);
};
//submit name

var submit = document.getElementById('submit_btn');
submit.onclick = function(){
  //make a request to server and the name
  var request = new XMLHttpRequest();
  //capture response and store it in variable
  request.onreadystatechange = function(){
    if(request.readyState === XMLHttpRequest.DONE){
      //Taking action
      if(request.status === 200){
        var names = request.responseText;
        names = JSON.parse(names);
        var list ='';
        for(var i= 0;i<names.length;i++){
          list+= '<li>'+ names[i] +'</li>';
        }
        var ul = document.getElementById('namelist');
        ul.innerHTML = list;
        var numberofnames = document.getElementById('numberofnames');
        numberofnames.innerHTML = i.toString();
      }
    }
  };

  //render variable in correct span

  //make the request
  var nameInput = document.getElementById('name');
  var name = nameInput.value;
  request.open('GET','http://localhost:8080/submit-name/'+ name, true);
  request.send(null);
  //compare a list of names and render it on a list

}
