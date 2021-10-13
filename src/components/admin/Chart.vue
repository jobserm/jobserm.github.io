<template>
  <div style="margin-top: 2rem">
    <apexchart
      type="bar"
      height="350"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
export default {
    data() {
        let months =  ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
        return {
            series: [{
            name: 'Users',
            data: [220, 140, 158, 258, 185, 149, 341, 456, 415]
            }, {
            name: 'Jobs',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
            }],
            chartOptions: {
            chart: {
                type: 'bar',
                height: 350
            },
            plotOptions: {
                bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: months
            },
            yaxis: {
                title: {
                text: '$ (thousands)'
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                formatter: function (val) {
                    return "$ " + val + " thousands"
                }
                }
            }
            },
        }
    }
}
</script>

<style>
</style>