import { create } from "zustand"
import dayjs from "dayjs"
import { DEFAULT_SCHEDULE, OVERIDE_SCHEDULE } from "./constants"
const useScheduleStore = create((set, get) => ({
  schedule: DEFAULT_SCHEDULE,
  overrideDate: [],
  selectedDatesToOverride: [],
  unavailableDates: OVERIDE_SCHEDULE,
  setSchedule: (schedule) => set({ schedule }),

  addOverrideDate: (override) =>
    set((s) => ({
      selectedDatesToOverride: [...s.selectedDatesToOverride, override],
    })),
  removeOverrideDate: (date) => {
    set((s) => {
      const filteredDates = s.selectedDatesToOverride.filter(
        (d) => d.date() !== date.date()
      )
      return { overrideDate: filteredDates }
    })
  },
  getStartHour: (date) => {
    return get().schedule.filter(({ day, startHour }) => {
      if (day === date.day()) {
        return startHour
      }
    })
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
    const unavailableDates = get().unavailableDates

    const isUnavailableDates = unavailableDates.find((d) => {
      if (d.date() === date.date()) {
        return true
      }
    })

    // date is 6/14 ---- 2
    // overrid every wednesday, which is 2.
    // console.log(isUnavailableDates)
    if (isUnavailableDates) return isUnavailableDates.available
    // then we check schedule to see if the day is available if it matches by date label (e.g. monday)
    const isNotAvailable = get().schedule.find(({ day, available }) => {
      if (!available && day === date.day()) {
        return true
      }
    })
    return isNotAvailable ? false : true
  },

  addUnavailableDate: (date) => {
    // if(date.isBefore())
    if (get().unavailableDates.find((d) => d.date() === date.date()))
      return "date already exists"
    set((state) => ({
      unavailableDates: [...state.unavailableDates, date],
    }))
  },
  addUnavailableDates: () => {
    // if(date.isBefore())
    // if (get().unavailableDates.find((d) => d.date() === date.date()))
    // return "date already exists"
    set((state) => ({
      unavailableDates: [...state.unavailableDates, state.overrideDate],
    }))
  },

  removeUnavailableDate: (date) => {
    const filteredDates = get().unavailableDates.filter(
      (d) => d.date() !== date.date()
    )
    set({
      unavailableDates: filteredDates,
    })
  },
}))
export default useScheduleStore
