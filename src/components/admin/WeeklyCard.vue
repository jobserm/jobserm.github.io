<template>
  <div>
      <c-flex mt="2rem">
          <c-box 
          w="100%" 
          class="generator"
          color="white"
          py="2rem"
          px="7rem"
          borderRadius="0.5rem">
              <c-text fontSize="3xl">{{ header }}</c-text>
              <c-text fontSize="2xl">{{ amount }}</c-text>
              <c-text fontSize="xl">{{ remark }}</c-text>
          </c-box>
      </c-flex>
  </div>
</template>

<script>
export default {
    props: ['header', 'amount', 'remark']
}
</script>

<style>
    .generator {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='500' height='200' preserveAspectRatio='none' viewBox='0 0 500 200'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1001%26quot%3b)' fill='none'%3e%3crect width='500' height='200' x='0' y='0' fill='rgba(70%2c 114%2c 255%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c191.715C35.239%2c194.332%2c67.529%2c167.868%2c90.784%2c141.263C111.224%2c117.878%2c112.78%2c84.959%2c119.764%2c54.695C125.384%2c30.341%2c125.44%2c6.55%2c127.62%2c-18.349C130.55%2c-51.801%2c150.882%2c-87.321%2c134.782%2c-116.789C118.694%2c-146.236%2c80.769%2c-156.142%2c48.115%2c-163.865C16.624%2c-171.313%2c-15.229%2c-166.355%2c-46.91%2c-159.76C-81.104%2c-152.642%2c-119.976%2c-150.172%2c-143.158%2c-124.047C-166.387%2c-97.869%2c-165.31%2c-58.998%2c-167.325%2c-24.058C-169.195%2c8.36%2c-170.165%2c42.126%2c-154.378%2c70.502C-139.115%2c97.938%2c-107.207%2c109.003%2c-82.513%2c128.392C-54.68%2c150.246%2c-35.29%2c189.094%2c0%2c191.715' fill='%230037e7'%3e%3c/path%3e%3cpath d='M500 306.58C521.287 305.435 542.735 305.711 561.78 296.132 582.149 285.887 597.032 268.693 611.061 250.72 628.782 228.019 660.139 206.004 654.119 177.841 647.98 149.122 604.126 148.629 584.558 126.73 565.473 105.372 568.9449999999999 65.672 543.015 53.50399999999999 517.47 41.516999999999996 488.615 61.06899999999999 461.53499999999997 69.001 434.435 76.939 402.753 78.372 384.51300000000003 99.93 366.312 121.443 368.074 152.707 366.894 180.862 365.81600000000003 206.586 365.61699999999996 233.14 377.985 255.722 389.94100000000003 277.551 410.822 293.44 433.795 303.016 454.616 311.694 477.476 307.79200000000003 500 306.58' fill='%23a4baff'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1001'%3e%3crect width='500' height='200' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
    }
</style>