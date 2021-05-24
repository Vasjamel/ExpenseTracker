import ChartBar from './ChartBar'
import './Chart.css'

const Chart = (props) => {
  const dataPointValues = props.dataPoint.map((point) => point.value)
  const totalMaximum = Math.max(...dataPointValues)

  return (
    <div className='chart'>
      {props.dataPoint.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
          key={dataPoint.id}
        />
      ))}
    </div>
  )
}

export default Chart
