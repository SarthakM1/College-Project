import React from "react";

const SignUp = () => {
    return(
        <>
        <div class="signup">
        <div className="my-5">

        <h1 className="text-center"> SignUp </h1>
        </div>
        <div className="container  contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                <form>
                    
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Full Name</label>
    <input type="text" class="form-control" 
   
    placeholder="Enter your Name" id="exampleInputEmail1" aria-describedby="emailHelp" required  />
    <div id="emailHelp" class="form-text" ></div>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Phone Number</label>
    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
   
     placeholder="xxxxxxxxxx" />
    <div id="emailHelp" class="form-text " placeholder="mobile number" ></div>
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Username</label>
    
    <input type="text" class="form-control" 
   
    placeholder="Enter Username" id="exampleInputEmail1" aria-describedby="emailHelp" required  />
    <div id="emailHelp" class="form-text" ></div>
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">City</label>
    
    <input type="text" class="form-control" 
   
    placeholder="" id="exampleInputEmail1" aria-describedby="emailHelp" required  />
    <div id="emailHelp" class="form-text" ></div>
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">State</label>
    
    <input type="text" class="form-control" 
   
    placeholder="" id="exampleInputEmail1" aria-describedby="emailHelp" required  />
    <div id="emailHelp" class="form-text" ></div>
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Zip</label>
    
    <input type="number" class="form-control" 
   
    placeholder="" id="exampleInputEmail1" aria-describedby="emailHelp" required  />
    <div id="emailHelp" class="form-text" ></div>
  </div>

      

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email Address</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
   
    placeholder="abc@gmail.com" />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  

  <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>

            </div>

        </div>
        </div>
        
       
        </>
    );
};

export default SignUp;