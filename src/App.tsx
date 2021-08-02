import React from 'react'
import { Indicator } from '@shimoku/shimoku.components.reports.indicator'
import { StockLineChart } from '@shimoku/shimoku.components.reports.stocklinechart'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Shimoku Fake</h1>
      <Indicator title="Title" value="100" description="Description" color="success" align="center" />
      <br />
      <StockLineChart
        id="52125ece-c1c4-4ba0-b353-9d7cba5db9fa"
        initialChartdata={[
          { Timestamp: '2021-05-06', Value: '130' },
          { Timestamp: '2021-05-07', Value: '240' },
          { Timestamp: '2021-05-08', Value: '150' },
          { Timestamp: '2021-05-09', Value: '500' },
        ]}
        initialChartdataItem={{ Timestamp: '2021-05-10', Value: '320' }}
        fields={{
          key: 'Timestamp',
          values: ['Value'],
          labels: {
            hideKey: false,
            hideValue: false,
            key: 'Timestamp',
            value: 'Value',
          },
          dataZoomX: true,
          width: 600,
          height: 400,
        }}
      />
    </div>
  )
}

export default App
