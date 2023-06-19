"use client"

import { useState } from "react"
import cn from "classnames"
import { Field, Form, Formik } from "formik"
import * as Yup from "yup"

import { useAuth, VIEWS } from "../AuthProvider"
import supabase from "../../supabase-browser"

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
})

const SignUp = () => {
  const { setView } = useAuth()
  const [errorMsg, setErrorMsg] = useState(null)
  const [successMsg, setSuccessMsg] = useState(null)

  const getURL = () => {
    let url = "http://localhost:3000/dashboard2"
    // Make sure to include `https://` when not localhost.
    // url = url.includes("http") ? url : `https://${url}`
    // // Make sure to including trailing `/`.
    // url = url.charAt(url.length - 1) === "/" ? url : `${url}/`
    return url
  }

  async function signUp(formData) {
    const { error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        emailRedirectTo: getURL(),
      },
    })

    if (error) {
      setErrorMsg(error.message)
    } else {
      setSuccessMsg(
        "Success! Please check your email for further instructions."
      )
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Create Account</h2>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={SignUpSchema}
          onSubmit={signUp}
        >
          {({ errors, touched }) => (
            <Form className="auth-form">
              <label htmlFor="email">Email</label>
              <Field
                className={cn("auth-input", errors.email && "bg-red-50")}
                id="email"
                name="email"
                placeholder="jane@acme.com"
                type="email"
              />
              {errors.email && touched.email ? (
                <div className="text-red-600">{errors.email}</div>
              ) : null}

              <label htmlFor="email">Password</label>
              <Field
                className={cn(
                  "auth-input",
                  errors.password && touched.password && "bg-red-50"
                )}
                id="password"
                name="password"
                type="password"
              />
              {errors.password && touched.password ? (
                <div className="text-red-600">{errors.password}</div>
              ) : null}

              <button className="auth-button" type="submit">
                Submit
              </button>
            </Form>
          )}
        </Formik>
        {errorMsg && <div className="text-red-600 text-center">{errorMsg}</div>}
        {successMsg && (
          <div className="text-black text-center">{successMsg}</div>
        )}
        <button
          className="text-cyan-400 w-full"
          type="button"
          onClick={() => setView(VIEWS.SIGN_IN)}
        >
          Already have an account? Sign In.
        </button>
      </div>
    </div>
  )
}

export default SignUp
