var button = document.createElement("button");
button.innerHTML = "Contact Me";


var body = document.getElementsByTagName("body")[0];
body.appendChild(button);


button.addEventListener ("click", function() {
  alert("jnellis185@gmail.com");
});