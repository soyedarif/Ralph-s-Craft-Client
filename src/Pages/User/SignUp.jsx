import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
const SignUp = () => {
  const { createNewUser, updateUserProfile } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const onSubmit = data => {
    createNewUser(data.email, data.password)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => console.log(error));
  };
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content md:flex ">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" {...register("name", { required: true })} name="name" className="input input-bordered" />
                {errors.name && <span className="text-red-600">Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" placeholder="Photo URL" {...register("photoURL", { required: true })} className="input input-bordered" />
                {errors.photoURL && <span className="text-red-600">PhotoURL is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="password" className="input input-bordered" {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Re-type Password</span>
                </label>
                <input
                  type="password"
                  placeholder="re-type password"
                  className="input input-bordered"
                  {...register("rePassword", {
                    required: true,
                    validate: value => value === watch("password") || "Passwords do not match",
                  })}
                />
                {errors.rePassword && <p className="text-red-600 mt-2">{errors.rePassword.message}</p>}
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Register" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
