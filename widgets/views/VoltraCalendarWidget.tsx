import { Voltra } from 'voltra'

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

export default VoltraCalendarWidget