<template>
  <c-box mt="2rem" bgColor="white">
    <apexchart
      type="bar"
      height="350"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </c-box>
</template>

<script>
import backendInstance from '../../services/backendInstance'
export default {
    props: ['users', 'jobs'],
    data() {
        let months =  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        return {
            series: [{
            name: 'Users',
            data: this.users
            }, {
            name: 'Jobs',
            data: this.jobs
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
    },
}
</script>

<style>
</style>