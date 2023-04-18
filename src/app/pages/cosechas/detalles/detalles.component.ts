import { Component, OnInit } from '@angular/core';
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5radar from "@amcharts/amcharts5/radar";


@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.less']
})
export class DetallesCosechaComponent {
  generateChart(component: any){
    let root = am5.Root.new(component);

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/radar-chart/
    let chart = root.container.children.push(
      am5radar.RadarChart.new(root, {
        panX: false,
        panY: false,
        startAngle: 180,
        endAngle: 360
      })
    );
    
    // Create axis and its renderer
    // https://www.amcharts.com/docs/v5/charts/radar-chart/gauge-charts/#Axes
    let axisRenderer = am5radar.AxisRendererCircular.new(root, {
      innerRadius: -10,
      strokeOpacity: 1,
      strokeWidth: 5,
      strokeGradient: am5.LinearGradient.new(root, {
        rotation: 0,
        stops: [
          { color: am5.color(0xfb7116) },
          { color: am5.color(0xf4fb16) },
          { color: am5.color(0x19d228) },
          { color: am5.color(0xf6d32b) },
          { color: am5.color(0xfb7116) }
        ]
      })
    });
    
    let xAxis = chart.xAxes.push(
      am5xy.ValueAxis.new(root, {
        maxDeviation: 0,
        min: 0,
        max: 100,
        strictMinMax: true,
        renderer: axisRenderer
      })
    );
    
    // Add clock hand
    // https://www.amcharts.com/docs/v5/charts/radar-chart/gauge-charts/#Clock_hands
    let axisDataItem = xAxis.makeDataItem({});
    axisDataItem.set("value", 0);
    
    let bullet = axisDataItem.set("bullet", am5xy.AxisBullet.new(root, {
      sprite: am5radar.ClockHand.new(root, {
        radius: am5.percent(99)
      })
    }));
    
    xAxis.createAxisRange(axisDataItem);
    
    
    setTimeout(() => {
      axisDataItem.animate({
        key: "value",
        to: Math.round(Math.random() * 100),
        duration: 800,
        easing: am5.ease.out(am5.ease.cubic)
      });
    }, 2000);
  }
  ngAfterViewInit(){
    this.generateChart("chartdiv");
    this.generateChart("chartdiv1");
    this.generateChart("chartdiv2");
    this.generateChart("chartdiv3");
    this.generateChart("chartdiv4");
    this.generateChart("chartdiv5");
  }
}
