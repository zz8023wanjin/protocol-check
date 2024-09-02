import protocolCheck from '../../../dist/index.mjs'
import './App.css'

const customProtocol = 'lagofast://start_acc_game/xhr_test'

function App() {
  const handleClick = () => {
    protocolCheck({
      url: customProtocol,
      onSuccess: () => {
        console.log('Success')
      },
      onError: () => {
        console.error('error')
      },
    })
  }

  return (
    <>
      <button onClick={handleClick}>点击测试自定义协议跳转</button>
    </>
  )
}

export default App
