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
  url: 'xxx',
  onSuccess: () => {
    console.log('Success')
  },
  onError: () => {
    console.error('error')
  },
  noSupport: () => {
    console.error('no support')
  }
})
```


# Thanks
https://github.com/ismailhabib/custom-protocol-detection
