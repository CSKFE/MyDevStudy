const ControlledInput = () => {
  const [value, setValue] = useState();
  return (
    <form>
      <input type="text" value={value} onChange={setValue(() => {value + 1})} />
    </form>
  )
}

// input의 value가 state로 저장돼있고 체인지 이벤트에 setState가 담겨있는 인풋이 컨트롤드인풋(복잡한 앱의 구조에서 사용)
// form의 onSubmit 이벤트 핸들러 내에서 input의 value를 핸들링하면 언 컨드롤드 인풋(복잡하지않고 form의 이벤트핸들러내에서 벨류를 핸들링할 경우 사용)
// 언컨트롤드인풋은 defaultValue를 사용해주자