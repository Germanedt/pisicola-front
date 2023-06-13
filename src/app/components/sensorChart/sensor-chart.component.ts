import { Component, Input } from '@angular/core';
import { ISowingStat } from 'src/app/models/Sowing.model';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import * as am5radar from '@amcharts/amcharts5/radar';
@Component({
  selector: 'app-sensor-chart',
  templateUrl: './sensor-chart.component.html',
  styleUrls: ['./sensor-chart.component.less'],
})
export class SensorChartComponent {
  @Input() sowingStat: ISowingStat = {
    id: 0,
    pond_id: 0,
    sowing_id: 0,
    fish_step_stat_id: 0,
    key: '',
    value: 0,
    fish_step_stat_name: '',
    fish_step_stat_value_minimum: 0,
    fish_step_stat_value_maximum: 0,
    topic: 0,
    topic_time: '',
    triggered_alarm: false,
    alarm_source: undefined,
    created_at: '',
    updated_at: '',
  };
  public generateChart(component: any) {
    let root = am5.Root.new(component);
    root.setThemes([am5themes_Animated.new(root)]);
    let chart = root.container.children.push(
      am5radar.RadarChart.new(root, {
        panX: false,
        panY: false,
        startAngle: 180,
        endAngle: 360,
      })
    );
    const color = this.getIndicatorColor();
    let axisRenderer = am5radar.AxisRendererCircular.new(root, {
      innerRadius: -10,
      strokeOpacity: 1,
      strokeWidth: 5,
      strokeGradient: am5.LinearGradient.new(root, {
        rotation: 0,
        stops: [
          { color: am5.color(color) },
          { color: am5.color(color) },
          { color: am5.color(color) },
          { color: am5.color(color) },
          { color: am5.color(color) },
        ],
      }),
    });

    let xAxis = chart.xAxes.push(
      am5xy.ValueAxis.new(root, {
        maxDeviation: 0,
        min: this.validateMin(),
        max: this.validateMax(),
        strictMinMax: true,
        renderer: axisRenderer,
      })
    );
    let axisDataItem = xAxis.makeDataItem({});
    axisDataItem.set('value', 0);

    let bullet = axisDataItem.set(
      'bullet',
      am5xy.AxisBullet.new(root, {
        sprite: am5radar.ClockHand.new(root, {
          radius: am5.percent(99),
        }),
      })
    );

    xAxis.createAxisRange(axisDataItem);

    setTimeout(() => {
      axisDataItem.animate({
        key: 'value',
        to: this.sowingStat.value,
        duration: 800,
        easing: am5.ease.out(am5.ease.cubic),
      });
    }, 2000);
  }
  public getIndicatorColor(): number {
    const min = this.sowingStat.fish_step_stat_value_minimum;
    const max = this.sowingStat.fish_step_stat_value_maximum;
    const value = this.sowingStat.value;

    if (
      this.sowingStat.triggered_alarm ||
      (value < min && min) ||
      (value > max && max)
    )
      return 0xff4d4f;

    if ((value == min && min) || (value == max && max)) return 0xffe58f;

    if (value && min && max) {
      var rangoVerde = (max - min) * 0.4; // 40% del rango total
      var rangoAmarillo = (max - min) * 0.2; // 20% del rango total
      if (value >= min && value < min + rangoAmarillo) {
        return 0xfaad14; // Valor cerca del mínimo, color naranja
      } else if (value <= max && value > max - rangoAmarillo) {
        return 0xfaad14; // Valor cerca del máximo, color naranja
      } else if (value >= min + rangoAmarillo && value < min + rangoVerde) {
        return 0xffe58f; // Valor en rango amarillo, color amarillo
      } else if (value <= max - rangoAmarillo && value > max - rangoVerde) {
        return 0xffe58f; // Valor en rango amarillo, color amarillo
      } else {
        return 0xb7eb8f; // Valor en rango verde, color verde
      }
    }

    if (this.sowingStat.value) return 0xb7eb8f;

    return 0xb7eb8f;
  }
  public validateMin(): number {
    if (this.sowingStat.value <= this.sowingStat.fish_step_stat_value_minimum)
      return this.sowingStat.fish_step_stat_value_minimum - 5;
    if (this.sowingStat.fish_step_stat_value_minimum)
      return this.sowingStat.fish_step_stat_value_minimum;
    if (this.sowingStat.value > 0) return 0;
    return this.sowingStat.value;
  }
  public validateMax() {
    if (this.sowingStat.value >= this.sowingStat.fish_step_stat_value_maximum)
      return this.sowingStat.value + 5;
    if (this.sowingStat.fish_step_stat_value_maximum)
      return this.sowingStat.fish_step_stat_value_maximum;
    if (this.sowingStat.value > 0) return this.sowingStat.value + 5;
    return this.sowingStat.value;
  }

  public getMinimun() {
    if (this.sowingStat.fish_step_stat_value_minimum) {
      return this.sowingStat.fish_step_stat_value_minimum
    }else {
      return '-'
    }
  }
  public getMaximun() {
    if (this.sowingStat.fish_step_stat_value_maximum) {
      return this.sowingStat.fish_step_stat_value_maximum
    }else {
      return '-'
    }
  }
  ngAfterViewInit(): void {
    this.generateChart('chartdiv' + this.sowingStat.id);
  }
}
