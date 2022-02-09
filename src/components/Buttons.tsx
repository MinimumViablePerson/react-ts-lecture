type Props = {
  count: number
  setCount: (value: number) => void
}

export function Buttons ({ count, setCount }: Props) {
  return (
    <>
      <button onClick={() => setCount(count + 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  )
}

type ComponentProps = {
  name: string
  hungry: boolean
}

function Component ({ name, hungry }: ComponentProps) {
  return <div>lol</div>
}
