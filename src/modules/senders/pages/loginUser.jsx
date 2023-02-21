import axios from "axios";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import { useUserStore } from "../../../store/useUserStore";

function LoginUser() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const history = useHistory();

  const { loginUser } = useUserStore();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await loginUser(
        emailInputRef.current.value,
        passwordInputRef.current.value
      );
      if (response) history.push("/senders");
    } catch (error) {}
  };
  return (
    <>
      <div className="card w-full max-w-sm shadow-xl bg-base-100">
        <div className="card-body">
          <h1 className="text-center text-xl">Login sender</h1>
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

export default LoginUser;
