import * as Highcharts from 'highcharts';

export default () => {
  Highcharts.setOptions({
    chart: {
      style: {
        fontFamily: 'Noto Sans CJK KR',
        fontSize: '1rem',
      },
      reflow: true,
    },

    lang: {
      numericSymbols: [],
      thousandsSep: ',',
      noData: '조회 결과가 없습니다.',
    },

    title: {
      y: 10,
      style: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
      },
    },

    exporting: {
      enabled: false,
    },

    credits: {
      enabled: false,
    },

    tooltip: {
      shared: true,
      useHTML: true,
      headerFormat:
        '<table><tr><th colspan="2" style="font-size: 0.75rem; font-weight: bold">{point.key}</th></tr>',
      pointFormat: `<tr>
        <td style="display: inline-block; margin-right: 0.5rem; font-size: 0.625rem">{series.name} </td>
      <td style="text-align: right; font-weight: bold"><b>{point.y}</b></td>
      </tr>`,
      footerFormat: '</table>',
      borderWidth: 16 * 0.0625,
      borderRadius: 16 * 0.25,
      distance: 16,
      padding: 16 * 0.5,
      style: {
        fontSize: '0.75rem',
      },
    },

    xAxis: {
      labels: {
        style: {
          fontSize: '1rem',
        },
      },
      tickPixelInterval: 16 * 7.8,
      lineWidth: 16 * 0.0625,
      tickWidth: 16 * 0,
      tickLength: 16 * 0,

      title: {
        style: {
          fontSize: '0.625rem',
          fontWeight: 'bold',
        },
      },

      minPadding: 0,
      maxPadding: 0,
    },

    yAxis: {
      labels: {
        style: {
          fontSize: '1rem',
        },
      },
      gridLineWidth: 0.7,
      gridLineColor: '#eeeeee',
      tickPixelInterval: 16 * 2.8,

      lineWidth: 16 * 0.0625,
      tickWidth: 16 * 0,
      tickLength: 16 * 0,
      title: {
        align: 'high',
        rotation: 0,
        offset: 0,
        margin: 16 * 1.7,
        x: 16 * -0.875,
        y: 16 * -1,
        style: {
          fontSize: '0.625rem',
          fontWeight: 'bold',
        },
      },
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        marker: {
          radius: 16 * 0.25,
        },
      },
      line: {
        lineWidth: 16 * 0.125,
      },
    },

    legend: {
      align: 'center',
      verticalAlign: 'bottom',
      x: 0,
      y: 0,
      itemDistance: 16 * 0.75,
      itemStyle: {
        fontSize: '0.625rem',
      },
      itemMarginTop: 16 * 0.125,
      itemMarginBottom: 16 * 0.125,
      symbolRadius: 0,
      symbolWidth: 16 * 1,
      symbolPadding: 16 * 0.25,
      margin: 16 * 0.5,
    },

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              enabled: false,
            },
          },
        },
      ],
    },
  });
};
