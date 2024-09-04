import { Navbar } from "../components/Navbar";
import map from "../assets/map.jpg"
import alert from "../assets/alert.jpg"
import { Testimonials } from "../components/Testimonials";

export function Defense(){
      return (
            <>
                  <Navbar/>
                  <div className="bg-blue-300 flex w-lvw">
                        <div className="w-1/2 flex flex-col items-center justify-center">
                              <h1 className="font-bold text-2xl m-3">Connect with Us for Empowermemt</h1>
                              <p className="text-sm">Share your thoughts, experiences, and suggestion with Us!</p>
                              <button className= "m-2 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-800 dark:hover:bg-green-700 dark:focus:ring-green-800">Feedback</button>
                        </div>
                        <div className="w-1/2">
                              <img src={map} alt="" className="w-[600px] h-[450px] m-10"/>
                        </div>
                  </div>
                  <div className="flex flex-col justify-center items-center h-60">
                        <h1 className="font-bold text-3xl">Get In Touch</h1>
                        <p>At protect her,we prioritise your input Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem illum nam quo laborum alias ullam odit aperiam voluptas at molestiae.</p>
                  </div>
                  <div className="bg-slate-300 flex w-lvw">
                        <div className="w-1/2">
                              <img src={alert} alt="" className="w-[700px] h-[350px] m-10"/>
                        </div>
                        <div className="w-1/2 flex flex-col  justify-center">
                              <h1 className="font-bold text-3xl my-3">User Experience</h1>
                              <p className="">Share your personal experiences to inspire improvement in our software tailored for safety of women.</p>
                              <div>
                                    <button className= "m-2 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-800 dark:hover:bg-green-700 dark:focus:ring-green-800">User Stories</button>
                                    <button className= "m-2 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-800 dark:hover:bg-green-700 dark:focus:ring-green-800">Feedback</button>
                                    <button className= "m-2 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-800 dark:hover:bg-green-700 dark:focus:ring-green-800">Community</button>
                              </div>
                        </div>
                  </div>
                  
                  <div>
                        <h1 className="text-2xl font-bold mx-5"> User Testimonials</h1>
                        <div className="mx-32 w-[1200px] grid grid-cols-3">
                             <Testimonials name="Alice Smith" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quae et architecto!"/> 
                             <Testimonials name="Alice Smith" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quae et architecto!"/> 
                        </div>
                  </div>
            </>
      )
}