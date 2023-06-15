import { useEffect, useState } from "react"
import useScheduleStore from "./useStore"
import { useCalendarStore } from "./useCalendar"

const Grid = ({ date, scheduler, now, selectMonth, handleClick }) => {
  const {
    getDayAvailability,
    getStartHour,
    checkOverrideDate,
    checkIfScheduleSaysUnavailable,
  } = scheduler

  // disable if it is an unavailable date from database
  // const available = getDayAvailability(date)
  const scheduleNotAvailable = checkIfScheduleSaysUnavailable(date)
  const IsAnOverrideDate = checkOverrideDate(date)
  // disable if not this month
  const isNotThisMonth = selectMonth.month() !== date.month()

  // disable if before today
  const isBeforeToday = date.isBefore(now, "day")

  // disable if after guide time today
  const isAlreadyAfterGuideTimeToday =
    date.isToday() && date.isAfter(getStartHour(date), "hour")

  // style if selected to become a unavailable date
  const isAnPotentialUnavailableDate = checkOverrideDate(date)
    ? "enabled:border-gray-200 text-gray-300 enabled:hover:bg-gray-400"
    : ""

  // style differently for the current date if enabled
  const isCurrentDate =
    date.isToday() && !checkOverrideDate(date)
      ? "enabled:text-cyan-600 enabled:border-cyan-600"
      : ""

  return (
    <button
      className={`   w-9 h-9 text-center text-cyan-400 disabled:line-through enabled:border-cyan-400 enabled:border rounded-full enabled:hover:bg-cyan-400 enabled:hover:text-white transition duration-75 enabled:active:scale-125 disabled:text-gray-300 enabled:active:border-cyan-200 enabled:active:bg-cyan-100 ${isCurrentDate} ${isAnPotentialUnavailableDate}  `}
      disabled={
        isNotThisMonth ||
        scheduleNotAvailable ||
        isBeforeToday ||
        isAlreadyAfterGuideTimeToday
      }
      onClick={() => handleClick(date)}
    >
      {date.date()}
    </button>
  )
}

export default Grid
