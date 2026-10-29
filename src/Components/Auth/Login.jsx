import { useState } from "react";

function Login({handelLogin}) {
  console.log(handelLogin);
  
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const submitHandel = (e) => {
    e.preventDefault();
    handelLogin(Email,Password);
    // console.log(Email);
    // console.log(Password);
    setPassword("");
    setEmail("");
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center ">
      <div className=" flex justify-center items-center bg-zinc-700 p-20 rounded-xl  border-2 border-solid border-gray-400">
        <form onSubmit={submitHandel} className="flex flex-col  gap-5 ">
          <input
          value={Email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className=" p-4 text-3xl rounded-xl w-100 h-15 border-2 border-solid border-gray-400"        
            required
            type="email"
            placeholder="username"
          />
          <input
          value={Password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
            className=" p-4 text-3xl rounded-xl w-100 h-15 border-2 border-solid border-gray-400"
            required
            // minlength="6"
            // maxlength="8"
            type="Passwordword"
            placeholder="Passwordword"
          />
          <button className="text-3xl bg-green-500 rounded-xl w-100 h-15 ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
