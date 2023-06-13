import React, { useEffect, useMemo, useState } from "react"
import dayjs from "dayjs"
import weekdayPlugin from "dayjs/plugin/weekday"
import toObjectPlugin from "dayjs/plugin/toObject"
import isTodayPlugin from "dayjs/plugin/isToday"

dayjs.extend(weekdayPlugin)
dayjs.extend(toObjectPlugin)
dayjs.extend(isTodayPlugin)
const Calendar = () => {
  const calendar = useCalendar()

  return (
    <div className="w-60 bg-gray-100 rounded-sm p-2">
      <CalendarHeader
        currentMonth={calendar.currentMonth}
        nextMonth={calendar.nextMonth}
        prevMonth={calendar.prevMonth}
      />

      <CalendarDays
        arrayOfDays={calendar.arrayOfDays}
        currentMonth={calendar.currentMonth}
        getAllDays={calendar.getAllDays}
      />
    </div>
  )
}

const useCalendar = () => {
  const now = useMemo(() => dayjs(), [])
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

  // console.log(now.date(), now.isToday(), now.daysInMonth(), now)
  const getAllDasys = () => {
    const weekCounter = 0
    const currentDate = currentMonth.date()
    const daysBefore = 6 - currentMonth.weekday()
    console.log(daysBefore, now.day())
    const nextMonth = currentMonth.add(1, "month").month()
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

  return { currentMonth, arrayOfDays, nextMonth, prevMonth, getAllDays }
}

const CalendarHeader = ({ currentMonth, nextMonth, prevMonth }) => {
  const MonthYearFormat = "MMMM YYYY"
  return (
    <div className="flex justify-end">
      <h1 className="self-start grow">
        {currentMonth.format(MonthYearFormat)}
      </h1>
      <ChevronButton
        className="transform -scale-x-100 -scale-y-100"
        onClick={prevMonth}
      />
      <ChevronButton onClick={nextMonth} />
    </div>
  )
}

const CalendarLabels = ({ currentMonth }) => {
  const dateFormat = "ddd"
  const days = []
  for (let i = 0; i < 7; i++) {
    days.push(
      <div className="text-xs gap-2 font-light">
        {currentMonth.weekday(i).format(dateFormat).toUpperCase()}
      </div>
    )
  }

  return days
}
const CalendarDays = ({ arrayOfDays, currentMonth }) => {
  const dateFormat = "dddd"
  console.log(arrayOfDays)
  return (
    <div className="grid  grid-cols-7 gap-2">
      <CalendarLabels currentMonth={currentMonth} />
      {arrayOfDays.map((date) => (
        <Grid date={date} currentMonth={currentMonth} />
      ))}
    </div>
    // {arrayOfDays.map((day) => (<div>{}</div>)}
  )
}
const Grid = ({ date, currentMonth }) => {
  const isCurrentMonth =
    date.month() === currentMonth.month() ? "text-cyan-400" : "text-gray-300"
  const isCurrentDate = date.isToday() ? "bg-red-400" : ""
  return (
    <div className={`${isCurrentMonth} ${isCurrentDate} text-center  `}>
      {date.date()}
    </div>
  )
}

const ChevronButton = ({ className, onClick }) => {
  return (
    <button className="" onClick={onClick}>
      <svg
        className={className}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z"
          fill="#262626"
        />
      </svg>
    </button>
  )
}
export default Calendar
