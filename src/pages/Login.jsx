import { useContext, useEffect, useRef, useState } from "react"
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha"
import { AuthContext } from "../providers/AuthProvide"
import { Link, useLocation, useNavigate } from "react-router-dom"
import PageTitle from "../components/PageTitle/PageTitle"
import Swal from "sweetalert2"

const Login = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || "/"
  const captchaRef = useRef(null)
  const emailRef = useRef(null)
  const [disabled, setDisabled] = useState(true)
  const { signIn, setUser } = useContext(AuthContext)
  console.log(location);

  const handleLogin = (e) => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value
    console.log(email, password)

    signIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user
        setUser(user)
        console.log(user)
        Swal.fire("Login successfully")
        navigate(from, { replace: true })
      })
      .catch((error) => {
        const errorMessage = error.message
        console.log(errorMessage)
      })
  }
  useEffect(() => {
    emailRef.current.focus()
    loadCaptchaEnginge(6)
  }, [])

  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <PageTitle title={"login"}></PageTitle>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  ref={emailRef}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  name="captcha"
                  placeholder="Type the text above"
                  className="input input-bordered"
                  ref={captchaRef}
                  onBlur={handleValidateCaptcha}
                />
                <button className="btn btn-outline btn-xs m-2">validate</button>
              </div>
              <div className="form-control mt-6">
                <input
                  disabled={disabled}
                  className="btn btn-primary"
                  type="submit"
                  value="login"
                />
              </div>
            </form>
            <div className="text-center m-2">
              <p>
                New here ? create a new account{" "}
                <Link to="/signup" className="btn btn-sm">
                  Sign up
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
