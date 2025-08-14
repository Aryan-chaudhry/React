import {useForm} from "react-hook-form"
import './App.css'
function App() {
 
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm();

  async function onSubmit(data){
    // API call simulating
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Submitting the from", data);
  }

  return (
    
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label >First Name : </label>
        <input {...register('firstName', {required:true, minLength:{value:3, message:"Min len is atleast 3"}})}  />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>
      <br />

       <div>
        <label >Middle Name : </label>
        <input {...register('MiddleName')} />
      </div>
      <br />

       <div>
        <label >Last Name : </label>
        <input {...register('LastName')} />
      </div>
      <br /><br />
      <button type="submit" disabled={isSubmitting}>
          { isSubmitting ? "Submitting..." : isSubmitted ? "🎊Submit Thankyou!" : "Submit"}
      </button>
      <br />

    </form>
  )
}

export default App
