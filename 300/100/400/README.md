# 400 - Create the Ticker Tape Component

Inside the `components` folder, create a file named `TickerTape.js`.

```bash
$ cd ticker_tape
$ touch components/TickerTape.js
```

Open 'TickerTape.js' and add the following code:

```jsx
import React from 'react'
import styled from 'styled-components'

const TickerContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
  box-sizing: border-box;
  width: 100%;
  background: #282c34;
  color: white;
  padding: 10px 0;
`

const TickerText = styled.div`
  display: inline-block;
  animation: ticker 10s linear infinite;

  @keyframes ticker {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`

const TickerTape = ({ messagesJson }) => {
  return (
    <TickerContainer>
      <TickerText>{messagesJson}</TickerText>
    </TickerContainer>
  )
}

export default TickerTape
```