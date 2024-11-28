import React, { useState, useEffect } from 'react'

const Dashboard = ({ risksJson }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [selectedSeverity, setSelectedSeverity] = useState(null)
  const [timeRange, setTimeRange] = useState('1M')
  const [data, setData] = useState(null)
  useEffect(() => {
    console.debug('Dashboard with risksJson started: ', risksJson)
    if (risksJson) {
      // setData(parseThreagileData(risksJson))
    }
  }, [risksJson])

  if (!data) return <div>Loading...</div>

  return (
    <div className='p-6 space-y-8'>
      {/* Dashboard Header */}
      <div className='flex justify-between items-center'>
        <h2 className='text-2xl font-bold'>Dashboard</h2>
        <div className='flex gap-4'>
         Some Info
        </div>
      </div>
    </div>
  )
}

export default Dashboard