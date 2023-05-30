import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvide";
import Swal from "sweetalert2";
import Social from "./SocialLogin.jsx/Social";

const SignUp = () => {
  const { createUser,  updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);

      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const saveUser = { name: data.name, email: data.email };
          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                // reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User created successfully.",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <PageTitle title={"Sing up"}></PageTitle>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign up now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-500">name field is required</span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                {...register("photoURL", { required: true })}
                placeholder="Photo URL"
                className="input input-bordered"
              />
              {errors.photoURL && (
                <span className="text-red-600">Photo URL is required</span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">Email field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>

              {/* STRONG PASSWORD VALIDATION================================ START========================== */}
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: /^(?=.*[A-Z])(?=.*[0-9])/,
                })}
              />
              {errors.password?.type === "required" && (
                <span className="text-red-500">Password field is required</span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-red-500">
                  password must be greater then 6 characters
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="text-red-500">
                  password must be one uppercase and one number
                </span>
              )}
              {/* STRONG PASSWORD VALIDATION================================END========================== */}
              <label className="label text-center">
                <p>
                  Already sign in go to{" "}
                  <Link className="btn btn-xs" to="/login">
                    Login
                  </Link>
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn btn-primary"
                value={"sign up"}
              />
            </div>
          </form>
          <div className="text-center">
            <Social></Social>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
