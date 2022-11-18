import { useState } from "react";
import axios from 'axios'
import{useNavigate} from 'react-router-dom';
 
import "../index.css"
export default function Regster() {

  
    let Navigate = useNavigate();
    const [data, setData]= useState({
        id:"",
        name:"",
        pass:""
    })

    const handleChange=(e)=>{
        setData({ ...data, [e.target.name]: e.target.value});

        //console.log(data)
    }

    const submitForm=(event)=>{
      event.preventDefault();
       const sendData ={
            id:data.id,
            name:data.name,
            pass:data.pass


        }
                console.log(sendData)

              axios.post('http://localhost/doame/src/php/insert.php',sendData)
               .then((result)=>{
                if (result.data.Status=="invalid"){
                alert('invalid user');}
                else {
                Navigate('/login');
            }
               })

    }
  return <div>
<section class="relative flex flex-wrap lg:h-screen lg:items-center">
  <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
    <div class="mx-auto max-w-lg text-center">
      <h1 class="text-2xl font-bold sm:text-3xl">Contact With Me</h1>

    
    </div>

    <form onSubmit={submitForm}  class="mx-auto mt-8 mb-0 max-w-md space-y-4">
     
    <div>
        <label for="id" class="sr-only">National Number</label>

        <div class="relative">
          <input
          name="id"
            type="number"
            class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
            placeholder="Enter National Number"
            onChange={handleChange} value={data.id}
          />

       
        </div>
      </div>
      <div>
        <label for="name" class="sr-only">Name</label>

        <div class="relative">
          <input
          name="name"
            type="text"
            class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
            placeholder="Enter name"
            onChange={handleChange} value={data.name}

          />

       
        </div>
      </div>

     
      <label for="password" class="sr-only">Password</label>
        <div class="relative">
          <input
          name="pass"
          type="password"
            class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
            placeholder="Enter Password"
            onChange={handleChange} value={data.pass}

          />

        </div>
    
      <div class="flex items-center justify-between">
      

        
                            <input type="submit" name="submit" value="Register" class="ml-3 inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white" />

         
          
     
      </div>
    </form>
  </div>

  <div class="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
    <img
      alt="Welcome"
      src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
      class="absolute inset-0 h-full w-full object-cover"
    />
  </div>
</section>
</div>
}
