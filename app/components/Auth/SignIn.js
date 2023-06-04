"use client"

import { useState } from "react"
import cn from "classnames"
import { Field, Form, Formik } from "formik"
import * as Yup from "yup"

import { useAuth, VIEWS } from "../AuthProvider"
import supabase from "../../supabase-browser"

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
})

const SignIn = () => {
  const { setView } = useAuth()
  const [errorMsg, setErrorMsg] = useState(null)

  async function signIn(formData) {
    const { error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    })

    if (error) {
      setErrorMsg(error.message)
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Sign In</h2>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={SignInSchema}
          onSubmit={signIn}
        >
          {({ errors, touched }) => (
            <Form className="auth-form">
              <label htmlFor="email">Email</label>
              <Field
                className={cn(
                  "auth-input ",
                  errors.email && touched.email && "bg-red-50"
                )}
                id="email"
                name="email"
                placeholder="example@gmail.com"
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

              <button
                className="text-cyan-400 w-full "
                type="button"
                onClick={() => setView(VIEWS.FORGOTTEN_PASSWORD)}
              >
                Forgot your password?
              </button>

              <button className="auth-button" type="submit">
                Submit
              </button>
            </Form>
          )}
        </Formik>
        {errorMsg && <div className="text-red-600">{errorMsg}</div>}
        <button
          className="text-cyan-400 w-full"
          type="button"
          onClick={() => setView(VIEWS.SIGN_UP)}
        >
          Don&apos;t have an account? Sign Up.
        </button>
      </div>
    </div>
  )
}

export default SignIn
