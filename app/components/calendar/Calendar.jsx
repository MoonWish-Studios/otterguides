import React, { useEffect, useMemo, useState } from "react"
import useScheduleStore from "./useStore"
import { shallow } from "zustand/shallow"
import useCalendar, { useCalendarStore } from "./useCalendar"
import Grid from "./Grid"
import ChevronButton from "./ChevronButton"
import dayjs from "dayjs"
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

  const now = useCalendarStore((state) => state.now)
  useEffect(() => {
    if (supabase_schedule) scheduler.setSchedule(supabase_schedule)
  }, [supabase_schedule, supabase_overrides])
  return (
    <div className="mx-auto w-fit flex my-40 ">
      <div className="flex flex-col gap-y-3 border-r pr-4 mr-4">
        {scheduler.schedule.map((option) => (
          <ScheduleOption {...option} now={now} scheduler={scheduler} />
        ))}
        <button
          className="flex-none text-center rounded-xl bg-cyan-300 lg:max-w-xl px-6 py-2.5 text-sm md:text-base hover:bg-cyan-200 transition "
          onClick={scheduler.saveOverridesToDatabase}
        >
          Save{" "}
        </button>
      </div>
      <Calendar />
    </div>
  )
}

const ScheduleOption = ({ day, startHour, available, now, scheduler }) => {
  return (
    <div className="flex gap-4 h-8 w-48 items-center justify-between">
      <label className="flex gap-2 text-gray-900">
        <input
          type="checkbox"
          className=""
          checked={available}
          onChange={(e) =>
            scheduler.toggleDayAvailability(day, e.target.checked)
          }
        />
        {now.day(day).format("ddd")}
      </label>

      {available ? (
        <SelectTime
          setTimeOfDay={scheduler.setTimeOfDay}
          now={now}
          day={day}
          startHour={startHour}
        ></SelectTime>
      ) : (
        <span className="text-gray-400">Unavailable</span>
      )}
    </div>
  )
}

const SelectTime = ({ day, children, now, setTimeOfDay, startHour }) => {
  const time = [
    0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23,
  ]

  return (
    <select
      defaultValue={startHour}
      onChange={(e) => {
        setTimeOfDay(day, e.target.value)
      }}
      className="border px-2 py-1 rounded-lg text-gray-700"
    >
      <option value={startHour}>{now.hour(startHour).format("h:00 A")}</option>
      {time.map((hour) => (
        <option value={hour}>{now.hour(hour).format("h:00 A")}</option>
      ))}
    </select>
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

export default Calendar
