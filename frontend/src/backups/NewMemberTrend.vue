<template>
  <div>
    <h2 class="sub-title">신규회원추이</h2>
    <Bar :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId" :dataset-id-key="datasetIdKey" :width="width" :height="height" />
  </div>
</template>

<!-- Options API -->
<!-- <script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, BarElement, CategoryScale, LinearScale } from 'chart.js'
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

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
      default: 3210
    },
    height: {
      type: Number,
      default: 300
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
            data: [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12,
              13,
              14,
              15,
              16,
              17,
              18,
              19,
              20,
              21,
              22,
              23,
              24,
              25,
              26,
              27,
              28,
              29,
              30,
              95
            ],
            backgroundColor: '#f87979',
            barThickness: 5
          }
        ]
      },
      chartOptions: {
        responsive: false
      },
      month: 30
    }
  },
  mounted() {
    this.calcLabels();
    // this.calcData();
    // this.reloadPage();
  },
  methods: {
    calcLabels() {
      const today = dayjs().format();

      for (let i = 0; i <= this.month; i++) {
        this.chartData.labels.push(dayjs(today).subtract(i, 'day').format('MM.DD(dddd)'));
      };

      return this.chartData.labels.reverse();
    },
    calcData() {
      for (let i = 0; i <= this.month; i++) {
        this.chartData.datasets.data = i;

        console.log(this.chartData.datasets.data);
      };

      return this.chartData.datasets.data;
    },
    reloadPage() {
      window.setTimeout('window.location.reload()', 2000);

      console.log('새로고침');
    },
  }
}
</script> -->
<!-- Options API -->

<!-- Composition API Backup -->
<script setup>
import { ref, onMounted } from 'vue';
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, BarElement, CategoryScale, LinearScale } from 'chart.js';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

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
      data: [2, 4, 6, 8, 10, 2, 4, 6, 8, 10, 2, 4, 6, 8, 10, 2, 4, 6, 8, 10, 2, 4, 6, 8, 10, 2, 4, 6, 8, 100, 500],
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

onMounted(() => {
  calcLabels();
  // reloadPage();
});
</script>
<!-- Composition API Backup -->