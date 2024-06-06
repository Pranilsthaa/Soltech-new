import { LineChart } from '@mui/x-charts/LineChart';

const pData = [2000, 1200, 4000, 3000, 4800, 2000, 4300];
const xLabels = [
  '1/01',
  '1/08',
  '1/15',
  '1/22',
  '1/29',
  '2/05',
  '2/12',
];

function Linechart() {
  return (
    <div className='-mr-6'>
        <LineChart 
              series={[
                { data: pData },
              ]}
              xAxis={[{ scaleType: 'point', data: xLabels }]}
             width={580}
             height={300}
             grid={{horizontal: true, vertical: true}}
        />
    </div>
  )
}

export default Linechart;
