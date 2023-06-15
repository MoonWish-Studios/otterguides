"use client"
import React, { useEffect, useState } from "react"
import FullCalendar from "@fullcalendar/react"
import daygrid from "@fullcalendar/daygrid"
import interactionPlugin from "@fullcalendar/interaction"
import {
  Field,
  Form,
  Formik,
  FormikErrors,
  FormikTouched,
  FormikValues,
} from "formik"
import * as Yup from "yup"
import Calendar, { Scheduler } from "../components/calendar/Calendar"
import {
  DEFAULT_SCHEDULE,
  OVERIDE_SCHEDULE,
} from "../components/calendar/constants"
const Profile = {
  firstName: "John",
  lastName: "Doe",
  employment: "Software Engineer",
  phone: "626-297-9032",
  bio: "Namaste! I'm Sofia, a certified yoga instructor deeply connected to the mind, body, and spirit. Join me on a transformative journey through the city's serene yoga studios, lush parks, and breathtaking outdoor locations. We'll explore various yoga styles, practice meditation, and embrace holistic well-being. Get ready to find your inner balance and cultivate a sense of peace within the urban chaos.",
  interests: ["Yoga", "Meditation", "Wellness"],
  languages: ["English", "Spanish"],
  email: "sophia@gmail.com",
}

interface UserProfileProps {
  firstName: string
  lastName: string
  employment: string
  phone: string
  bio: string
  interests: string[]
  languages: string[]
  email: string
  profilePicture: string
  password: string
}

const EMPTY_PROFILE: UserProfileProps = {
  firstName: "",
  lastName: "",
  employment: "",
  phone: "",
  bio: "",
  interests: [],
  languages: [],
  email: "",
  profilePicture: "",
  password: "",
}

const ProfileSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
  bio: Yup.string()
    .required("Required")
    .min(10, "Too Short!")
    .max(1000, "Too Long!"),
  phone: Yup.string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    )
    .required("Required"),
})
function CreateGuideProfile(props: UserProfileProps) {}
export default function Page() {
  const [profile, setProfile] = useState<UserProfileProps>(EMPTY_PROFILE)

  useEffect(() => {})

  const handleInputChange = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement
    const value = target.value
    const name = target.name
    setProfile({ ...profile, [name]: value })
  }

  return (
    <div className="w-full">
      <div className="bg-sky-200 h-96 w-full"></div>
      <div className="max-w-xl border p-8 mx-auto rounded-lg flex flex-col gap-3">
        <Formik
          validationSchema={ProfileSchema}
          initialValues={profile}
          onSubmit={(values, actions) => {
            console.log({ values, actions })
            // alert(JSON.stringify(values, null, 2))
            // actions.setSubmitting(false)
          }}
        >
          {({ errors, touched }) => (
            <Form className="">
              <Field name="firstName" className="border-2 rounded-lg  " />
              {errors.firstName && touched.firstName ? (
                <div>{errors.firstName}</div>
              ) : null}
              <Field name="lastName" />
              {errors.lastName && touched.lastName ? (
                <div>{errors.lastName}</div>
              ) : null}
              <Field name="email" type="email" />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
              <Field name="phone" type="phone" />
              {errors.phone && touched.phone ? <div>{errors.phone}</div> : null}
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
      {/* Profile */}
      <div>
        {/* <Calendar />
         */}
        <Scheduler
          supabase_schedule={DEFAULT_SCHEDULE}
          supabase_overrides={OVERIDE_SCHEDULE}
        />
      </div>
    </div>
  )
}
