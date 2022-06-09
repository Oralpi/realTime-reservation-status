<template>
  <div>
    <h2 class="sub-title">숙박, 대실 예약</h2>
    <Bar :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId" :dataset-id-key="datasetIdKey" :width="width" :height="height" />
  </div>
</template>

<!-- Composition API Backup -->
<!-- <script setup>
import { ref, onMounted } from 'vue';
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, BarElement, CategoryScale, LinearScale } from 'chart.js';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import axios from 'axios';

ChartJS.register(Title, Tooltip, BarElement, CategoryScale, LinearScale);
dayjs.locale('ko');

const props = defineProps({
  chartId: {
    type: String,
    default: 'bar-chart'
  },
  datasetIdKey: {
    type: String,
    default: 'label'
  },
  width: {
    type: Number,
    default: 3210
  },
  height: {
    type: Number,
    default: 300
  }
});
const chartData = {
  labels: [],
  datasets: [
    {
      data: [],
      backgroundColor: '#f87979',
      barThickness: 5
    }
  ]
};
const chartOptions = {
  responsive: false
};
const month = 30;

function calcLabels() {
  const today = dayjs().format();

  for (let i = 0; i <= month; i++) {
    chartData.labels.push(dayjs(today).subtract(i, 'day').format('MM.DD(dddd)'));
  }

  return chartData.labels.reverse();
};

console.log(calcLabels());

function reloadPage() {
  window.setTimeout('window.location.reload()', 2000);

  console.log('새로고침');
};
function numberOfReservationsPerMonth() {
  const path = "http://" + window.location.hostname + ":5000/number-of-reservations-per-month";

  axios.post(path).then((response) => {
    for (let i = 0; i <= month; i++) {
      chartData.datasets[0].data
    }
  }).catch((error) => {
    console.log(error);
  });
};
console.log(numberOfReservationsPerMonth());
onMounted(() => {
  calcLabels();
  numberOfReservationsPerMonth();
  // reloadPage();
});
</script> -->
<!-- Composition API Backup -->

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, BarElement, CategoryScale, LinearScale } from 'chart.js'
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import axios from 'axios';

ChartJS.register(Title, Tooltip, BarElement, CategoryScale, LinearScale);
dayjs.locale('ko');

export default {
  components: { Bar },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 275
    },
    height: {
      type: Number,
      default: 100
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      chartData: {
        labels: [],
        datasets: [
          { 
            data: [],
            backgroundColor: '#f87979',
            barThickness: 5
          }
        ]
      },
      chartOptions: {
        // responsive: false
        responsive: true
      },
      month: 30
    }
  },
  mounted() {
    this.calcLabels();
    // this.reloadPage();
    this.numberOfReservationsPerMonth();
  },
  methods: {
    calcLabels() {
      const today = dayjs().format();

      for (let i = 0; i <= this.month; i++) {
        this.chartData.labels.push(dayjs(today).subtract(i, 'day').format('MM.DD(dddd)'));
      };

      return this.chartData.labels.reverse();
    },
    reloadPage() {
      window.setTimeout('window.location.reload()', 2000);

      console.log('새로고침');
    },
    numberOfReservationsPerMonth() {
      const path = "http://" + window.location.hostname + ":5000/number-of-reservations-per-month";

      axios.post(path).then((response) => {
        this.chartData.datasets[0].data = response.data;

        console.log(this.chartData.datasets[0])
      }).catch((error) => {
        console.log(error);
      });
    }
  }
}
</script>