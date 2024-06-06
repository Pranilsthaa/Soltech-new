import { BarChart } from '@mui/x-charts'

function Barchart() {
  return (
    <div>
         <BarChart
            xAxis={[
                {
                id: 'barCategories',
                data: ['1/2', '1/3', '1/4', '1/5', '1/6', '1/7', '1/8'],
                scaleType: 'band',
                label: 'Date',
                labelStyle: {
                    fontSize: '12px',
                },
                },
            ]}
            // yAxis={[
            //     {
            //         label: 'Daily Traffic',
            //         labelStyle: {
            //             fontSize: '12px',
            //         }
            //     }
            // ]}
            series={[
                {
                data: [200, 105, 300,500, 100, 200, 122],
                color: 'lightblue',
                },
            ]}
            width={350}
            height={240}
         />
    </div>
  )
}

export default Barchart
