import { useRef } from "react";
import { useHistory } from "react-router-dom";
import { useUserStore } from "../../../store/useUserStore";

function LoginBiker() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const history = useHistory();

  const { loginBiker } = useUserStore();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await loginBiker(
        emailInputRef.current.value,
        passwordInputRef.current.value
      );
      console.log(response.body);
      if (response) history.push("/bikers");
    } catch (error) {}
  };
  return (
    <>
      <div className="card w-full max-w-sm shadow-xl bg-base-100">
        <div className="card-body">
          <h1 className="text-center text-xl">Login Biker</h1>
          <div className="form-control">
            <form onSubmit={handleSubmit}>
              <input
                className="input input-bordered w-full mb-2"
                ref={emailInputRef}
                placeholder="Email"
                name="email"
                type="text"
                required
              />
              <input
                className="input input-bordered w-full mb-2"
                ref={passwordInputRef}
                name="password"
                type="password"
                placeholder="Password"
                required
              />

              <button className="btn btn-primary w-full" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginBiker;
