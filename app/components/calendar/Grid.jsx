import { useEffect, useState } from "react"
import useScheduleStore from "./useStore"

const Grid = ({ date, currentMonth, now }) => {
  const [
    getDayAvailability,
    addOverrideDate,
    removeOverrideDate,
    getStartHour,
    checkOverrideDate,
    selectedDatesToOverride,
  ] = useScheduleStore((s) => [
    s.getDayAvailability,
    s.addOverrideDate,
    s.removeOverrideDate,
    s.getStartHour,
    s.checkOverrideDate,
    s.selectedDatesToOverride,
  ])

  const available = getDayAvailability(date)
  const isNotThisMonth = currentMonth.month() !== date.month()
  const isBeforeToday = date.isBefore(now)
  const isAnPotentialUnavailableDate = checkOverrideDate(date)
    ? "enabled:border-none text-gray-300 enabled:hover:bg-cyan-200 enabled:hover:border-cyan-200"
    : ""

  const isAlreadyAfterGuideTimeToday =
    date.isToday() && date.isAfter(getStartHour(date), "hour")
  const isCurrentDate =
    date.isToday() && !checkOverrideDate(date)
      ? "enabled:text-cyan-600 enabled:border-cyan-600"
      : ""

  const [active, setActive] = useState(false)

  useEffect(() => {
    if (active) {
      addOverrideDate(date)
    } else {
      removeOverrideDate(date)
    }
    console.log(active, date.date())
  }, [active])
  return (
    <button
      className={`   w-9 h-9 text-center text-cyan-400 disabled:line-through enabled:border-cyan-400 enabled:border rounded-full enabled:hover:bg-cyan-400 enabled:hover:text-white transition disabled:text-gray-300 ${isCurrentDate} ${isAnPotentialUnavailableDate}  `}
      disabled={
        isNotThisMonth ||
        !available ||
        isBeforeToday ||
        isAlreadyAfterGuideTimeToday
      }
      onClick={() => setActive(!active)}
    >
      {date.date()}
    </button>
  )
}
export default Grid
