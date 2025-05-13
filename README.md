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
    // 成功的回调，用于后续操作（e.g. 上报）
    console.log('Success')
  },
  noSupport: () => {
    // 浏览器不支持
    console.error('no support')
  }
})
```


# Thanks
https://github.com/ismailhabib/custom-protocol-detection
