import { Box } from "../components/Box"
import { Navbar } from "../components/Navbar"

export function HomePage(){
      return (
            <>
                  <Navbar/>
                  <div className="flex flex-col bg-slate-600 h-[706px] justify-center">
                        <h1 className="text-5xl text-center my-2">Ensuring Safety for Women Everywhere</h1>
                        <p className="text-2xl text-center my-8">Our technology provides real-time detection and analytics to keep urban spaces safe for women.</p>
                        <div className="flex justify-center">
                              <input type="email" placeholder="Enter your email" className="w-96 h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                              <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Get Started</button>
                        </div>
                  </div>
                  <div className="flex flex-col items-center">
                        <h1 className="font-bold text-2xl mt-2">Key Features of SafeGuardAnalysis</h1>
                        <p>We offer unique features tailored to women's safety, ensuring immendiatealerts and assistance when needed</p>
                        <div className="grid justify-center grid-cols-2 mx-20 my-10 ">
                              <Box heading="abc" text="lordsjkfsjhgfhjswgfjhagdgfsdkhgfjhsadgfhjuewgfuyewstfyuwgyu"/>
                              <Box heading="abc" text="lordsjkfsjhgfhjswgfjhagdgfsdkhgfjhsadgfhjuewgfuyewstfyuwgyu"/>
                              <Box heading="abc" text="lordsjkfsjhgfhjswgfjhagdgfsdkhgfjhsadgfhjuewgfuyewstfyuwgyu"/>
                              <Box heading="abc" text="lordsjkfsjhgfhjswgfjhagdgfsdkhgfjhsadgfhjuewgfuyewstfyuwgyu"/>
                              <Box heading="abc" text="lordsjkfsjhgfhjswgfjhagdgfsdkhgfjhsadgfhjuewgfuyewstfyuwgyu"/>
                              <Box heading="abc" text="lordsjkfsjhgfhjswgfjhagdgfsdkhgfjhsadgfhjuewgfuyewstfyuwgyu"/>
                        </div>
                  </div>
            </>
      )
}