const menuTriggers = $('.menu-trigger');
[...menuTriggers].map((trigger) => {
  trigger.addEventListener('click', ({ target }) => {
    const menuWrapper = target.closest('.menu-wrapper');
    menuWrapper.classList.toggle('expanded');
  });
});

$(document).ready(function () {
  $('#three_stripes_btn').click(function (event) {
    $('.sidebar').toggleClass('closed');
    $('.content').toggleClass('moved');
    $('.menu-wrapper').toggleClass('expanded');
  })
})

const COLORS = {
  borderColor: '#f2f6fc',
  blue: '#7faef5',
  purple: '#f772e3',
  yellow: '#acc236'
};

let chart1 = document.querySelector('#ProjectActivityChart').getContext('2d');
let PAChart = new Chart(chart1, {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'My First dataset',
      borderColor: COLORS.borderColor,
      backgroundColor: 'rgb(232, 97, 185,0.7)',
      tension: 0.5,
      fill: true,
      data: [],
      pointRadius: [0, 7, 7, 7, 7, 7, 0],

      pointBackgroundColor: 'gray',
    }, {
      label: 'My Second dataset',
      borderColor: COLORS.borderColor,
      backgroundColor: COLORS.blue,
      fill: true,
      tension: 0.5,
      data: [],
      pointRadius: 1,
      pointBackgroundColor: 'white',
    }],
  },
  options: {
    responsive: true,
    tooltips: {
      mode: 'index',
    },
    hover: {
      mode: 'index'
    },
    scales: {
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false
      }
    }
  }
})


let chart2 = document.querySelector('#ManagersActivityChart').getContext('2d');
let MAChart = new Chart(chart2, {
  type: 'bar',
  data: {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
    datasets: [{
      label: 'My First Dataset',
      data: [],
      backgroundColor: 'rgba(55, 164, 237, 0.9)',
      hoverBackgroundColor: 'rgba(222, 22, 52,1)',
      borderWidth: 1
    }]
  },

  options: {
    plugins: {
      legend: {
        display: false
      }
    },

    scales: {
      y: {
        beginAtZero: true,
        display: false,
        gridLines: {
          display: false
        }
      },
      x: {
        gridLines: {
          display: false
        }
      }
    }

  },
})

var colors = ['#007bff', '#28a745', '#333333', '#c3e6cb', '#dc3545', '#6c757d'];

/* 3 donut charts */
var donutOptions = {
  cutoutPercentage: 85,
  legend: { position: 'bottom', padding: 5, labels: { pointStyle: 'circle', usePointStyle: true } }
};

// donut 1
var chDonutData1 = {
  labels: ['Views'],
  datasets: [
    {
      backgroundColor: ['#5cd93d', '#e6e9ed'],
      borderWidth: 0,
      data: [4782, 1480]
    }
  ]
};

var chDonut1 = document.getElementById("chDonut1");
if (chDonut1) {
  new Chart(chDonut1, {
    type: 'doughnut',
    data: chDonutData1,
    options: donutOptions
  });
}

// donut 2
var chDonutData2 = {
  labels: ['Users'],
  datasets: [
    {
      backgroundColor: ['#d93da0', '#e6e9ed'],
      borderWidth: 0,
      data: [1263, 853]
    }
  ]
};
var chDonut2 = document.getElementById("chDonut2");
if (chDonut2) {
  new Chart(chDonut2, {
    type: 'doughnut',
    data: chDonutData2,
    options: donutOptions
  });
}

// donut 3
var chDonutData3 = {
  labels: ['Purchases'],
  datasets: [
    {
      backgroundColor: ['#5596f2', '#e6e9ed'],
      borderWidth: 0,
      data: [394, 450]
    }
  ]
};
var chDonut3 = document.getElementById("chDonut3");
if (chDonut3) {
  new Chart(chDonut3, {
    type: 'doughnut',
    data: chDonutData3,
    options: donutOptions
  });
}

$.ajax("./data.json").done(function (responce) {
  PAChart.data.datasets[0].data = responce.PAChart1;
  PAChart.data.datasets[1].data = responce.PAChart2;
  PAChart.update();
  MAChart.data.datasets[0].data = responce.MAData;
  MAChart.update();
  VisitChart.data.datasets[0].data = responce.VisitsData;
  VisitChart.update();
});