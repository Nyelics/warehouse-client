import "./Login.css";
import {useRef} from "react";
import {Formik, Form} from "formik";
import {useSignIn} from "../../hooks/useSignIn";
import {useSessionContext} from "../../hooks/useSessionContext";
import {verify} from "../../api/account";
import {useNavigate} from "react-router-dom";
import {Alert, Col, Spinner} from "react-bootstrap";
const Login = () => {
  const {signIn, error, isLoading} = useSignIn();
  const {setSessionData} = useSessionContext();
  const navigate = useNavigate();
  const mainContainer = useRef(null);
  // const passwordInput = useRef(null);

  const routes = [
    {role_name: "Administrator", route: "/dashboard"},
    {role_name: "Warehouse Associate", route: "/qe/dashboard"},
  ];

  async function onSubmit(values, {resetForm}) {
    try {
      const token = await signIn(values);
      if (token) {
        const sessionData = await signInVerification(token);
        routeByRole(routes, sessionData.data.role_name);
      }
    } catch (error) {
      console.error("somethings wrong", error);
    }
    resetForm();
  }

  function routeByRole(routes, roleName) {
    const route = routes.find((r) => r.role_name === roleName);
    if (route) {
      navigate(route.route);
    } else {
      console.log(`cannot find route`);
    }
  }

  async function signInVerification(token) {
    if (token) {
      try {
        const res = await verify(token);
        setSessionData(res);
        return res; // Return the result of the asynchronous operation
      } catch (error) {
        console.error("Error verifying user:", error);
        // Handle errors or return an appropriate value
        return null;
      }
    } else {
      console.log(`Cannot see any token`);
      // Handle the case where token is not present or return an appropriate value
      return null;
    }
  }

  const loginValues = {
    username: "",
    password: "",
  };

  // const showPassword = () => {
  //   if (passwordInput.current.type == "password") {
  //     passwordInput.current.type = "text";
  //     eye.current.classList = "fa fa-eye";
  //   } else {
  //     passwordInput.current.type = "password";
  //     eye.current.classList = "fa fa-eye-slash";
  //   }
  // };

  return (
    <>
      <div className="AdminLogin" ref={mainContainer}>
        <div className="forms-container">
          <div className="signin-signup">
            <Formik
              initialValues={loginValues}
              onSubmit={onSubmit}
              className="form"
            >
              {(formik) => (
                <Form className="sign-in-form">
                  <h2 className="title">Sign up</h2>
                  <div className="input-field">
                    <i className="fas fa-user" />
                    <input
                      type="text"
                      name="username"
                      placeholder="Username"
                      onChange={formik.handleChange}
                      value={formik.values.username}
                    />
                  </div>
                  <div className="input-field">
                    <i className="fas fa-lock" />
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                    />
                  </div>
                  <button
                    type="submit"
                    className="__btn solid"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>
                    ) : (
                      "Login"
                    )}
                  </button>
                </Form>
              )}
            </Formik>

            {error && (
              <Col lg={6}>
                <Alert className="error" variant="danger">
                  {error}
                </Alert>
              </Col>
            )}
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="loginContent">
              <h3>New here ?</h3>
              <p>
                Ready to ship with ease? Sign up now and experience seamless
                freight management!
              </p>
              {/* <button
                className="__btn transparent"
                id="sign-up-__btn"
                onClick={handleSignUp}
              >
                Sign up
              </button> */}
            </div>
            <img src="/img/log.svg" className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="loginContent">
              <h3>One of us ?</h3>
              <p>
                Welcome aboard the kargada freight services! Join us and
                experience seamless shipping like never before.
              </p>
              {/* <button
                className="__btn transparent"
                id="sign-in-__btn"
                onClick={handleSignIn}
              >
                Sign in
              </button> */}
            </div>
            <img src="/img/register.svg" className="image" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
