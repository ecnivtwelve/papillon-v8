import { useTimetableWidgetData } from "@/app/(tabs)/index/hooks/useTimetableWidgetData";
import adjust from "@/utils/adjustColor";
import { getSubjectColor } from "@/utils/subjects/colors";
import { getSubjectName } from "@/utils/subjects/name";
import { useTheme } from "@react-navigation/native";
import React, { useEffect, useMemo } from "react";
import { Voltra } from "voltra";
import { updateWidget, WidgetFamily } from "voltra/client";

export function CalendarWidget() {
  const theme = useTheme();
  const { courses } = useTimetableWidgetData();
  const today = useMemo(() => new Date(), []);

  const firstSubjectColor = courses.length > 0 ? getSubjectColor(courses[0].subject) : theme.colors.primary;
  const contrastFirstSubjectColor = adjust(firstSubjectColor, -0.3);

  const Template = ({ family }: { family?: WidgetFamily }) => (
    <Voltra.View style={{ flex: 1, overflow: 'hidden' }}>
      <Voltra.LinearGradient
        colors={[firstSubjectColor + '33', 'transparent']}
        locations={[0, 1]}
        start={[0, 0]}
        end={[0, 1]}
        style={{
          flex: 1
        }}
      >
        <Voltra.VStack alignment="leading" style={{ padding: 16, alignItems: 'flex-start', justifyContent: 'flex-start', flex: 1 }}>
          <Voltra.Text style={{ fontSize: 14, color: contrastFirstSubjectColor, fontWeight: "semibold" }}>
            {today.toLocaleDateString('fr-FR', { weekday: 'long' })}
          </Voltra.Text>
          <Voltra.Text style={{ fontSize: 36 }}>
            {today.getDate()}
          </Voltra.Text>
          {(family === "systemSmall" || family === "systemMedium") && <Voltra.Spacer />}

          {courses.slice(0, family === "systemSmall" ? 1 : family === "systemMedium" ? 1 : 5).map((course, index) => (
            <CalendarWidgetItem key={index} course={course} family={family} />
          ))}

          {courses.length === 0 && family === "systemLarge" && (
            <Voltra.Spacer />
          )}

          {courses.length === 0 && (
            <Voltra.Text style={{ fontSize: 14, opacity: 0.6, marginTop: 4, textAlign: family === "systemSmall" ? 'left' : 'center', width: '100%' }}>
              Aucun cours à venir prochainement
            </Voltra.Text>
          )}

          <Voltra.Spacer />
        </Voltra.VStack>
      </Voltra.LinearGradient>
    </Voltra.View>
  );

  useEffect(() => {
    updateWidget(
      "calendar",
      {
        systemSmall: <Template family="systemSmall" />,
        systemMedium: <Template family="systemMedium" />,
        systemLarge: <Template family="systemLarge" />
      },
      {
        deepLinkUrl: `papillon://(tabs)/calendar`
      }
    )
  }, [courses, today]);

  return (
    <></>
  )
}

const CalendarWidgetItem = ({ course, family }) => {
  const subjectName = getSubjectName(course.subject);
  const subjectColor = getSubjectColor(course.subject);

  return (
    <Voltra.HStack alignment="center" style={{ height: (family === "systemSmall" || family === "systemMedium") ? 60 : 46, marginTop: (family === "systemSmall" || family === "systemMedium") ? 0 : 12 }}>
      {!(family === "systemSmall" || family === "systemMedium") && (
        <Voltra.VStack style={{ width: 50, marginRight: 8, alignItems: 'center' }}>
          <Voltra.Text style={{ fontWeight: "semibold", fontSize: 16 }}>
            {new Date(course.from).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
          </Voltra.Text>
          <Voltra.Text style={{ opacity: 0.6, fontSize: 14, marginTop: 4 }}>
            {new Date(course.to).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
          </Voltra.Text>
        </Voltra.VStack>
      )}

      <Voltra.View
        style={{
          width: 5,
          height: "100%",
          borderRadius: 24,
          backgroundColor: subjectColor,
          marginRight: 8,
        }}
      />
      <Voltra.VStack alignment="leading">
        {(family === "systemSmall" || family === "systemMedium") && (
          <Voltra.Text style={{ fontSize: 14, opacity: 0.6 }}>
            {new Date(course.from).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
          </Voltra.Text>
        )}
        <Voltra.Text style={{ fontSize: 16, fontWeight: "semibold" }}>
          {subjectName}
        </Voltra.Text>
        <Voltra.Text style={{ fontSize: 14, opacity: 0.6, marginTop: 4 }}>
          {course.room} · {course.teacher}
        </Voltra.Text>
      </Voltra.VStack>
    </Voltra.HStack>
  )
}

export default CalendarWidget