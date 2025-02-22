import type { Meta } from 'storybook-solidjs'
import { Progress } from '../'
import './progress.css'

const meta: Meta = {
  title: 'CircularProgress',
}

export default meta

export const Basic = () => (
  <Progress.Root>
    <Progress.Label>Label</Progress.Label>
    <Progress.ValueText />
    <Progress.Circle>
      <Progress.CircleTrack />
      <Progress.CircleRange />
    </Progress.Circle>
  </Progress.Root>
)

export const InitialValue = () => (
  <Progress.Root value={70}>
    <Progress.Label>Label</Progress.Label>
    <Progress.ValueText />
    <Progress.Circle>
      <Progress.CircleTrack />
      <Progress.CircleRange />
    </Progress.Circle>
  </Progress.Root>
)

export const MinMax = () => (
  <Progress.Root value={20} min={10} max={30}>
    <Progress.Label>Label</Progress.Label>
    <Progress.ValueText />
    <Progress.Circle>
      <Progress.CircleTrack />
      <Progress.CircleRange />
    </Progress.Circle>
  </Progress.Root>
)

export const Indeterminate = () => (
  <Progress.Root value={null}>
    <Progress.Label>Label</Progress.Label>
    <Progress.ValueText />
    <Progress.Circle>
      <Progress.CircleTrack />
      <Progress.CircleRange />
    </Progress.Circle>
  </Progress.Root>
)

export const ValueText = () => (
  <Progress.Root
    translations={{
      value({ value, max }) {
        if (value === null) return 'Loading...'
        return `${value} of ${max} items loaded`
      },
    }}
  >
    <Progress.Label>Label</Progress.Label>
    <Progress.ValueText />
    <Progress.Circle>
      <Progress.CircleTrack />
      <Progress.CircleRange />
    </Progress.Circle>
  </Progress.Root>
)
