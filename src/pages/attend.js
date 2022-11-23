

import { useState } from "react";
import axios from 'axios'
import{useNavigate} from 'react-router-dom';
import Webcam from "react-webcam";
 

import React from 'react';
import "../index.css"


class Attend extends React.Component {
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

     
      
      axios.post('http://localhost/doame/src/php/atend.php', fd
      ).then(res=>
      {
       
        
    this.myFormRef.reset();
    alert("attend");
   
    }
   
    );
    }
    capture = () => {
      const imageSrc = this.webcam.getScreenshot();
    };
  render() {
 
    return (
<section
  class="relative bg-[url(https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/abstract-wave-background_G1nIYOR__SB_PM.jpg)] bg-cover bg-center bg-no-repeat"
>
<nav class="flex border-b border-gray-100 text-sm font-medium">
  <a href="attend" class="-mb-px border-b border-current p-4 text-cyan-500">
    Ateend
  </a>

  <a href="about" class="-mb-px border-b border-transparent p-4 hover:text-cyan-500">
    About
  </a>

  <a href="contact" class="-mb-px border-b border-transparent p-4 hover:text-cyan-500">
    contact us
  </a>
</nav>


  <div
    class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen"
  >
   <div class="max-w-xll">
    <Webcam
    width={450}
    height={500} />;
 </div>
 <div class="max-w-xll">
 <input></input>
 </div>
    <div class="max-w-xl text-center sm:text-left padding:50%">
      <h1 class="text-3x2 font-extrabold sm:text-5xl">
      Hey, you in

        <strong class="block font-extrabold text-rose-700">
       mayyas attend        </strong>
      </h1>

      <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
      In this system, we are pleased to record your attendance times
I hope you like it      </p>
<form ref={(el) => this.myFormRef = el}  >

      <div class="mt-8 flex flex-wrap gap-4 text-center">
      <input
          name="id"
          type="number"
            class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
            placeholder="Enter Your ID"
            ref="id"

          />

        <a
          href="#"
          onClick={this.addFormData}
          class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          attend Now
        </a>
      </div>
      </form>
    </div>
    
  </div>
  
</section>

 )
};
}
export default Attend;
