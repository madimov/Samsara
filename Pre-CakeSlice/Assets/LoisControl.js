#pragma strict

var moveUp : KeyCode;
var moveDown : KeyCode;
var moveLeft : KeyCode;
var moveRight : KeyCode;

var speed : float = 5;

function Update () {
	if (Input.GetKey(moveUp)) {
		GetComponent.<Rigidbody2D>().velocity.y = speed;
		//GetComponent.<Animation>().animations[0].play;
	} else if (Input.GetKey(moveDown)) {
		GetComponent.<Rigidbody2D>().velocity.y = speed * -1;
	} else {
		GetComponent.<Rigidbody2D>().velocity.y = 0;
	}
	
	if (Input.GetKey(moveRight)) {
		GetComponent.<Rigidbody2D>().velocity.x = speed;
	} else if (Input.GetKey(moveLeft)) {
		GetComponent.<Rigidbody2D>().velocity.x = speed * -1;
	} else {
		GetComponent.<Rigidbody2D>().velocity.x = 0;
	}
}