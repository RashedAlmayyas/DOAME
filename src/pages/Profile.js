import "../index.css"
import axios from 'axios'
import React from 'react'


class Profile extends React.Component {
   constructor(props) {
     super(props)
       this.state = {
         data: [],
         file: []
               }
       }
       
       componentDidMount(){
         axios.get('http://localhost/doame/src/php/Tabel.php').then(res => 
         {
         
         this.setState({data: res.data});
            }); 
         
         }

         download(){
          axios({
            url: 'http://localhost/doame/src/php/download.php',
            method: 'GET',
            responseType: 'blob', 
          }).then((response) => {
             const url = window.URL.createObjectURL(new Blob([response.data]));
             const link = document.createElement('a');
             link.href = url;
             link.setAttribute('download', 'file.xls');
             document.body.appendChild(link);
             link.click();
          });
          
          }
     
  
   render() {
    return (<div >
  <section class="relative flex flex-wrap lg:h-screen">
    
  <div class="w-full ">
  <button onClick={this.download}  class="rounded-lg bg-orange-500 px-2 py-3 text-sm font-medium text-white right right" >download</button>

    <table  class="min-w-full divide-y divide-gray-200 text-sm">
          <thead class="bg-gray-100">
            <tr>
              <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900" >ID</th>
              <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">name</th>
              <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">time</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
          {this.state.data.map((result) => {
            return (
                 <tr>
                  <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{result.id}</td>
                  <td class="whitespace-nowrap px-4 py-2 text-gray-700">{result.name}</td>
                  <td class="whitespace-nowrap px-4 py-2 text-gray-700">{result.time}</td>
                </tr>
             
            )
          })}
           
            
          </tbody>
        </table>
       </div>
      
  
  </section>
  </div>
)
};
}
export default Profile;