#pragma strict

var target : Transform;
var xOffset : float;
var yOffset : float;
var zOffset : float;

function LateUpdate () 
{
	transform.position = target.position + Vector3(xOffset, yOffset, zOffset);
	// transform.LookAt (target);
}