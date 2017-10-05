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
