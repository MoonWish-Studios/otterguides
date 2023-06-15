import React, { useEffect, useMemo, useState } from "react"
import useScheduleStore from "./useStore"
import { shallow } from "zustand/shallow"
import useCalendar, { useCalendarStore } from "./useCalendar"
import Grid from "./Grid"
import ChevronButton from "./ChevronButton"
const Calendar = () => {
  // const calendar = useCalendar()
  // const scheduler = useGuideSchedule()
  return (
    <div className="w-fit rounded-sm p-2">
      <CalendarHeader />
      <CalendarDays />
    </div>
  )
}

export const Scheduler = ({ supabase_schedule, supabase_overrides }) => {
  const scheduler = useScheduleStore()

  useEffect(() => {
    if (supabase_schedule) scheduler.setSchedule(supabase_schedule)
  }, [supabase_schedule, supabase_overrides])
  return (
    <div className="mx-auto w-fit my-40">
      <Calendar />
      <button onClick={scheduler.saveOverridesToDatabase}>Save</button>
    </div>
  )
}

const CalendarHeader = () => {
  const MonthYearFormat = "MMMM YYYY"
  const [selectedMonth, nextMonth, prevMonth] = useCalendarStore((s) => [
    s.selectedMonth,
    s.nextMonth,
    s.prevMonth,
  ])
  return (
    <div className="flex justify-end">
      <h1 className="self-start grow">
        {selectedMonth.format(MonthYearFormat)}
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
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
  return days.map((day) => (
    <div
      key={day}
      className="text-xs gap-2 font-light border-b text-center mt-2"
    >
      {day}
    </div>
  ))
}
const CalendarDays = () => {
  const [arrayOfDays, setAllDays, selectedMonth, now] = useCalendarStore(
    (s) => [s.arrayOfDays, s.setAllDays, s.selectedMonth, s.now],
    shallow
  )
  const scheduler = useScheduleStore()
  useEffect(() => {
    setAllDays()
  }, [selectedMonth])

  // Handle state if selected to become a unavailable date
  // adds/remove from the array of selected dates to override
  // this function is the difference between dashboard/guide page
  const handleOverrideClick = (date) => {
    if (scheduler.checkOverrideDate(date)) {
      scheduler.removeOverrideDate(date)
    } else {
      scheduler.addOverrideDate(date)
    }
  }

  /* todo */
  const handleUserClick = (date) => {
    console.log(date)
    // store this date as a potential date to reserver
    // save this date into database
  }
  return (
    <div className="grid  grid-cols-7 gap-2 ">
      <CalendarLabels />
      {arrayOfDays.map((date) => (
        <Grid
          date={date}
          key={date.valueOf()}
          scheduler={scheduler}
          selectMonth={selectedMonth}
          now={now}
          handleClick={
            scheduler.isSchedulingEnabled
              ? handleOverrideClick
              : handleUserClick
          }
          // available={getDayAvailability(date)}
        />
      ))}
    </div>
    // {arrayOfDays.map((day) => (<div>{}</div>)}
  )
}

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

export default Calendar
