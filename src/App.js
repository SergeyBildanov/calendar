import React from 'react';
import './App.css';
import './css/main.css';

function Calendar({ date }) {
  let now = date;
  let firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
  let lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  let days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
  let months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
  let months1 = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  firstDay = new Date(firstDay.getFullYear(), firstDay.getMonth(), firstDay.getDate() - firstDay.getDay() + 1)
  lastDay = new Date(lastDay.getFullYear(), lastDay.getMonth(), lastDay.getDate() - lastDay.getDay() + 7)
  let daydiff = (Date.parse(lastDay) - Date.parse(firstDay)) / 86400000;
  console.log(firstDay, lastDay, daydiff);
  console.log(now)
  console.log(days[(now.getDay() + 6) % 7])
  let i = 0;
  let array = Array(daydiff + 1).fill(firstDay).map(() => {
    return new Date(firstDay.getFullYear(), firstDay.getMonth(), firstDay.getDate() + i++)
  })
  let newArray = array.reduce((acc, item, index) => {
    acc[Math.floor(index / 7)].push(item);
    return acc
  }, [[], [], [], [], []])
  return (
    <div class="ui-datepicker">
      <div class="ui-datepicker-material-header">
        <div class="ui-datepicker-material-day">{days[(now.getDay()+6)%7]}</div>
        <div class="ui-datepicker-material-date">
          <div class="ui-datepicker-material-day-num">{now.getDate()}</div>
          <div class="ui-datepicker-material-month">{months[now.getMonth()]}</div>
          <div class="ui-datepicker-material-year">{now.getFullYear()}</div>
        </div>
      </div>
      <div class="ui-datepicker-header">
        <div class="ui-datepicker-title">
          <span class="ui-datepicker-month">{months1[now.getMonth()]}</span>&nbsp;<span class="ui-datepicker-year">{now.getFullYear()}</span>
        </div>
      </div>
      <table class="ui-datepicker-calendar">
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
          <col class="ui-datepicker-week-end" />
          <col class="ui-datepicker-week-end" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" title="Понедельник">Пн</th>
            <th scope="col" title="Вторник">Вт</th>
            <th scope="col" title="Среда">Ср</th>
            <th scope="col" title="Четверг">Чт</th>
            <th scope="col" title="Пятница">Пт</th>
            <th scope="col" title="Суббота">Сб</th>
            <th scope="col" title="Воскресенье">Вс</th>
          </tr>
        </thead>
        <tbody>
          {newArray.map((x)=>{
            return(
              <tr>
                {x.map((item)=>{
                  return item.getMonth()!==now.getMonth()?<td class="ui-datepicker-other-month">{item.getDate()}</td>:(item.getDate()===now.getDate()?<td class="ui-datepicker-today">{item.getDate()}</td>:<td>{item.getDate()}</td>);
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
function App() {
  return (
    <Calendar date={new Date()} />
  );
}

export default App;
