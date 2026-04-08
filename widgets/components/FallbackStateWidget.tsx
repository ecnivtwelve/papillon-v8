import React, { useEffect } from "react";
import { Voltra, WidgetVariants } from "voltra";
import { updateWidget } from "voltra/client";

export function FallbackStateWidget() {
  return (
    <Voltra.View style={{ flex: 1, overflow: 'hidden' }}>
      <Voltra.LinearGradient
        colors={['#37bc9a', '#29947A']}
        locations={[0, 1]}
        start={[0, 0]}
        end={[0, 1]}
        style={{
          flex: 1
        }}
      >
        <Voltra.VStack style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 12 }}>
          <Voltra.Symbol name="arrow.trianglehead.2.clockwise.rotate.90.circle.fill" weight="bold" size={32} tintColor="white" />
          <Voltra.Text style={{ fontSize: 16, fontWeight: "bold", color: 'white', marginTop: 6 }}>
            Aucune donnée
          </Voltra.Text>
          <Voltra.Text style={{ fontSize: 14, opacity: 0.7, textAlign: 'center', marginTop: 4, color: 'white' }}>
            Ouvre l'appli Papillon pour synchroniser les données
          </Voltra.Text>
        </Voltra.VStack>
      </Voltra.LinearGradient>
    </Voltra.View>
  );
}

const initialState: WidgetVariants = {
  systemSmall: <FallbackStateWidget />,
  systemMedium: <FallbackStateWidget />,
  systemLarge: <FallbackStateWidget />,
}

export default initialState