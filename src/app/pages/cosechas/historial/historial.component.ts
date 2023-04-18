import { Component, OnInit } from '@angular/core';
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5radar from "@amcharts/amcharts5/radar";


@Component({
  selector: 'app-historial-cosechas',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.less']
})
export class HistorialCosechaComponent {
  generateChart(component: any){
    
    let root = am5.Root.new(component);

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    let chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: true,
      panY: true,
      wheelX: "panX",
      wheelY: "zoomX",
      pinchZoomX:true
    }));
    
    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    let xRenderer = am5xy.AxisRendererX.new(root, {});
    xRenderer.grid.template.set("forceHidden", true);
    xRenderer.labels.template.setAll({multiLocation: 0, location:0});
    
    let xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
      baseInterval: { timeUnit: "minute", count: 30 },
      renderer: xRenderer,
      tooltip: am5.Tooltip.new(root, {}),
      extraMin: 0.01,
      extraMax: 0.01,
      tooltipLocation: 0
    }));
    
    let yRenderer = am5xy.AxisRendererY.new(root, {});
    yRenderer.grid.template.set("forceHidden", true);
    
    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      renderer: yRenderer
    }));
    
    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
      behavior: "none",
      xAxis: xAxis
    }));
    cursor.lineY.set("visible", false);
    
    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    let series = chart.series.push(am5xy.LineSeries.new(root, {
      name: "Series",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "value",
      valueXField: "timestamp",
      locationX: 0,
      seriesTooltipTarget: "bullet",
      tooltip: am5.Tooltip.new(root, {
        labelText: "{valueY}"
      })
    }));
    
    series.bullets.push(function() {
      let circle = am5.Circle.new(root, {
        radius: 3,
        templateField: "bulletSettings",
        fill: series.get("fill"),
        strokeWidth: 2,
        stroke: root.interfaceColors.get("background")
      });
    
      return am5.Bullet.new(root, {
        sprite: circle,
        locationX: 0
      });
    });
    
    function createGuide(value: any, text: any, dashArray: any) {
      let guideDataItem = yAxis.makeDataItem({ value: value });
      yAxis.createAxisRange(guideDataItem);
      guideDataItem.get("grid")!.setAll({
        forceHidden: false,
        strokeOpacity: 0.2,
        strokeDasharray: dashArray
      });
    
      let label = guideDataItem.get("label");
      label!.setAll({
        text: text,
        isMeasured: false,
        centerY: am5.p100
      });
    
      label!.adapters.add("x", function(x) {
        return chart.plotContainer.width();
      })
      
      chart.events.on("boundschanged", function(){
        label!.set("x", label!.get("x"))
      })  
    }
    
    
    createGuide(98.8, "Min", []);
    createGuide(101.2, "Max", []);
    
    
    let data = [{
      "timestamp": new Date(2020, 0, 1, 22, 30).getTime(),
      "value": 99.71
    }, {
      "timestamp": new Date(2020, 0, 1, 23, 0).getTime(),
      "value": 99.13
    }, {
      "timestamp": new Date(2020, 0, 1, 23, 30).getTime(),
      "value": 98.5
    }, {
      "timestamp": new Date(2020, 0, 2, 0, 0).getTime(),
      "value": 101
    }, {
      "timestamp": new Date(2020, 0, 2, 0, 30).getTime(),
      "value": 99.45
    }, {
      "timestamp": new Date(2020, 0, 2, 1, 0).getTime(),
      "value": 100.9
    }, {
      "timestamp": new Date(2020, 0, 2, 1, 30).getTime(),
      "value": 100.39
    }, {
      "timestamp": new Date(2020, 0, 2, 2, 0).getTime(),
      "value": 101.1
    }, {
      "timestamp": new Date(2020, 0, 2, 2, 30).getTime(),
      "value": 101.45
    }, {
      "timestamp": new Date(2020, 0, 2, 3, 0).getTime(),
      "value": 101.15
    }, {
      "timestamp": new Date(2020, 0, 2, 3, 30).getTime(),
      "value": 100.5
    }, {
      "timestamp": new Date(2020, 0, 2, 4, 0).getTime(),
      "value": 101.55
    }, {
      "timestamp": new Date(2020, 0, 2, 4, 30).getTime(),
      "value": 101.7
    }, {
      "timestamp": new Date(2020, 0, 2, 5, 0).getTime(),
      "value": 100.5
    }, {
      "timestamp": new Date(2020, 0, 2, 5, 30).getTime(),
      "value": 100.92
    }, {
      "timestamp": new Date(2020, 0, 2, 6, 0).getTime(),
      "value": 102.2
    },{
      "timestamp": new Date(2020, 0, 2, 6, 20).getTime(),
      "value": 99
    },{
      "timestamp": new Date(2020, 0, 2, 6, 30).getTime(),
      "value": 103
    },];
    
    series.data.setAll(data);
    series.set("fill", am5.color(0x8d375a));
    series.set("stroke", am5.color(0x8d375a));
    
    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);
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
