import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { fetchUserDataAsync } from "../authSlice"
import { useDispatch } from "react-redux"

const SignUp=()=>{
  const dispatch=useDispatch()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
   dispatch(fetchUserDataAsync(data))
    console.log(data)
  }


  console.log(watch("example")) // watch input value by passing the name of it
return(<div>
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/>
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign Up</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form noValidate onSubmit={handleSubmit(onSubmit)}class="space-y-6" >
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div class="mt-2">
          <input id="email"  {...register('email',{required:'email is required'
          ,pattern:{
            value:/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
            message:"Email is not valid"
          }})}type="email" class="block w-full rounded-md border-0 p-5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          {/* {errors.email&&<span>{errors.email.message}</span>}
           */}
           <p className="text-red-500">{errors?.email?.message}</p>
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
        </div>
      
        <div class="mt-2">
          <input id="password"  {...register('password',{required:'password is required',
        pattern:{
          value:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
          message:"- at least 8 characters\n- must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number\n- Can contain special characters"
        }})}type="password"   class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm p-5 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
           <p className="text-red-500">{errors?.password?.message}</p>
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
        </div>
      
        <div class="mt-2">
          <input id="confirmpassword"  {...register('confirmpassword',
          {required:'confirmpassword is required',validate: (value, formValues) => value === formValues.password||'please enter matching password'})}type="password"   class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 p-5 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
           <p className="text-red-500">{errors?.confirmpassword?.message}</p>
        </div>
      </div>

      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign Up</button>
      </div>
    </form>
    <p class="mt-10 text-center text-sm text-gray-500">
      Already a member?
      <Link  to='/login' class="font-semibold leading-6 text-blue-600 hover:text-indigo-500">SignIn </Link>
    </p>
  </div>
</div>
</div>)
}
export default SignUp