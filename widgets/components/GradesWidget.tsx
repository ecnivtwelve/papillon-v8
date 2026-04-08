import React, { useEffect } from "react";
import { Voltra } from "voltra";
import { updateWidget } from "voltra/client";

export function GradesWidget() {
  const Template = ({ family }: { family?: WidgetFamily }) => (
    <Voltra.View style={{ flex: 1, overflow: 'hidden' }}>
    </Voltra.View>
  );

  useEffect(() => {
    updateWidget(
      "grades",
      {
        systemSmall: <Template family="systemSmall" />,
        systemMedium: <Template family="systemMedium" />,
        systemLarge: <Template family="systemLarge" />
      },
      {
        deepLinkUrl: `papillon://(tabs)/grades`
      }
    )
  }, []);

  return (
    <></>
  )
}

export default GradesWidget