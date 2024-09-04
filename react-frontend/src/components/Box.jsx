export function Box(props){
      return (
            <div className="w-96 h-48 p-6 m-3 flex flex-col bg-black rounded-lg ">
                  <div className="block h-10 w-10 border-black border-2 bg-white"></div>
                  <h1 className="text-base font-bold text-white ">{props.heading}</h1>
                  <p className="truncate w-50 h-10 text-white ">{props.text}</p>
            </div>
      )
}