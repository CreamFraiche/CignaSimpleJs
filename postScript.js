// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

request.onload = function () {
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.forEach(post => {
    	$(".row").append(toTemplate(post));
    });
  } else {
  	console.log('error');
  }
}

// Send request
request.send();

//Convert the post to HTML
toTemplate = function(post){
	var postString = "";
	postString += "<div class='post-wrapper col-xs-12 col-sm-6 col-md-4 col-lg-3' id=" + post.id +">";
		postString += "<div class='post'>"
			postString += "<div class='title'>"+post.title+"</div>";
			postString += "<div class='body'>"+post.body+"</div>";
			postString += "<div class='userId subtext'>User: "+post.userId+"</div>";
			postString += "<div class='postId subtext'>Id: "+post.id+"</div>";
		postString += "</div>"
	postString += "</div>"
	return postString;
}