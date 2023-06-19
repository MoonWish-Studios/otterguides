import { create } from "zustand"
import dayjs from "dayjs"
import supabase from "../../supabase-browser"

import { DEFAULT_SCHEDULE, OVERIDE_SCHEDULE } from "./constants"
const useScheduleStore = create((set, get) => ({
  schedule: DEFAULT_SCHEDULE,
  selectedDatesToOverride: [],
  // unavailableDates: OVERIDE_SCHEDULE,
  isSchedulingEnabled: true,
  setSchedule: (schedule) => set({ schedule }),
  setOverrideDate: (overrideDate) =>
    set({ selectedDatesToOverride: overrideDate }),
  // setUnavailableDates: (unavailableDates) => {
  //   set({ unavailableDates })
  // },

  addOverrideDate: (override) =>
    set((s) => ({
      selectedDatesToOverride: [...s.selectedDatesToOverride, override],
    })),
  removeOverrideDate: (date) => {
    set((s) => {
      const filteredDates = s.selectedDatesToOverride.filter((d) => {
        if (d.date() !== date.date()) {
          return d
        } else if (d.month() !== date.month()) {
          return d
        }
      })
      return { selectedDatesToOverride: filteredDates }
    })
  },
  saveOverridesToDatabase: async (user) => {
    console.log("FAKE SAVING TO DATABASE", get().selectedDatesToOverride)

    const dateOjects = get().selectedDatesToOverride.map((date) =>
      date.toDate()
    )

    const { error } = await supabase
      .from("schedule")
      .update({
        override_dates: JSON.stringify(dateOjects),
        schedule: JSON.stringify(get().schedule),
      })
      .eq("user_id", user.user.id)

    console.log(error, user.user)
  },
  getStartHour: (date) => {
    return get().schedule.find(({ day, startHour }) => {
      if (day === date.day()) {
        return startHour
      }
    }).startHour
  },
  checkOverrideDate: (date) => {
    return get().selectedDatesToOverride.find((d) => {
      if (d.date() === date.date() && d.month() === date.month()) {
        // console.log(d.toString(), date.toString())
        // console.log("RETURNED TRUE")
        return true
      }
    })
  },
  getDayAvailability: (date) => {
    // by checking first if it is an override date, we can avoid checking the schedule

    if (get().checkOverrideDate(date)) {
      return false
    } else if (get().checkIfScheduleSaysUnavailable(date)) {
      return false
    } else {
      return true
    }
  },

  // function used for getDayAvailability
  checkIfScheduleSaysUnavailable: (date) => {
    return get().schedule.find(({ day, available }) => {
      if (!available && day === date.day()) {
        return true
      }
    })
  },

  toggleDayAvailability: (selectedDay, available) => {
    set((state) => ({
      schedule: state.schedule.map((day) => {
        if (day.day === selectedDay) {
          day.available = available
        }
        return day
      }),
    }))
  },

  setTimeOfDay: (selectedDay, hour) => {
    set((state) => ({
      schedule: state.schedule.map((day) => {
        if (day.day === selectedDay) {
          day.startHour = parseInt(hour)
        }
        return day
      }),
    }))
  },
}))
export default useScheduleStore
