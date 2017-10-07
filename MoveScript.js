var animator : Animator;
var vertical_movement : float;
var horizontal_movement : float;
var move_vector : Vector2; // will store the x and y inputs, converting them to movement
var zero_vector = Vector2(0,0); // zero vector



function Start () {
    animator = GetComponent(Animator); // assigns Animator component on load
}

function Update () {
    vertical_movement = Input.GetAxisRaw("Vertical"); // GetAxis vs. GetAxisRaw
    horizontal_movement = Input.GetAxisRaw("Horizontal");
    move_vector = Vector2(horizontal_movement, vertical_movement);

    if (move_vector != zero_vector) {
        animator.SetBool("iswalking", true);
        // Cartesian movements
        if (Input.GetKey("a")) {
            transform.Translate(Vector2(-1 * Time.deltaTime,0));
            animator.SetFloat("Input_x", -1);
        }
        if (Input.GetKey("d")) {
            animator.SetFloat("Input_x", 1);
            transform.Translate(Vector2(1 * Time.deltaTime,0));
        }
        if (Input.GetKey("s")) {
            animator.SetFloat("Input_y", -1);
            transform.Translate(Vector2(0,-1 * Time.deltaTime));
        }
        if (Input.GetKey("w")) {
            animator.SetFloat("Input_y", 1);
            transform.Translate(Vector2(0,1 * Time.deltaTime));
        }
        // Diagonal Movements
        if (Input.GetKey("w") && Input.GetKey("d")){
            animator.SetFloat("Input_x", 1);
            animator.SetFloat("Input_y", 1);
            transform.Translate(Vector2(0.5 * Time.deltaTime,0.5 * Time.deltaTime));
        } 
        if (Input.GetKey("w") && Input.GetKey("a")){
            animator.SetFloat("Input_x", -1);
            animator.SetFloat("Input_y", 1);
        transform.Translate(Vector2(-0.5 * Time.deltaTime,0.5 * Time.deltaTime));
        } 
        if (Input.GetKey("a") && Input.GetKey("s")) {
            animator.SetFloat("Input_x", -1);
            animator.SetFloat("Input_y", -1);
            transform.Translate(Vector2(-0.5 * Time.deltaTime,-0.5 * Time.deltaTime));
        }
        if (Input.GetKey("d") && Input.GetKey("s")) {
            animator.SetFloat("Input_x", 1);
            animator.SetFloat("Input_y", -1);
            transform.Translate(Vector2(0.5 * Time.deltaTime,-0.5 * Time.deltaTime));
        }
        animator.SetFloat("Input_x", horizontal_movement);
        animator.SetFloat("Input_y", vertical_movement);
    } else {
        animator.SetBool("iswalking", false);
    }
}