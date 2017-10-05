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
var submitcom = document.getElementById('submit_com');
submitcom.onclick = function(){
  //make a request to server and the name
  var request1 = new XMLHttpRequest();
  //capture response and store it in variable
  request1.onreadystatechange = function(){
    if(request1.readyState === XMLHttpRequest.DONE){
      //Taking action
      if(request1.status === 200){
        var commbox = request1.responseText;
        commbox = JSON.parse(commbox);
        var list1 ='';
        for(var i= 0;i<commbox.length;i++){
          list1+= '<li>'+ commbox[i] +'</li>';
        }
        var ul1 = document.getElementById('com_sec');
        ul1.innerHTML = list1;
      }
    }
  };

  //render variable in correct span

  //make the request
  var commentInput = document.getElementById('comment');
  var comme = commentInput.value;
  request1.open('GET','http://localhost:8080/submit-comment/'+ comme, true);
  request1.send(null);
  //compare a list of names and render it on a list

};


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
