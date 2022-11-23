

import { useState } from "react";
import axios from 'axios'
import{useNavigate} from 'react-router-dom';
 

import React from 'react';
import "../index.css"


class Regster extends React.Component {
  constructor(props)
    {
      super(props);
      this.addFormData = this.addFormData.bind(this);
    }
  addFormData(evt)
    {
      evt.preventDefault();
      const fd = new FormData();
      fd.append('id', this.refs.id.value);
      fd.append('email', this.refs.email.value);
      fd.append('name', this.refs.name.value);
      fd.append('pass', this.refs.pass.value);
     
      
      axios.post('http://localhost/doame/src/php/Register.php', fd
      ).then(res=>
      {
       
         window.location.replace("/attend");
    this.myFormRef.reset();
    
    }
    );
    }

  render() {

    return (
<div>
<nav class="flex border-b border-gray-100 text-sm font-medium">
  <a href="home"class="-mb-px border-b border-transparent p-4 hover:text-cyan-500">
    Home
  </a>

  <a href="about" class="-mb-px border-b border-transparent p-4 hover:text-cyan-500">
    About
  </a>

  <a href="contact" class="-mb-px border-b border-transparent p-4 hover:text-cyan-500">
    contact us
  </a>

  <a href="regster" class="-mb-px border-b border-current p-4 text-cyan-500">
  register
  </a>
</nav>
<section class="relative flex flex-wrap lg:h-screen lg:items-center">
  <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
    <div class="mx-auto max-w-lg text-center">
      <h1 class="text-2xl font-bold sm:text-3xl">Register</h1>

    
    </div>

    <form ref={(el) => this.myFormRef = el}  class="mx-auto mt-8 mb-0 max-w-md space-y-4">
     
    <div>
        <label for="id" class="sr-only">ID</label>

        <div class="relative">
          <input
          name="id"
            type="number"
            class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
            placeholder="Enter National Number"
            ref="id"
          />

       
        </div>
      </div>
      
      <div>
        <label for="email" class="sr-only">Email</label>

        <div class="relative">
          <input
          name="email"
            type="email"
            class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
            placeholder="Enter Email"
            ref="email"
            required
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
            ref="name"
required
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
            ref="pass"
required
          />

        </div>
    
      <div class="flex items-center justify-between">
      
      <button type="submit" class="ml-3 inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white" onClick={this.addFormData}>Register</button>
        

         
          
     
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

 )
};
}
export default Regster;
