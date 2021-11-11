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
export default {
    props: ['users', 'jobs'],
    data() {
        let months =  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        let users_amount = Array(11).fill(0)
        let jobs_amount = Array(11).fill(0)
        for (let i = 0; i < this.users.length; i++) {
            let date = new Date(this.users[i].created_at);
            users_amount[date.getMonth()] += 1;
        }

        for (let i = 0; i < this.jobs.length; i++) {
            let date = new Date(this.jobs[i].created_at);
            jobs_amount[date.getMonth()] += 1;
        }
        console.log(users_amount)
        return {
            series: [{
            name: 'Users',
            data: users_amount
            }, {
            name: 'Jobs',
            data: jobs_amount
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