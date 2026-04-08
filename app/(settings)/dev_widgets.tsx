import React, { useEffect } from "react";
import { PlatformColor, ScrollView, View } from 'react-native'
import { updateWidget, VoltraWidgetPreview, WidgetFamily } from 'voltra/client'
import { Voltra } from 'voltra'
import List from "@/ui/new/List";
import Typography from "@/ui/new/Typography";
import { useHeaderHeight } from "@react-navigation/elements";

const APPLY_WIDGETS_ENABLED = false;

const WidgetPreviewContainer = ({ family, children }: { family: WidgetFamily; children: React.ReactNode }) => {
  return (
    <View style={{ backgroundColor: PlatformColor('systemBackground'), borderRadius: 24, overflow: 'hidden', alignSelf: 'flex-start', marginBottom: 24, borderCurve: 'continuous' }}>
      <VoltraWidgetPreview family={family}>
        {children}
      </VoltraWidgetPreview>
    </View>
  )
}

function VoltraCalendarWidget({ family }: { family?: WidgetFamily }) {
  return (
    <Voltra.View style={{ flex: 1, overflow: 'hidden' }}>
      <Voltra.LinearGradient
        colors={['#29947A33', '#29947A00']}
        locations={[0, 1]}
        start={[0, 0]}
        end={[0, 1]}
        style={{
          flex: 1
        }}
      >
        <Voltra.VStack alignment="leading" style={{ padding: 16, alignItems: 'flex-start', justifyContent: 'flex-start', flex: 1 }}>
          <Voltra.Text style={{ fontSize: 14, color: "#29947A", fontWeight: "semibold" }}>
            Mercredi
          </Voltra.Text>
          <Voltra.Text style={{ fontSize: 36 }}>
            8
          </Voltra.Text>
          {(family === "systemSmall" || family === "systemMedium") && <Voltra.Spacer />}
          <Voltra.HStack alignment="center" style={{ height: 60, marginTop: (family === "systemSmall" || family === "systemMedium") ? 0 : 10 }}>
            <Voltra.View
              style={{
                width: 5,
                height: "100%",
                borderRadius: 24,
                backgroundColor: "#29947A",
                marginRight: 8,
              }}
            />
            <Voltra.VStack alignment="leading">
              <Voltra.Text style={{ fontSize: 14, opacity: 0.6 }}>
                14:30
              </Voltra.Text>
              <Voltra.Text style={{ fontSize: 16, fontWeight: "semibold" }}>
                Mathématiques
              </Voltra.Text>
              <Voltra.Text style={{ fontSize: 14, opacity: 0.6, marginTop: 4 }}>
                B204 · M. Dupont
              </Voltra.Text>
            </Voltra.VStack>
          </Voltra.HStack>
          <Voltra.Spacer />
        </Voltra.VStack>
      </Voltra.LinearGradient>
    </Voltra.View>
  )
}

function VoltraTasksWidget({ family }: { family?: WidgetFamily }) {
  return (
    <Voltra.View style={{ flex: 1, overflow: 'hidden' }}>
      <Voltra.LinearGradient
        colors={['#29947A33', '#29947A00']}
        locations={[0, 1]}
        start={[0, 0]}
        end={[0, 1]}
        style={{
          flex: 1
        }}
      >
        <Voltra.VStack alignment="leading" style={{ padding: 16, alignItems: 'flex-start', justifyContent: 'flex-start', flex: 1 }}>
          <Voltra.HStack alignment="top">
            <Voltra.Text style={{ fontSize: 14, color: "#29947A", fontWeight: "semibold" }}>
              Pour demain
            </Voltra.Text>
            <Voltra.Spacer />
            <Voltra.Text style={{ fontSize: 22, fontWeight: "bold", marginTop: -4}}>
              2
            </Voltra.Text>
          </Voltra.HStack>

          <Voltra.HStack alignment="center" style={{ height: 60, marginTop: (family === "systemSmall" || family === "systemMedium") ? 0 : 10 }}>
            <Voltra.View
              style={{
                width: 14,
                height: 14,
                borderRadius: 4,
                borderColor: "#888888",
                borderWidth: 2,
                marginRight: 12,
              }}
            />
            <Voltra.VStack alignment="leading">
              <Voltra.Text style={{ fontSize: 13, opacity: 0.6, marginBottom: 1 }}>
                Matématiques
              </Voltra.Text>
              <Voltra.Text style={{ fontSize: 14, fontWeight: "semibold" }}>
                Exercices page 15, 16, 17 et ne pas oublier le manuel
              </Voltra.Text>
            </Voltra.VStack>
          </Voltra.HStack>
          <Voltra.Spacer />
        </Voltra.VStack>
      </Voltra.LinearGradient>
    </Voltra.View>
  )
}

