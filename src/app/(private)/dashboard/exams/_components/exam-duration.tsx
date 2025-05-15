"use client";

import { LuAlarmClock } from "react-icons/lu";
import { useEffect, useState } from "react";

type ExamDuration = {
  duration: number;
  onTimerEnd?: () => void;
  onTimeChange?: (date: Date) => void;
};

const formatTime = (date: Date) => {
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
};

function ExamDuration({ duration, onTimerEnd, onTimeChange }: ExamDuration) {
  // ? State
  const [date, setDate] = useState(new Date(new Date(0).setMinutes(duration)));

  // ? Effects
  useEffect(() => {
    const timerId = setInterval(() => {
      setDate((prevDate) => {
        const newDate = new Date(prevDate);
        const currentSeconds = newDate.getSeconds();

        if (currentSeconds === 0) {
          newDate.setMinutes(newDate.getMinutes() - 1);
          newDate.setSeconds(59);
        } else {
          newDate.setSeconds(currentSeconds - 1);
        }

        // Check if timer reached 0:00
        if (newDate.getMinutes() === 0 && newDate.getSeconds() === 0) {
          setTimeout(() => onTimerEnd?.(), 0);
        }

        // invoke time handler on each iteration
        onTimeChange?.(newDate);

        return newDate; // Return the Date object directly
      });
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [onTimerEnd, onTimeChange]);

  return (
    <div className="flex items-center gap-2 text-[#11CE19] font-semibold">
      <LuAlarmClock className="text-xl" />
      <span>{formatTime(date)}</span>
    </div>
  );
}

export default ExamDuration;
