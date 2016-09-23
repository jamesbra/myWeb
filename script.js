

function imageRandom(){
var imageArray = ["fhMJPN0.jpg","GDyvZZF.gif","9EKhBNa.mp4","fastest.jpg"];
var item = imageArray[Math.floor(Math.random()*imageArray.length)];
}
document.getElementID('picture').src=imageArray[item];
