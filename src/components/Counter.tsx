type Props = {
  count: number
  setCount: (value: number) => void
  name: string
  age: number
}

export function Counter ({ count, setCount, name, age }: Props) {
  return (
    <div>
      <h2>{count}</h2>
      <h3>
        Hi,{name} you are {age}
      </h3>
      
    </div>
  )
}

// SAME WITHOUT DESTRUCTURING PROPS
// export function Counter (props: Props) {
//   return (
//     <div>
//       <h2>{props.count}</h2>
//       <h3>
//         Hi,{props.name} you are {props.age}
//       </h3>
//       <button onClick={() => props.setCount(props.count + 1)}>-</button>
//       <button onClick={() => props.setCount(props.count + 1)}>+</button>
//     </div>
//   )
// }