function VoltraGradesWidget({ family }: { family?: WidgetFamily }) {
  return (
    <Voltra.View style={{ flex: 1, overflow: 'hidden' }}>
      <Voltra.LinearGradient
        colors={['#29947A33', '#29947A00']}
        locations={[0, 1]}
        start={[0, 0]}
        end={[0, 1]}
        style={{
          flex: 1
        }}
      >
        <Voltra.VStack alignment="leading" style={{ padding: 16, alignItems: 'flex-start', justifyContent: 'flex-start', flex: 1 }}>
          <Voltra.HStack alignment="top" style={{ marginBottom: 3 }}>
            <Voltra.Text style={{ fontSize: 14, color: "#29947A", fontWeight: "semibold" }}>
              Dernières notes
            </Voltra.Text>
          </Voltra.HStack>

          <Voltra.HStack alignment="center" style={{ height: 60, marginTop: (family === "systemSmall" || family === "systemMedium") ? 0 : 10 }}>
            <Voltra.VStack alignment="leading">
              <Voltra.Text style={{ fontSize: 13, opacity: 0.6, marginBottom: 1 }}>
                Matématiques
              </Voltra.Text>
              <Voltra.Text style={{ fontSize: 14, fontWeight: "semibold" }}>
                Trigonométrie et fonctions algébriques
              </Voltra.Text>
            </Voltra.VStack>

            <Voltra.Spacer />

            <Voltra.HStack alignment="bottom" style={{ paddingHorizontal: 7, paddingVertical: 5, backgroundColor: "#29947A22", borderRadius: 120 }}>
              <Voltra.Text style={{ fontSize: 16, fontWeight: "bold", color: "#29947A" }}>
                12
              </Voltra.Text>
              <Voltra.Text style={{ fontSize: 14, opacity: 0.6, color: "#29947A" }}>
                /20
              </Voltra.Text>
            </Voltra.HStack>
          </Voltra.HStack>
          <Voltra.Spacer />
        </Voltra.VStack>
      </Voltra.LinearGradient>
    </Voltra.View>
  )
}

function VoltraAverageWidget({ family }: { family?: WidgetFamily }) {
  return (
    <Voltra.View style={{ flex: 1, overflow: 'hidden' }}>
      <Voltra.LinearGradient
        colors={['#29947A33', '#29947A00']}
        locations={[0, 1]}
        start={[0, 0]}
        end={[0, 1]}
        style={{
          flex: 1
        }}
      >
        <Voltra.VStack alignment={family === "systemSmall" ? "leading" : "center"} style={{ padding: 16, alignItems: 'flex-start', justifyContent: 'flex-start', flex: 1 }}>
          <Voltra.HStack style={{ marginTop: 16, marginLeft: family === "systemSmall" ? -56 : -102, marginRight: 16 }}>
            <Voltra.Chart
              xAxisVisibility="hidden"
              yAxisVisibility="hidden"
              legendVisibility="hidden"
            >
              <Voltra.LineMark
                data={[
                  { x: 1, y: 5 },
                  { x: 2, y: 8 },
                  { x: 3, y: 3 },
                  { x: 4, y: 12 },
                  { x: 5, y: 7 },
                ]}
                color="#29947A"
                interpolation="cardinal"
                lineWidth={5}
              />
            </Voltra.Chart>
          </Voltra.HStack>

          <Voltra.HStack alignment="bottom"  style={{ marginTop: family === "systemSmall" ? 16 : family === "systemMedium" ? 16 : 0 }}>
            <Voltra.Text style={{ fontSize: family === "systemSmall" || family === "systemMedium" ? 28 : 42, fontWeight: "medium" }}>
              15.26
            </Voltra.Text>
            <Voltra.Text style={{ fontSize: family === "systemSmall" || family === "systemMedium" ? 16 : 20, opacity: 0.6, marginBottom: 4 }}>
              /20
            </Voltra.Text>
          </Voltra.HStack>

          <Voltra.Text style={{ fontSize: 14, color: "#29947A", fontWeight: "semibold" }}>
            Moyenne générale
          </Voltra.Text>
          <Voltra.Text style={{ fontSize: 14, opacity: 0.6, marginTop: 2 }}>
            Pondération
          </Voltra.Text>
        </Voltra.VStack>
      </Voltra.LinearGradient>
    </Voltra.View>
  )
}

export default function DevWidgets() {
  const widgets = [
    {
      slug: "calendar",
      name: "VoltraCalendarWidget",
      component: VoltraCalendarWidget,
      sizes: ["systemSmall", "systemMedium", "systemLarge"]
    },
    {
      slug: "tasks",
      name: "VoltraTasksWidget",
      component: VoltraTasksWidget,
      sizes: ["systemSmall", "systemMedium", "systemLarge"]
    },
    {
      slug: "grades",
      name: "VoltraGradesWidget",
      component: VoltraGradesWidget,
      sizes: ["systemSmall", "systemMedium", "systemLarge"]
    },
    {
      slug: "average",
      name: "VoltraAverageWidget",
      component: VoltraAverageWidget,
      sizes: ["systemSmall", "systemMedium", "systemLarge"]
    }
  ];

  const headerHeight = useHeaderHeight();

  useEffect(() => {
    if(!APPLY_WIDGETS_ENABLED) return;
    widgets.forEach(widget => {
      const components = widget.sizes.reduce((acc, size) => {
        acc[size] = <widget.component family={size} />
        return acc;
      }, {} as Record<string, React.ReactNode>);
      updateWidget(widget.slug, components, { deepLinkUrl: `papillon://${widget.slug}` });
    });
  }, []);

  return (
    <ScrollView style={{ flex: 1, padding: 16, paddingTop: headerHeight + 16, backgroundColor: 'cyan' }}>

      {widgets.map((widget) => (
        <View>
          <Typography variant="title">{widget.name}</Typography>
          {widget.sizes.map((size) => (
            <View>
              <Typography variant="body1" color="textSecondary">
                {size}
              </Typography>
              <WidgetPreviewContainer family={size}>
                <widget.component family={size} />
              </WidgetPreviewContainer>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}