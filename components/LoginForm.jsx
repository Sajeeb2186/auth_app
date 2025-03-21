import Link from "next/link";


export default function LoginForm() {
  return (
    <div className="grid  place-items-center  h-screen ">


      <div className="shadow p-5 rounder-lg border-t-4 border-green-400">
        <h1 className="text-xl font-bold my-4">Enter the Details</h1>
        <form className="flex flex-col gap-3">
          <input type="text" name="" id="" placeholder="Email" />
          <input type="password" name="" id="" placeholder="Password" />

          <button className="bg-green-600 text-white font-bold   cursor-pointer px-6 py-2">Login</button>

          <div className="bg-red-500 text-white w-fit text-sm p-1 rounded ">
            Error message
          </div>

         {/* <Link>


         Don't have an account? <span className="underline">Register</span>
         
         
         
         </Link> */}


          

        </form>
      </div>
     </div>
  )
}
