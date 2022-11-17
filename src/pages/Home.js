import "../index.css"
import Webcam from "react-webcam"

export default function Contact() {
  return <div>
<section class="relative flex flex-wrap lg:h-screen lg:items-center">
  <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
    <div class="mx-auto max-w-lg text-center">
      <h1 class="text-2xl font-bold sm:text-3xl">Hi  Attend Now</h1>

    
    </div>

    <form action="" class="mx-auto mt-8 mb-0 max-w-md space-y-4">
      <div>
        <label for="name" class="sr-only">Name</label>

        <div class="relative">
          <input
            type="text"
            class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
            placeholder="Enter name"
          />

       
        </div>
      </div>

    
      <div class="flex items-center justify-between">
      

        <button
          type="submit"
          class="ml-3 inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
        >
           Attend Now
        </button>
      </div>
    </form>
  </div>

  <div class="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
  <Webcam/>

  </div>
</section>
</div>
}
