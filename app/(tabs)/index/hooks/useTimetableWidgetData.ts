import { useState, useEffect, useMemo } from "react";
import { useAccountStore } from "@/stores/account";
import { getWeekNumberFromDate } from "@/database/useHomework";
import { useTimetable } from "@/database/useTimetable";
import { Course as SharedCourse } from "@/services/shared/timetable";

export const useTimetableWidgetData = () => {
  const now = new Date();
  const weekNumber = getWeekNumberFromDate(now);

  const accounts = useAccountStore((state) => state.accounts);
  const lastUsedAccount = useAccountStore((state) => state.lastUsedAccount);
  const account = accounts.find((a) => a.id === lastUsedAccount);

  const services = useMemo(() =>
    account?.services?.map((service: { id: string }) => service.id) ?? [],
    [account?.services]
  );

  const timetableData = useTimetable(undefined, weekNumber);
  const weeklyTimetable = useMemo(() =>
    timetableData.map(day => ({
      ...day,
      courses: day.courses.filter(course =>
        services.includes(course.createdByAccount) || course.createdByAccount.startsWith('ical_')
      )
    })).filter(day => day.courses.length > 0),
    [timetableData, services]
  );

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const courses = useMemo(() => {
    let courses: SharedCourse[] = [];

    const futureDays = weeklyTimetable
      .filter(day => day.date.getTime() > today.getTime())
      .sort((a, b) => a.date.getTime() - b.date.getTime());

    console.log("Future days with courses:", futureDays);

    if (futureDays.length > 0) {
      courses = futureDays[0].courses;
    }

    const futureCourses = courses.filter(course => course.to.getTime() > Date.now());

    if(futureCourses.length === 0) {
      return futureDays.length > 1 ? futureDays[1].courses : [];
    }

    return futureCourses;
  }, [weeklyTimetable]);

  return { courses };
};
