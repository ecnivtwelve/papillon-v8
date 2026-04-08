import React from "react";
import { ScrollView, View } from 'react-native'
import { VoltraWidgetPreview } from 'voltra/client'
import { Voltra } from 'voltra'
import List from "@/ui/new/List";
import Typography from "@/ui/new/Typography";
import { useHeaderHeight } from "@react-navigation/elements";

function VoltraCalendarWidget({ family }: { family: string }) {
  return (
    <Voltra.VStack alignment="leading" style={{ padding: 16, backgroundColor: '#101828', alignItems: 'flex-start', justifyContent: 'flex-start', flex: 1 }}>
      <Voltra.Text>Lundi</Voltra.Text>
      <Voltra.Text style={{ fontSize: 23 }}>67</Voltra.Text>
    </Voltra.VStack>
  )
}

export default function DevWidgets() {
  const widgets = [
    {
      name: "VoltraCalendarWidget",
      component: VoltraCalendarWidget,
      sizes: ["systemSmall", "systemMedium", "systemLarge"]
    },
  ];

  const headerHeight = useHeaderHeight();

  return (
    <ScrollView style={{ flex: 1, padding: 16, paddingTop: headerHeight + 16 }}>

      {widgets.map((widget) => (
        <View>
          <Typography variant="title">{widget.name}</Typography>
          {widget.sizes.map((size) => (
            <View>
              <Typography variant="body1" color="textSecondary">
                {size}
              </Typography>
              <VoltraWidgetPreview family={size}>
                <widget.component family={size} />
              </VoltraWidgetPreview>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}