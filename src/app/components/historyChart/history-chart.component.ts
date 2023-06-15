import { Component, Input } from '@angular/core';
import { ISowinStatRecord } from 'src/app/models/Sowing.model';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
@Component({
  selector: 'app-history-chart',
  templateUrl: './history-chart.component.html',
  styleUrls: ['./history-chart.component.less'],
})
export class HistoryChartComponent {
  @Input() historyStats: ISowinStatRecord = {
    key: '',
    stats: [],
  };

  generateChart(component: any) {
    let root = am5.Root.new(component);

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: 'panX',
        wheelY: 'zoomX',
        pinchZoomX: true,
      })
    );

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    let xRenderer = am5xy.AxisRendererX.new(root, {
      inversed: false
    });

    let xAxis = chart.xAxes.push(
      am5xy.GaplessDateAxis.new(root, {
        baseInterval: { timeUnit: 'second', count: 1 },
        renderer: xRenderer
      })
    );

    let yRenderer = am5xy.AxisRendererY.new(root, {});
    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: yRenderer,
      })
    );

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    let cursor = chart.set(
      'cursor',
      am5xy.XYCursor.new(root, {
        behavior: 'none',
        xAxis: xAxis,
      })
    );
    cursor.lineY.set('visible', false);

    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    let series = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: 'Series',
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: 'value',
        valueXField: 'timestamp',
        seriesTooltipTarget: 'bullet',
        locationX: 0,
      })
    );

    series.bullets.push(function () {
      let circle = am5.Circle.new(root, {
        radius: 4,
        templateField: 'bulletSettings',
        fill: series.get('fill'),
        strokeWidth: 2,
        stroke: root.interfaceColors.get('background'),
        tooltipText: "[bold]{valueY}[/]\n{valueX.formatDate(\"YYYY/MM/dd hh:mm a\")}",
      });

      return am5.Bullet.new(root, {
        sprite: circle,
        locationX: 0
      });
    });

    function createGuide(value: any, text: any, dashArray: any) {
      let guideDataItem = yAxis.makeDataItem({ value: value });
      yAxis.createAxisRange(guideDataItem);
      guideDataItem.get('grid')!.setAll({
        forceHidden: false,
        strokeOpacity: 0.2,
        strokeDasharray: dashArray,
      });

      let label = guideDataItem.get('label');
      label!.setAll({
        text: text,
        isMeasured: false,
        centerY: am5.p100,
      });

      label!.adapters.add('x', function (x) {
        return chart.plotContainer.width();
      });

      chart.events.on('boundschanged', function () {
        label!.set('x', label!.get('x'));
      });
    }

    createGuide(10.8, 'Min', []);
    createGuide(101.2, 'Max', []);

    let data = this.getDataStat();

    series.data.setAll(data);
    series.set('fill', am5.color(0x8d375a));
    series.set('stroke', am5.color(0x8d375a));

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);
  }

  public getDataStat() {
    return this.historyStats.stats.map((item) => {
      return {
        timestamp: new Date(item.created_at).getTime(),
        value: item.value,
      };
    });
  }
  public getStatName() {
    if (this.historyStats.stats[0].fish_step_stat_name) {
      return this.historyStats.stats[0].fish_step_stat_name;
    } else {
      return this.historyStats.key;
    }
  }
  ngAfterViewInit(): void {
    this.generateChart('chartdiv' + this.historyStats.key);
  }
}
