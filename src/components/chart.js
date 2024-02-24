import React from 'react'
import { Bar ,Pie} from 'react-chartjs-2';
import 'chart.js/auto';
export const Chart = () => {
  return (
    <div className='flex flex-row w-1/2 h-[300px] justify-center items-center'>


   
    <div className='flex w-[900px] h-[300px] justify-center'>
            <Bar
            redraw="true"
            data={{
                labels:["2010","2012","2015","2020","2050"],
                datasets:[
                    {label:"Facebook",data:[200,232,300,500,2000,5000]},
                    {label:"Instagram",data:[100,389,532,760,4200,6900]},
                    {label:"Youtube",data:[34,250,333,800,1400,9560]},
                    {label:"Twitter",data:[100,420,500,750,3400,8200]},
                  

                ],

            }
            }
            />
    </div>
    <div className='flex w-[900px] h-[300px]'>
    <Pie
            redraw="true"
            data={{
                labels:["2010","2012","2015","2020","2050"],
                datasets:[
                    {labels:"Facebook",data:[200,232,300,500,2000,5000]},
                    {labels:"Instagram",data:[100,389,532,760,4200,6900]},
                    {labels:"Youtube",data:[34,250,333,800,1400,9560]},
                    {labels:"Twitter",data:[100,420,500,750,3400,8200]},
                  

                ],

            }
            }
            />
            
    </div>

    </div>
  )
}
