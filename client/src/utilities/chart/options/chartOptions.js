export const chartOptions = (
  title,
  type,
  xAxisList,
  yAxisUnit,
  yAxisData1,
  yAxisData2,
  yAxisData3,
  yAxisDataName1,
  yAxisDataName2,
  yAxisDataName3,
  chartColor,
  tooltipClear
) => {
  return {
    chart: { margin: 100, marginTop: 100, marginRight: 100 },
    title: {
      text: title,
    },

    xAxis: {
      categories: xAxisList,
      title: {
        text: null,
        align: 'high',
      },
    },

    yAxis: [
      {
        title: {
          text: yAxisUnit,
        },
      },
    ],

    plotOptions: {
      line: {
        dataLabels: {
          enabled: tooltipClear,
        },
        enableMouseTracking: !tooltipClear,
      },

      spline: {
        states: {
          typehover: {
            lineWidth: 5,
          },
        },
      },

      area: {
        marker: {
          enabled: false,
        },
      },
    },

    series: [
      {
        type: type,
        name: yAxisDataName1,
        stickyTracking: false,
        data: yAxisData1,
        color: chartColor,
        zIndex: 10,
      },
      {
        type: type,
        name: yAxisDataName2,
        stickyTracking: false,
        data: yAxisData2,
        color: '#99e4ed',
        zIndex: 10,
      },
      {
        type: type,
        name: yAxisDataName3,
        stickyTracking: false,
        data: yAxisData3,
        color: '#eda299',
        zIndex: 10,
      },
    ],

    legend: {
      align: 'right',
      verticalAlign: 'top',
      layout: 'vertical',
      x: 0,
      y: 0,
    },
  };
};
