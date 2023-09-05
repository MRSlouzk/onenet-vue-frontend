import {ref, onUnmounted} from 'vue'
import axios from "axios";

export default function useTimer() {
    const interval = ref()
    let data = null

    async function fetchData() {
        const instance = axios.create({
            baseURL: 'http://127.0.0.1:5000',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "api-key": "mbpnAVG2YI9=scNkKk0LY1nqu14="
            }
        })

        let res = await instance.get('/datapoint')
        console.log(res.status)
        if(res.status === 200)
            if(res.data.errno === 0)
                // console.log(res.data.data.datastreams)
                return res.data.data.datastreams

        // console.error("未正确获取数据", res.statusText)
        // console.log(res.data.data.datastreams[0].datapoints)
    }

    function startTimer(options, refresh_func) {
        interval.value = setInterval(async () => {
            data = await fetchData()
            let new_tem = []
            let new_date = []
            let new_swt = []

            let temp_lst = data[0].datapoints
            let swt_lst = data[1].datapoints

            for(let i = 0; i < temp_lst.length; i++){
                let sdata = temp_lst[i]
                console.log(sdata.at.split(" ")[0])
                new_date.push(sdata.at.split(" ")[0])
                new_tem.push(sdata.value.replace("\r", ""))

            }

            for(let i=0; i<swt_lst.length; i++){
                let sdata = swt_lst[i]
                // console.log(sdata)
                new_swt.push(sdata.value.replace("\r", ""))
            }
            // console.log(new_date)
            // console.log(new_tem)
            // console.log(new_swt)

            options[0].data.series[0].data = new_tem
            options[1].data.series[0].data = new_swt
            options[0].data.xAxis.data = new_date
            options[1].data.xAxis.data = new_date

            // console.log(toRefs(options[0].data))
            // console.log(options[0].data)
            // console.log(options[1].data)
            // console.log(options[0].data.series[0].data)
            // console.log(options[0].data.xAxis.data)

            refresh_func(options[0].data, options[1].data)
        }, 5000)
    }

    onUnmounted(() => {
        clearInterval(interval.value)
    })

    return {
        startTimer
    }
}