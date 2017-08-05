<template>
<div class="calendar">
  <div class="header z-depth-2">
    <a @click="lastMonth" class="waves-effect waves-light btn"><i class="material-icons left">chevron_left</i>Last Month</a>
    <p>{{month}} {{year}}</p>
      <a @click="nextMonth" class="waves-effect waves-light btn"><i class="material-icons right">chevron_right</i>Next Month</a>
  </div>
  <ul class="dates month">
    <li class="dow" v-for="dow in days">{{dow}}</li>
    <li v-for="blank in firstDayOfMonth" class="day"></li>
    <li v-for="date in daysInMonth" @click="openday(date)" class="day" :class="{'today': date == initialDate && month == initialMonth && year == initialYear}">
      <span>{{date}}</span>
    </li>
  </ul>
</div>
</template>

<script>
// FIXME doesn't work, needs debugging
import moment from 'moment'

export default {
  name: 'calendar',
  data: {
    today: moment(),
    dateContext: moment(),
    days: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
  },
  methods: {
    nextMonth () {
      this.dateContext = moment(this.dateContext).add(1, 'month')
    },
    lastMonth () {
      this.dateContext = moment(this.dateContext).subtract(1, 'month')
    },
    openDay (date) {}
  },
  computed: {
    year: function () {
      return this.dateContext.format('YYYY')
    },
    month: function () {
      return this.dateContext.format('MMMM')
    },
    daysInMonth: function () {
      return this.dateContext.daysInMonth()
    },
    currentDate: function () {
      return this.dateContext.get('date')
    },
    firstDayOfMonth: function () {
      var firstDay = moment(this.dateContext).subtract((this.currentDate - 1), 'days')
      return firstDay.weekday()
    },
    // Previous Code Above
    initialDate: function () {
      return this.today.get('date')
    },
    initialMonth: function () {
      return this.today.format('MMMM')
    },
    initialYear: function () {
      return this.today.format('YYYY')
    }
  }
}
</script>

<style>
*, *:before, *:after {
-moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box;
}

body {
	font-size: 1.5em;
 font-weight: 100;
 color: rgba(255, 255, 255, 1);
 background: #222222;
}

.calendar {
  transform: translate3d(0, 0, 0);
  width: 100vw;
}

.header {
	display: flex;
	padding: 0 1em;
	justify-content: space-between;
	align-items: center;
  width: 100%;
	background-color: #333;
}

.fade-enter {
  /*overflow: hidden;*/
  opacity: 0;
}

.fade-enter-active {
  animation: fadeIn 1s ease-out;
  opacity: 1;
}

.month.in.next {
  animation: moveFromTopFadeMonth .4s ease-out;
  opacity: 1;
}

.month.out.next {
  animation: moveToTopFadeMonth .4s ease-in;
  opacity: 1;
}

.month.in.prev {
  animation: moveFromBottomFadeMonth .4s ease-out;
  opacity: 1;
}

.month.out.prev {
  animation: moveToBottomFadeMonth .4s ease-in;
  opacity: 1;
}

.dates{
	display: flex;
	flex-wrap: wrap;
}

.day {
  width: 14.286%;
  padding: 1em;
  text-align: center;
  cursor: pointer;
}

.dow{
	width: 14.286%;
	text-align: center;
	padding: 1em;
	color: teal;
	font-weight: bold;
}

.today {
  color: teal;
	font-weight: bold;
}

.day-name {
  font-size: 1em;
  text-transform: uppercase;
  margin-bottom: 5px;
  color: rgba(255, 255, 255, .5);
  letter-spacing: .7px;
}

.day-number {
  font-size: 24px;
  letter-spacing: 1.5px;
}

@keyframes moveFromTopFade {
  from { height:0px; margin-top:0px; transform: translateY(-100%); }
}


@keyframes moveToTopFade {
  to { height:0px; transform: translateY(-100%); }
}

@keyframes moveToTopFadeMonth {
  to { opacity: 0; -moz-transform: translateY(-30%); }
}

@keyframes moveFromTopFadeMonth {
  from { opacity: 0; -moz-transform: translateY(30%); }
}

@keyframes moveToBottomFadeMonth {
  to { opacity: 0; -webkit-transform: translateY(30%); }
}

@keyframes moveFromBottomFadeMonth {
  from { opacity: 0; -webkit-transform: translateY(-30%); }
}

@keyframes fadeIn  {
  from { opacity: 0; }
}

@keyframes fadeOut  {
  to { opacity: 0; }
}

@keyframes fadeOutShink  {
  to { opacity: 0; padding: 0px; height: 0px; }
}

</style>