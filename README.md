# protocol-check

Detect whether a custom protocol is available in browser (FF, Chrome, IE8, IE9, IE10, IE11, and Edge)

# Install
```bash
npm install @rain-star/protocol-check
```

# Usage
```javascript
import protocolCheck from '@rain-star/protocol-check'

protocolCheck({
  url: 'custom protocol url',
  onSuccess: () => {
    // 成功的回调，用于后续操作（e.g. report）
    console.log('Success')
  },
  onError: () => {
    // 打开自定义协议失败（e.g. 浏览器不支持、未安装支持自定义协议的客户端）
    console.error('Error')
  }
})
```


# Thanks
https://github.com/ismailhabib/custom-protocol-detection
