import React, { useEffect, useMemo, useState } from "react"
import dayjs from "dayjs"
import weekdayPlugin from "dayjs/plugin/weekday"
import toObjectPlugin from "dayjs/plugin/toObject"
import isTodayPlugin from "dayjs/plugin/isToday"
import { create } from "zustand"

dayjs.extend(weekdayPlugin)
dayjs.extend(toObjectPlugin)
dayjs.extend(isTodayPlugin)
const Calendar = () => {
  const calendar = useCalendar()
  const scheduler = useGuideSchedule()
  console.log(scheduler)
  return (
    <div className="w-fit rounded-sm p-2 mx-auto my-96">
      <CalendarHeader
        currentMonth={calendar.currentMonth}
        nextMonth={calendar.nextMonth}
        prevMonth={calendar.prevMonth}
      />

      <CalendarDays
        arrayOfDays={calendar.arrayOfDays}
        scheduler={scheduler}
        currentMonth={calendar.currentMonth}
        getAllDays={calendar.getAllDays}
      />
    </div>
  )
}

const Scheuler = () => {
  const scheduler = useGuideSchedule()

  return (
    <div className="flex flex-col">
      <Calendar scheduler={scheduler} />
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
    arrayOfDays,
    nextMonth,
    prevMonth,
    getAllDays,
    isNotThisMonth,
  }
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
      <div className="text-xs gap-2 font-light border-b text-center mt-2">
        {currentMonth.weekday(i).format(dateFormat).toUpperCase()}
      </div>
    )
  }

  return days
}
const CalendarDays = ({ arrayOfDays, currentMonth, scheduler }) => {
  const dateFormat = "dddd"
  const getDayAvailability = useScheduleStore(
    (state) => state.getDayAvailability
  )
  console.log(arrayOfDays)
  return (
    <div className="grid  grid-cols-7 gap-2 ">
      <CalendarLabels currentMonth={currentMonth} />
      {arrayOfDays.map((date) => (
        <Grid
          date={date}
          currentMonth={currentMonth}
          available={getDayAvailability(date)}
        />
      ))}
    </div>
    // {arrayOfDays.map((day) => (<div>{}</div>)}
  )
}
const Grid = ({ date, currentMonth, available }) => {
  const isNotThisMonth = currentMonth.month() !== date.month()
  const isCurrentDate = date.isToday()
    ? "enabled:text-cyan-600 enabled:border-cyan-600"
    : ""

  return (
    <button
      className={` ${isCurrentDate}  w-9 h-9 text-center text-cyan-400 enabled:border-cyan-400 enabled:border rounded-full enabled:hover:bg-cyan-400 enabled:hover:text-white transition disabled:text-gray-300  `}
      disabled={isNotThisMonth || !available}
    >
      {date.date()}
    </button>
  )
}

// type Day = "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday"

// interface schedule {

// }

const OVERIDE_SCHEDULE = [dayjs("2023-06-12")]
const DEFAULT_SCHEDULE = [
  {
    day: 0,
    startHour: 9,
    available: true,
  },
  {
    day: 1,
    startHour: 9,
    available: true,
  },
  {
    day: 2,
    startHour: 9,
    available: false,
  },
  {
    day: 3,

    startHour: 9,
    available: true,
  },
  {
    day: 4,
    startHour: 9,
    available: true,
  },
  {
    day: 5,
    startHour: 9,
    available: true,
  },
  {
    day: 6,
    startHour: 9,
    available: true,
  },
]
const useGuideSchedule = () => {
  // const [schedule, setSchedule] = useState(DEFAULT_SCHEDULE)
  // const [overrideDate, seOverrideDate] = useState(OVERIDE_SCHEDULE)
  const [schedule, setSchedule, overrideDate, setOverrideDate] =
    useScheduleStore((s) => [
      s.schedule,
      s.setSchedule,
      s.overrideDate,
      s.setOverrideDate,
    ])
  const setDayUnavailable = (selectedDay) => {
    return schedule.find((day) => {
      if (day.date === selectedDay) {
        setSchedule([...schedule, { ...day, available: false }])
        return true
      }
    })
  }

  const setDayAvailable = (selectedDay) => {
    return schedule.find((day) => {
      if (day.date === selectedDay) {
        setSchedule([...schedule, { ...day, available: true }])
        return true
      }
    })
  }

  const setTimeOfDay = (selectedDay, time) => {
    return schedule.find((day) => {
      if (day.date === selectedDay) {
        setSchedule([...schedule, { ...day, startHour: time }])
        return true
      }
    })
  }

  // /**
  //  *
  //  * @param date = dayjs object
  //  * @returns
  //  */
  // const getDayAvailability = (date) => {
  //   // by checking first if it is an override date, we can avoid checking the schedule
  //   const isOverrideDate = overrideDate.find((d) => {
  //     if (d.date() === date.date()) {
  //       console.log(date.startOf("hour"), "OVERRIDE DATE")
  //       return true
  //     }
  //   })

  //   // date is 6/14 ---- 2
  //   // overrid every wednesday, which is 2.
  //   // console.log(isOverrideDate)
  //   if (isOverrideDate) return isOverrideDate.available
  //   // then we check schedule to see if the day is available if it matches by date label (e.g. monday)
  //   const isNotAvailable = schedule.find(({ day, available }) => {
  //     if (!available && day === date.day()) {
  //       return true
  //     }
  //   })
  //   return isNotAvailable ? false : true
  // }
  const addOverrideDate = (date) => {
    if (overrideDate.find((date) => date === date)) return "date already exists"
    setOverrideDate([...overrideDate, date])
  }

  const removeOverrideDate = (date) => {
    setOverrideDate(overrideDate.filter((date) => date !== date))
  }

  return {
    schedule,
    setDayAvailable,
    setDayUnavailable,
    setTimeOfDay,
    addOverrideDate,
    removeOverrideDate,
    // getDayAvailability,
  }
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

const useScheduleStore = create((set, get) => ({
  schedule: DEFAULT_SCHEDULE,
  overrideDate: OVERIDE_SCHEDULE,
  setSchedule: (schedule) => set({ schedule }),
  setOverrideDate: (overrides) => set({ overrides }),
  getDayAvailability: (date) => {
    // by checking first if it is an override date, we can avoid checking the schedule
    const overrideDate = get().overrideDate
    const isOverrideDate = overrideDate.find((d) => {
      if (d.date() === date.date()) {
        console.log(date.startOf("hour"), "OVERRIDE DATE")
        return true
      }
    })

    // date is 6/14 ---- 2
    // overrid every wednesday, which is 2.
    // console.log(isOverrideDate)
    if (isOverrideDate) return isOverrideDate.available
    // then we check schedule to see if the day is available if it matches by date label (e.g. monday)
    const isNotAvailable = schedule.find(({ day, available }) => {
      if (!available && day === date.day()) {
        return true
      }
    })
    return isNotAvailable ? false : true
  },
}))
