import React ,{useState} from "react";
import App from './App.css';


const Contact = () => {

  const [data, setData] = useState({
    fullname:"",
    phone:"",
    email:"",
    msg:"",
    })

    const InputEvent = (event) =>{
      const {name, value} = event.target;

      setData((preVal) => {
        return {
          ...preVal,
          [name]: value,
        };
      });

    };

  const formSubmit  = (e)=> {
    e.preventDefault();
    alert(
      `Your name is ${data.fullname}. Your mobile number is ${data.phone} and email is ${data.email}, and Here is what you want to say-: ${data.msg}`
      );
  };

    return(
        <>
        <div class="contact">
        <div className="mt-5">

        <h1 className="text-center"> Contact Us </h1>
        </div>
        <div className="container  contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit}>
                    
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Full Name</label>
    <input type="text" class="form-control" 
    name="fullname"
    value={data.fullname}
    onChange={InputEvent}
    placeholder="Enter your Name" id="exampleInputEmail1" aria-describedby="emailHelp" required  />
    <div id="emailHelp" class="form-text" ></div>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Phone Number</label>
    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    name="phone"
    value={data.phone}
    onChange={InputEvent}
     placeholder="xxxxxxxxxx" required />
    <div id="emailHelp" class="form-text " placeholder="mobile number" required  ></div>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email Address</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    name="email"
    value={data.email}
    onChange={InputEvent} 
    placeholder="abc@gmail.com" required  />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Message</label>
    <textarea class="form-control" rows="3"
     name="msg"
     value={data.msg}
     onChange={InputEvent} 
    >

    </textarea>
   
    
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

export default Contact;