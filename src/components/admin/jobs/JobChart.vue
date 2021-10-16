<template>
    <c-box mt="2rem" bgColor="white">
        <apexchart
            type="bar"
            height="350"
            :options="chartOptions"
            :series="series"
        />
    </c-box>
</template>

<script>
export default {
    data() {
        let months =  ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
        return {
            series: [
                {
                    name: 'Jobs',
                    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
                },
            ],
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
                width: 1,
                colors: ['transparent']
            },
            xaxis: {
                categories: months
            },
            yaxis: {
                title: {
                    text: 'posted job'
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                formatter: function (val) {
                    return "ประกาศงานทั้งหมด " + val
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