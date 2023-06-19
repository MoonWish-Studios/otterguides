export interface FormTypes {
  license: string
  id?: string
  inspector: string
  location: string
  odometer: number
  head_lights: boolean | null
  tail_lights: boolean | null
  signal_lights: boolean | null
  warning_lights: boolean | null
  wiper_blades: boolean | null
  tire_pressure: boolean | null
  clean_interior: boolean | null
  time_created?: Date
  clean_exterior: boolean | null
  clean_rear: boolean | null
  description: string
}

export interface InputTypes {
  label: string
  placeholder?: string
  className?: string
  initialValue?: string
  type: any
  name: string
  statusCompleted: boolean
  value?: string
  handleChange: any
}

export interface SelectTypes {
  label: string
  className?: string
  placeholder: string
  name: string
  statusCompleted: boolean
  options: string[]
  handleChange: (event: React.FormEvent<HTMLSelectElement>) => void
}

export interface UserDataTypes {
  user_id: string
  email: string
  f_name: string
  l_name: string
  phone: string
  company: string
  employment: string
  languages: string
  bio: string
  interests: string
  why: string
}
export interface VehicleDataTypes {
  owner_id: string
  make: string
  model: string
  year: number
  license: string
  id?: string
  vin: string
  mileage_last_serviced: number
  date_last_serviced: Date
  has_issue?: boolean
}
