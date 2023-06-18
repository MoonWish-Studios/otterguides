import dayjs from "dayjs"
import { useMemo, useEffect, useState } from "react"
import weekdayPlugin from "dayjs/plugin/weekday"
import toObjectPlugin from "dayjs/plugin/toObject"
import isTodayPlugin from "dayjs/plugin/isToday"
import { create } from "zustand"

dayjs.extend(weekdayPlugin)
dayjs.extend(toObjectPlugin)
dayjs.extend(isTodayPlugin)

export const useCalendarStore = create((set, get) => ({
  now: dayjs(),
  selectedMonth: dayjs(),
  calendarMode: "user",
  arrayOfDays: [],
  userSelectedDate: dayjs(),
  setUserSelectedDate: (date) => set((state) => ({ userSelectedDate: date })),
  setCalendarMode: (mode) => set((state) => ({ calendarMode: mode })),
  nextMonth: () =>
    set((state) => ({ selectedMonth: state.selectedMonth.add(1, "month") })),
  prevMonth: () =>
    set((state) => ({
      selectedMonth: state.selectedMonth.subtract(1, "month"),
    })),
  setAllDays: () => {
    let iteratingDate = get().selectedMonth.startOf("month").weekday(0) // starting at the first day of the calendar
    const nextMonth = get().selectedMonth.add(1, "month").month()
    let allDates = []
    while (iteratingDate.weekday(0).month() !== nextMonth) {
      allDates.push(iteratingDate)
      iteratingDate = iteratingDate.add(1, "day")
    }
    console.log(allDates)
    set((s) => ({ arrayOfDays: allDates }))
  },
}))
export const useCalendar = () => {
  const now = useMemo(() => dayjs(), []) // set it once without ability to set it again. Memorized it.
  const [currentMonth, setCurrentMonth] = useState(now)
  const [arrayOfDays, setArrayOfDays] = useState([])

  useEffect(() => {
    getAllDays()
  }, [currentMonth])
  const nextMonth = () => {
    const plus = currentMonth.add(1, "month")
    setCurrentMonth(plus)
  }

  const prevMonth = () => {
    const minus = currentMonth.subtract(1, "month")
    setCurrentMonth(minus)
  }

  const getAllDays = () => {
    let iteratingDate = currentMonth.startOf("month").weekday(0) // starting at the first day of the calendar
    const nextMonth = currentMonth.add(1, "month").month()
    let allDates = []

    while (iteratingDate.weekday(0).month() !== nextMonth) {
      allDates.push(iteratingDate)
      iteratingDate = iteratingDate.add(1, "day")
    }
    setArrayOfDays(allDates)
    return allDates
  }

  const isNotThisMonth = (date) => {
    return date.month() !== currentMonth.month()
  }
  return {
    currentMonth,
    now,
    arrayOfDays,
    nextMonth,
    prevMonth,
    getAllDays,
    isNotThisMonth,
  }
}
export default useCalendar
