var hamburger = document.getElementById("hamburger");
var cancel = document.getElementById("cancel");
var details = document.getElementById("details");

var hamburgerrr = () => {
  hamburger.style.display = "none";
  cancel.style.display="block";
  details.style.display="block";
};


var cancelll = () => {
    hamburger.style.display = 'block';
    cancel.style.display = "none";
    details.style.display="none";
}
