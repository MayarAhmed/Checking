import { Component, OnInit, ElementRef, ChangeDetectionStrategy  } from '@angular/core';
import { Chart } from 'chart.js';
import * as $ from 'jquery';
// import {
//   getMonth,
//   startOfMonth,
//   startOfWeek,
//   startOfDay,
//   endOfMonth,
//   endOfWeek,
//   endOfDay
// } from 'date-fns';
// import RRule from 'rrule';
// import { CalendarEvent } from 'angular-calendar';
// import { colors } from '../demo-utils/colors';

interface RecurringEvent {
  title: string;
  color: any;
  rrule?: {
    // freq: RRule.Frequency;
    bymonth?: number;
    bymonthday?: number;
    // byweekday?: RRule.Weekday[];
  };
}
// import RRule from 'rrule';
// import { CalendarEvent } from 'angular-calendar';
// import { colors } from '../demo-utils/colors';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
public chart = [];
  constructor() {

    // this.chart = new Chart('canvas',  {
    //   type: 'line',
    //   data: {
    //     labels: ['Nada', 'Ibarahim', 'Yehia', 'Mahmoud', 'Mai', 'Ahmed'],
    //     type: 'line',
    //     datasets: [{
    //       data: [65, 59, 84, 84, 51, 55],
    //       label: 'Scores',
    //       backgroundColor: 'transparent',
    //       borderColor: 'rgba(255,255,255,.55)',
    //     },]
    //   },
    //   options: {

    //     maintainAspectRatio: false,
    //     legend: {
    //       display: false
    //     },
    //     responsive: true,
    //     tooltips: {
    //       mode: 'index',
    //       titleFontSize: 12,
    //       titleFontColor: '#000',
    //       bodyFontColor: '#000',
    //       backgroundColor: '#fff',
    //       titleFontFamily: 'Montserrat',
    //       bodyFontFamily: 'Montserrat',
    //       cornerRadius: 3,
    //       intersect: false,
    //     },
    //     scales: {
    //       xAxes: [{
    //         gridLines: {
    //           color: 'transparent',
    //           zeroLineColor: 'transparent'
    //         },
    //         ticks: {
    //           fontSize: 2,
    //           fontColor: 'transparent'
    //         }
    //       }],
    //       yAxes: [{
    //         display: false,
    //         ticks: {
    //           display: false,
    //         }
    //       }]
    //     },
    //     title: {
    //       display: false,
    //     },
    //     elements: {
    //       line: {
    //         borderWidth: 1
    //       },
    //       point: {
    //         radius: 4,
    //         hitRadius: 10,
    //         hoverRadius: 4
    //       }
    //     }
    //   }
    // });

   }//end of constructor

  ngOnInit() {
    $(document).ready(function(){ const ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
     type: 'line',
     data: {
       labels: ['Nada', 'Ibarahim', 'Yehia', 'Mahmoud', 'Mai', 'Ahmed'],
       type: 'line',
       datasets: [{
         data: [65, 59, 84, 84, 51, 55],
         label: 'Scores',
         backgroundColor: 'transparent',
         borderColor: 'rgba(255,255,255,.55)',
       },]
     },
     options: {

       maintainAspectRatio: false,
       legend: {
         display: false
       },
       responsive: true,
       tooltips: {
         mode: 'index',
         titleFontSize: 12,
         titleFontColor: '#000',
         bodyFontColor: '#000',
         backgroundColor: '#fff',
         titleFontFamily: 'Montserrat',
         bodyFontFamily: 'Montserrat',
         cornerRadius: 3,
         intersect: false,
       },
       scales: {
         xAxes: [{
           gridLines: {
             color: 'transparent',
             zeroLineColor: 'transparent'
           },
           ticks: {
             fontSize: 2,
             fontColor: 'transparent'
           }
         }],
         yAxes: [{
           display: false,
           ticks: {
             display: false,
           }
         }]
       },
       title: {
         display: false,
       },
       elements: {
         line: {
           borderWidth: 1
         },
         point: {
           radius: 4,
           hitRadius: 10,
           hoverRadius: 4
         }
       }
     }
   });




 var chartFour = document.getElementById("percent-chart");
 var myChartFour = new Chart(chartFour, 
   {
     type: 'bar',
       data: {
         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', ''],
         datasets: [
           {
             label: 'First project',
             data: [10, 20, 35, 50, 60, 40, 55, 90, 100],
             backgroundColor: "rgba(75,192,192,.5)",
             borderColor: "rgba(75,192,192,.5)" ,
             pointHoverBackgroundColor: '#fff',
             borderWidth: 1,
             
           },
           {
             label: 'Second project',
             backgroundColor: "rgba(255,99,132,.5)",
             borderColor: "rgba(255,99,132,.5)",
             pointHoverBackgroundColor: '#fff',
             borderWidth: 0,
             data: [30, 50, 95, 10, 70, 40, 25, 40, 110]

           },
           {
             label: 'Third project',
             backgroundColor: "rgba(54,162,235,0.5)",
             borderColor: "rgba(54,162,235,0.5)",
             pointHoverBackgroundColor: '#fff',
             borderWidth: 1,
             data:[70, 90, 55, 10, 40, 60, 24, 35, 70]

           },
           {
             label: 'Fourth project',
             backgroundColor: "rgba(255,205,86,0.5)",
             borderColor: "rgba(255,205,86,0.5)",
             pointHoverBackgroundColor: '#fff',
             borderWidth: 1,
             data: [90, 40, 25, 14, 10, 88, 66, 90, 40]

           }


         ]
       },
       options: {
         title: {
           display: true,
           text: 'Challange bar'
         },
         tooltips: {
           mode: 'index',
           intersect: false
         },
         responsive: true,
         scales: {
           xAxes: [{
             stacked: true,
           }],
           yAxes: [{
             stacked: true
           }]
         }
       }
     });
    


     $(".my-progress-bar").circularProgress({
      line_width: 6,
      color: "#68C7B3",
      starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
      percent: 80, // percent starts from
      percentage: true,
      text: "Leave Balance"
    }).circularProgress('animate', 95, 500);
    
    // Panel
    
    $('.collapse.in').prev('.panel-heading').addClass('active');
    $('#accordion').on('show.bs.collapse', function(a) {
        $(a.target).prev('.panel-heading').addClass('active');
      })
      .on('hide.bs.collapse', function(a) {
        $(a.target).prev('.panel-heading').removeClass('active');
    
      });
    
      //menu cordio
    $('.chev').on('click',function(){
      
     $('.choice').toggle()
    })
    
    });
    
  }

}
