import React from "react";
import PropTypes from 'prop-types';
import moment from "moment";
moment.locale('ru', {
    months : {
        format: 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_'),
        standalone: 'Январь_Февраль_Март_Апрель_Май_Июнь_Июль_Август_Сентябрь_Октябрь_Ноябрь_Декабрь'.split('_')
    },
    weekdays : {
        standalone: 'Воскресенье_Понедельник_Вторник_Среда_Четверг_Пятница_Суббота'.split('_'),
        format: 'Воскресенье_Понедельник_Вторник_Среду_Четверг_Пятницу_Субботу'.split('_'),
        isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
    }
});

function Calendar() {

    return (
        <div className={"ui-datepicker"}>
            <div className={"ui-datepicker-material-header"}>
                <div className={"ui-datepicker-material-day"}>{moment().format('dddd')}</div>
                <div className={"ui-datepicker-material-date"}>
                    <div className={"ui-datepicker-material-day-num"}>{moment().format('DD')}</div>
                    <div className="ui-datepicker-material-month">{moment().format('MMMM')}</div>
                    <div className="ui-datepicker-material-year">{moment().format('YYYY')}</div>
                </div>
            </div>
            <div className="ui-datepicker-header">
                <div className="ui-datepicker-title">
                    <span className="ui-datepicker-month">{moment().format('MMMM')}</span>&nbsp;<span
                    className="ui-datepicker-year">{moment().format('YYYY')}</span>
                </div>
            </div>
            <table className="ui-datepicker-calendar">
                <colgroup>
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col className="ui-datepicker-week-end" />
                    <col className="ui-datepicker-week-end" />
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

                </tbody>
            </table>
        </div>
    );
}


export default Calendar;