<template>
  <div v-for="id in [0, 1]" :key="id" v-bind:id="'customChart'+id" :style="{ width: '100%', height: '400px' }"></div>
</template>

<script>
import {defineComponent, onMounted, ref} from "vue";
import useTimer from "../utils/timer"
import * as echarts from "echarts"

// export default {
//   data(){
//     return{
//       ChartLineGraph: null
//     }
//   },
//   watch:{
//     data:{
//       handler(newValue, oldValue){
//         this.ShowDiagram(this.id, newValue)
//         if(oldValue)
//           console.log()
//       },
//       deep: true
//     }
//   },
//   props:["id", "data"],
//   mounted:function (){
//     this.ShowDiagram(this.id, this.data)
//   },
//   methods:{
//     ShowDiagram(id, data){
//       let _this = this
//
//       this.ChartLineGraph = echarts.init(document.getElementById(id))
//       this.ChartLineGraph.setOption(data)
//
//       window.addEventListener("resize", function (){
//         _this.ChartLineGraph.resize()
//       });
//     },
//   },
// }

export default defineComponent({
  name: 'ECharts',
  data(){
    return {
      options: [
        {
          id: 0,
          data: {
            title: {
              text: '温度'
            },
            tooltip: {},
            xAxis: {
              data: ['00-00', '00-00', '00-00', '00-00', '00-00', '00-00']
            },
            yAxis: [
              {
                name: '摄氏度',
                type: 'value',
                min: -10,
                max: 50
              }
            ],
            series: [
              {
                name: '摄氏度',
                type: 'line',
                data: [0, 0, 0, 0, 0, 0]
              }
            ]
          }
        },
        {
          id: 1,
          data: {
            title: {
              text: '湿度'
            },
            tooltip: {},
            xAxis: {
              data: ['00-00', '00-00', '00-00', '00-00', '00-00', '00-00']
            },
            yAxis: [
              {
                name: '%',
                type: 'value',
                max: 100
              }
            ],
            series: [
              {
                name: '湿度百分比',
                type: 'line',
                data: [0, 0, 0, 0, 0, 0]
              }
            ]
          }
        },
      ],
    }
  },
  setup(){
    const chart_temp = ref(null)
    const chart_swt = ref(null)
    const chart_data = {
      options: [
        {
          id: 0,
          data: {
            title: {
              text: '温度'
            },
            tooltip: {},
            xAxis: {
              data: ['00-00', '00-00', '00-00', '00-00', '00-00', '00-00']
            },
            yAxis: [
              {
                name: '摄氏度',
                type: 'value',
                min: -10,
                max: 50
              }
            ],
            series: [
              {
                name: '摄氏度',
                type: 'line',
                data: [0, 0, 0, 0, 0, 0]
              }
            ]
          }
        },
        {
          id: 1,
          data: {
            title: {
              text: '湿度'
            },
            tooltip: {},
            xAxis: {
              data: ['00-00', '00-00', '00-00', '00-00', '00-00', '00-00']
            },
            yAxis: [
              {
                name: '%',
                type: 'value',
                max: 100
              }
            ],
            series: [
              {
                name: '湿度百分比',
                type: 'line',
                data: [0, 0, 0, 0, 0, 0]
              }
            ]
          }
        },
      ],
    }

    // const chartOptiontemp = (list_date, list_temp) => chart_temp.setOption({
    //         title: {
    //           text: '温度'
    //         },
    //         tooltip: {},
    //         xAxis: {
    //           data: list_date
    //         },
    //         yAxis: [
    //           {
    //             name: '摄氏度',
    //             type: 'value',
    //             min: -10,
    //             max: 50
    //           }
    //         ],
    //         series: [
    //           {
    //             name: '摄氏度',
    //             type: 'line',
    //             data: list_temp
    //           }
    //         ]
    //       })
    // const chartOptionswt = (list_date, list_swt) => ctx.chart_swt.setOption({
    //     title: {
    //       text: '温度'
    //     },
    //     tooltip: {},
    //     xAxis: {
    //       data: list_date
    //     },
    //     yAxis: [
    //       {
    //         name: '摄氏度',
    //         type: 'value',
    //         min: -10,
    //         max: 50
    //       }
    //     ],
    //     series: [
    //       {
    //         name: '摄氏度',
    //         type: 'line',
    //         data: list_swt
    //       }
    //     ]
    //   })

    // let option = {
    //   options: [
    //     {
    //       id: 0,
    //       data: {
    //         title: {
    //           text: '温度'
    //         },
    //         tooltip: {},
    //         xAxis: {
    //           data: ['00-00', '00-00', '00-00', '00-00', '00-00', '00-00']
    //         },
    //         yAxis: [
    //           {
    //             name: '摄氏度',
    //             type: 'value',
    //             min: -10,
    //             max: 50
    //           }
    //         ],
    //         series: [
    //           {
    //             name: '摄氏度',
    //             type: 'line',
    //             data: [0, 0, 0, 0, 0, 0]
    //           }
    //         ]
    //       }
    //     },
    //     {
    //       id: 1,
    //       data: {
    //         title: {
    //           text: '湿度'
    //         },
    //         tooltip: {},
    //         xAxis: {
    //           data: ['00-00', '00-00', '00-00', '00-00', '00-00', '00-00']
    //         },
    //         yAxis: [
    //           {
    //             name: '%',
    //             type: 'value',
    //             max: 100
    //           }
    //         ],
    //         series: [
    //           {
    //             name: '湿度百分比',
    //             type: 'line',
    //             data: [0, 0, 0, 0, 0, 0]
    //           }
    //         ]
    //       }
    //     },
    //   ],
    // }

    function renderChart(data1, data2){
      if (chart_temp.value){
        chart_temp.value.clear()
        // console.log(data1)
        chart_temp.value.setOption(data1)
      }
      if (chart_swt.value){
        chart_swt.value.clear()
        // console.log(data2)
        chart_swt.value.setOption(data2)
      }
    }

    onMounted(() => {
      chart_temp.value = echarts.init(document.getElementById("customChart0"))
      chart_swt.value = echarts.init(document.getElementById("customChart1"))

      // chartOptiontemp(option.options[0].data.xAxis.data, option.options[0].data.series[0].data)
      // chartOptionswt(option.options[1].data.xAxis.data, option.options[1].data.series[0].data)
      // this.charOptionTemp(option.options[0].data, option.options[1].data)

      // renderChart(option.options[0].data. option.options[1].data)
      renderChart(chart_data.options[0].data, chart_data.options[1].data)

      window.addEventListener("resize", function (){
        chart_temp.value.resize()
        chart_swt.value.resize()
      });
    })

    const {startTimer} = useTimer()

    // startTimer(option.options, renderChart)
    startTimer(chart_data.options, renderChart)
  },
  methods:{}
})
</script>
<style lang="less" scoped>
</style>
