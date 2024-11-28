import React, { useState, useEffect } from 'react'
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

// const TickerTape = ({ messagesJson }) => {
//   return (
//     <TickerContainer>
//       <TickerText>Here are my messages: {messagesJson}</TickerText>
//     </TickerContainer>
//   )
// }

// Parse Messages messages.json structure
// const parseMessagesData = messagesJson => {
//console.debug('parseMessagesData')
// const severityMap = {
//   critical: { weight: 5, color: '#dc2626' },
//   high: { weight: 4, color: '#ea580c' },
//   elevated: { weight: 3, color: '#eab308' },
//   medium: { weight: 2, color: '#84cc16' },
//   low: { weight: 1, color: '#22c55e' }
// }
//return messagesJson
// return {
// risksBySeverity: Object.entries(
//   risksJson.reduce((acc, risk) => {
//     acc[risk.severity] = (acc[risk.severity] || 0) + 1
//     return acc
//   }, {})
// ).map(([severity, count]) => ({
//   name: severity,
//   count,
//   color: severityMap[severity.toLowerCase()].color
// })),
// risksByCategory: Object.entries(
//   risksJson.reduce((acc, risk) => {
//     acc[risk.category] = (acc[risk.category] || 0) + 1
//     return acc
//   }, {})
// ).map(([category, value]) => ({ name: category, value })),
// riskMatrix: risksJson.map(risk => ({
//   id: risk.id,
//   impact: risk.exploitation_impact,
//   likelihood: risk.exploitation_likelihood,
//   severity: risk.severity,
//   title: risk.title
// })),
// mitigationStatus: Object.entries(
//   risksJson.reduce((acc, risk) => {
//     acc[risk.risk_status] = (acc[risk.risk_status] || 0) + 1
//     return acc
//   }, {})
// ).map(([status, count]) => ({ name: status, value: count })),
// technicalAssetRisks: Object.entries(
//   risksJson.reduce((acc, risk) => {
//     console.debug('acc:', acc, 'risk:', risk)
//     if (!risk.data_breach_technical_assets || !acc) return {}
//     risk.data_breach_technical_assets.forEach(asset => {
//       acc[asset] =
//         (acc[asset] || 0) + severityMap[risk.severity.toLowerCase()].weight
//     })
//     return acc
//   }, {})
// ).map(([asset, weight]) => ({ name: asset, value: weight }))
// }
//}

const TickerTape = ({ messagesJson }) => {
  // const [activeIndex, setActiveIndex] = useState(0)
  // const [selectedSeverity, setSelectedSeverity] = useState(null)
  // const [timeRange, setTimeRange] = useState('1M')
  // const [data, setData] = useState(null)
  // useEffect(() => {
  //   console.debug('TickerTape with messagesJson started: ', messagesJson)
  //   if (messagesJson) {
  //     setData(parseMessagesData(messagesJson))
  //   }
  // }, [messagesJson])

  // if (!data) return <div>Loading...</div>
  const messages = 'Hello'
  return (
    <div className='p-6 space-y-8'>
      {/* TickerTape Header */}
      <div className='flex justify-between items-center'>
        <h2 className='text-2xl font-bold'>TickerTape</h2>
        <TickerContainer>
          <TickerText>Here are my messages: {messages} </TickerText>
        </TickerContainer>
      </div>
    </div>
  )
}

export default TickerTape
