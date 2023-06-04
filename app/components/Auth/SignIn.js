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
    <div className=" w-full flex justify-center">
      <div className=" w-[20rem] items-center gap-8 rounded-2xl bg-white py-8 px-4 shadow-md sm:w-[24rem] sm:px-10">
        <h2 className="w-full text-center text-3xl font-semibold my-6">
          Sign In
        </h2>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={SignInSchema}
          onSubmit={signIn}
        >
          {({ errors, touched }) => (
            <Form className="flex flex-col items-start justify-center gap-4">
              <label htmlFor="email">Email</label>
              <Field
                className={cn(
                  "custom-focus w-full rounded-xl border border-slate-300 focus:shadow-none py-2 px-[0.5rem] ",
                  errors.email && touched.email && "bg-red-50"
                )}
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
                  "custom-focus w-full rounded-xl border border-slate-300 focus:shadow-none py-2 px-[0.5rem]",
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

              <button
                className="w-full mb-5 rounded-full py-2 bg-cyan-400 text-white hover:bg-white hover:text-cyan-400 hover:border-2 hover:border-cyan-400"
                type="submit"
              >
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
