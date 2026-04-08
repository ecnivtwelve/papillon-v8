import { Voltra } from 'voltra'

export default function VoltraCalendarWidget({ family }: { family: string }) {
  return (
    <Voltra.VStack style={{ padding: 16, backgroundColor: '#101828' }}>
      <Voltra.Text>Lundi</Voltra.Text>
      <Voltra.Text>6</Voltra.Text>
    </Voltra.VStack>
  )
}