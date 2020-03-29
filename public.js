$(document).ready(function(){
    let holidays = {
        "meta": {
            "code": 200
        },
        "response": {
            "holidays": [
                {
                    "name": "New Year's Day",
                    "description": "New Year’s Day is the first day of the year, or January 1, in the Gregorian calendar.",
                    "country": {
                        "id": "br",
                        "name": "Brazil"
                    },
                    "date": {
                        "iso": "2020-01-01",
                        "datetime": {
                            "year": 2020,
                            "month": 1,
                            "day": 1
                        }
                    },
                    "type": [
                        "National holiday"
                    ],
                    "locations": "All",
                    "states": "All"
                },
                {
                    "name": "Carnival Friday",
                    "description": "Carnival Friday is a observance in Brazil",
                    "country": {
                        "id": "br",
                        "name": "Brazil"
                    },
                    "date": {
                        "iso": "2020-02-21",
                        "datetime": {
                            "year": 2020,
                            "month": 2,
                            "day": 21
                        }
                    },
                    "type": [
                        "Observance"
                    ],
                    "locations": "All",
                    "states": "All"
                },
                {
                    "name": "Carnival Saturday",
                    "description": "Carnival Saturday is a observance in Brazil",
                    "country": {
                        "id": "br",
                        "name": "Brazil"
                    },
                    "date": {
                        "iso": "2020-02-22",
                        "datetime": {
                            "year": 2020,
                            "month": 2,
                            "day": 22
                        }
                    },
                    "type": [
                        "Observance"
                    ],
                    "locations": "All",
                    "states": "All"
                },
                {
                    "name": "Carnival Sunday",
                    "description": "Carnival Sunday is a observance in Brazil",
                    "country": {
                        "id": "br",
                        "name": "Brazil"
                    },
                    "date": {
                        "iso": "2020-02-23",
                        "datetime": {
                            "year": 2020,
                            "month": 2,
                            "day": 23
                        }
                    },
                    "type": [
                        "Observance"
                    ],
                    "locations": "All",
                    "states": "All"
                },
                {
                    "name": "Carnival Monday",
                    "description": "Carnival Monday is a optional holiday in Brazil",
                    "country": {
                        "id": "br",
                        "name": "Brazil"
                    },
                    "date": {
                        "iso": "2020-02-24",
                        "datetime": {
                            "year": 2020,
                            "month": 2,
                            "day": 24
                        }
                    },
                    "type": [
                        "Common local holiday"
                    ],
                    "locations": "All",
                    "states": "All"
                },
                {
                    "name": "Carnival Tuesday",
                    "description": "Shrove Tuesday is a religious holiday that is on the day before Ash Wednesday. It is also known as the Tuesday of Carnival, which is a festive occasion among many cultures.",
                    "country": {
                        "id": "br",
                        "name": "Brazil"
                    },
                    "date": {
                        "iso": "2020-02-25",
                        "datetime": {
                            "year": 2020,
                            "month": 2,
                            "day": 25
                        }
                    },
                    "type": [
                        "Common local holiday"
                    ],
                    "locations": "All",
                    "states": "All"
                },
                {
                    "name": "Carnival end (until 2pm)",
                    "description": "Ash Wednesday marks the first day of Lent in western Christian churches.",
                    "country": {
                        "id": "br",
                        "name": "Brazil"
                    },
                    "date": {
                        "iso": "2020-02-26",
                        "datetime": {
                            "year": 2020,
                            "month": 2,
                            "day": 26
                        }
                    },
                    "type": [
                        "Common local holiday"
                    ],
                    "locations": "All",
                    "states": "All"
                },
                {
                    "name": "March Equinox",
                    "description": "March Equinox in Brazil (Brasilia)",
                    "country": {
                        "id": "br",
                        "name": "Brazil"
                    },
                    "date": {
                        "iso": "2020-03-20T00:49:36-03:00",
                        "datetime": {
                            "year": 2020,
                            "month": 3,
                            "day": 20,
                            "hour": 0,
                            "minute": 49,
                            "second": 36
                        },
                        "timezone": {
                            "offset": "-03:00",
                            "zoneabb": "BRT",
                            "zoneoffset": -10800,
                            "zonedst": 0,
                            "zonetotaloffset": -10800
                        }
                    },
                    "type": [
                        "Season"
                    ],
                    "locations": "All",
                    "states": "All"
                },
                {
                    "name": "Good Friday",
                    "description": "Good Friday is a global Christian observance two days before Easter Sunday.",
                    "country": {
                        "id": "br",
                        "name": "Brazil"
                    },
                    "date": {
                        "iso": "2020-04-10",
                        "datetime": {
                            "year": 2020,
                            "month": 4,
                            "day": 10
                        }
                    },
                    "type": [
                        "National holiday"
                    ],
                    "locations": "All",
                    "states": "All"
                },
                {
                    "name": "Easter Sunday",
                    "description": "Easter Sunday commemorates Jesus Christ’s resurrection, according to Christian belief.",
                    "country": {
                        "id": "br",
                        "name": "Brazil"
                    },
                    "date": {
                        "iso": "2020-04-12",
                        "datetime": {
                            "year": 2020,
                            "month": 4,
                            "day": 12
                        }
                    },
                    "type": [
                        "Observance"
                    ],
                    "locations": "All",
                    "states": "All"
                },
                {
                    "name": "Tiradentes Day",
                    "description": "Tiradentes Day is a national holiday in Brazil",
                    "country": {
                        "id": "br",
                        "name": "Brazil"
                    },
                    "date": {
                        "iso": "2020-04-21",
                        "datetime": {
                            "year": 2020,
                            "month": 4,
                            "day": 21
                        }
                    },
                    "type": [
                        "National holiday"
                    ],
                    "locations": "All",
                    "states": "All"
                },
                {
                    "name": "Labor Day / May Day",
                    "description": "May Day, or Labor Day, is a day off for workers in many countries around the world.",
                    "country": {
                        "id": "br",
                        "name": "Brazil"
                    },
                    "date": {
                        "iso": "2020-05-01",
                        "datetime": {
                            "year": 2020,
                            "month": 5,
                            "day": 1
                        }
                    },
                    "type": [
                        "National holiday"
                    ],
                    "locations": "All",
                    "states": "All"
                },
                {
                    "name": "Mother's Day",
                    "description": "Mother’s Day celebrates the achievements and efforts of mothers and mother figures.",
                    "country": {
                        "id": "br",
                        "name": "Brazil"
                    },
                    "date": {
                        "iso": "2020-05-10",
                        "datetime": {
                            "year": 2020,
                            "month": 5,
                            "day": 10
                        }
                    },
                    "type": [
                        "Observance"
                    ],
                    "locations": "All",
                    "states": "All"
                },
                {
                    "name": "Corpus Christi",
                    "description": "Corpus Christi is a Christian feast in honor of the Holy Eucharist.",
                    "country": {
                        "id": "br",
                        "name": "Brazil"
                    },
                    "date": {
                        "iso": "2020-06-11",
                        "datetime": {
                            "year": 2020,
                            "month": 6,
                            "day": 11
                        }
                    },
                    "type": [
                        "Common local holiday"
                    ],
                    "locations": "All",
                    "states": "All"
                },
                {
                    "name": "Brazilian Valentine's Day",
                    "description": "Brazilian Valentine's Day is a observance in Brazil",
                    "country": {
                        "id": "br",
                        "name": "Brazil"
                    },
                    "date": {
                        "iso": "2020-06-12",
                        "datetime": {
                            "year": 2020,
                            "month": 6,
                            "day": 12
                        }
                    },
                    "type": [
                        "Observance"
                    ],
                    "locations": "All",
                    "states": "All"
                },
                {
                    "name": "June Solstice",
                    "description": "June Solstice in Brazil (Brasilia)",
                    "country": {
                        "id": "br",
                        "name": "Brazil"
                    },
                    "date": {
                        "iso": "2020-06-20T18:43:40-03:00",
                        "datetime": {
                            "year": 2020,
                            "month": 6,
                            "day": 20,
                            "hour": 18,
                            "minute": 43,
                            "second": 40
                        },
                        "timezone": {
                            "offset": "-03:00",
                            "zoneabb": "BRT",
                            "zoneoffset": -10800,
                            "zonedst": 0,
                            "zonetotaloffset": -10800
                        }
                    },
                    "type": [
                        "Season"
                    ],
                    "locations": "All",
                    "states": "All"
                },
                {
                    "name": "Father's Day",
                    "description": "Father's Day is a observance in Brazil",
                    "country": {
                        "id": "br",
                        "name": "Brazil"
                    },
                    "date": {
                        "iso": "2020-08-09",
                        "datetime": {
                            "year": 2020,
                            "month": 8,
                            "day": 9
                        }
                    },
                    "type": [
                        "Observance"
                    ],
                    "locations": "All",
                    "states": "All"
                },
                {
                    "name": "Independence Day",
                    "description": "Independence Day is a national holiday in Brazil",
                    "country": {
                        "id": "br",
                        "name": "Brazil"
                    },
                    "date": {
                        "iso": "2020-09-07",
                        "datetime": {
                            "year": 2020,
                            "month": 9,
                            "day": 7
                        }
                    },
                    "type": [
                        "National holiday"
                    ],
                    "locations": "All",
                    "states": "All"
                },
                {
                    "name": "September Equinox",
                    "description": "September Equinox in Brazil (Brasilia)",
                    "country": {
                        "id": "br",
                        "name": "Brazil"
                    },
                    "date": {
                        "iso": "2020-09-22T10:30:39-03:00",
                        "datetime": {
                            "year": 2020,
                            "month": 9,
                            "day": 22,
                            "hour": 10,
                            "minute": 30,
                            "second": 39
                        },
                        "timezone": {
                            "offset": "-03:00",
                            "zoneabb": "BRT",
                            "zoneoffset": -10800,
                            "zonedst": 0,
                            "zonetotaloffset": -10800
                        }
                    },
                    "type": [
                        "Season"
                    ],
                    "locations": "All",
                    "states": "All"
                },
                {
                    "name": "Our Lady of Aparecida / Children's Day",
                    "description": "Our Lady of Aparecida / Children's Day is a national holiday in Brazil",
                    "country": {
                        "id": "br",
                        "name": "Brazil"
                    },
                    "date": {
                        "iso": "2020-10-12",
                        "datetime": {
                            "year": 2020,
                            "month": 10,
                            "day": 12
                        }
                    },
                    "type": [
                        "National holiday"
                    ],
                    "locations": "All",
                    "states": "All"
                },
                {
                    "name": "Teacher's Day",
                    "description": "Teacher's Day is a observance in Brazil",
                    "country": {
                        "id": "br",
                        "name": "Brazil"
                    },
                    "date": {
                        "iso": "2020-10-15",
                        "datetime": {
                            "year": 2020,
                            "month": 10,
                            "day": 15
                        }
                    },
                    "type": [
                        "Observance"
                    ],
                    "locations": "All",
                    "states": "All"
                },
                {
                    "name": "Public Service Holiday",
                    "description": "Public Service Holiday is a optional holiday in Brazil",
                    "country": {
                        "id": "br",
                        "name": "Brazil"
                    },
                    "date": {
                        "iso": "2020-10-28",
                        "datetime": {
                            "year": 2020,
                            "month": 10,
                            "day": 28
                        }
                    },
                    "type": [
                        "Common local holiday"
                    ],
                    "locations": "All",
                    "states": "All"
                },
                {
                    "name": "All Souls' Day",
                    "description": "All Souls’ Day falls on November 2 each year. It is a day of alms giving and prayers for the dead.",
                    "country": {
                        "id": "br",
                        "name": "Brazil"
                    },
                    "date": {
                        "iso": "2020-11-02",
                        "datetime": {
                            "year": 2020,
                            "month": 11,
                            "day": 2
                        }
                    },
                    "type": [
                        "National holiday"
                    ],
                    "locations": "All",
                    "states": "All"
                },
                {
                    "name": "Republic Proclamation Day",
                    "description": "Republic Proclamation Day is a national holiday in Brazil",
                    "country": {
                        "id": "br",
                        "name": "Brazil"
                    },
                    "date": {
                        "iso": "2020-11-15",
                        "datetime": {
                            "year": 2020,
                            "month": 11,
                            "day": 15
                        }
                    },
                    "type": [
                        "National holiday"
                    ],
                    "locations": "All",
                    "states": "All"
                },
                {
                    "name": "Black Consciousness Day",
                    "description": "Black Consciousness Day is a observance in Brazil",
                    "country": {
                        "id": "br",
                        "name": "Brazil"
                    },
                    "date": {
                        "iso": "2020-11-20",
                        "datetime": {
                            "year": 2020,
                            "month": 11,
                            "day": 20
                        }
                    },
                    "type": [
                        "Observance"
                    ],
                    "locations": "All",
                    "states": "All"
                },
                {
                    "name": "December Solstice",
                    "description": "December Solstice in Brazil (Brasilia)",
                    "country": {
                        "id": "br",
                        "name": "Brazil"
                    },
                    "date": {
                        "iso": "2020-12-21T07:02:19-03:00",
                        "datetime": {
                            "year": 2020,
                            "month": 12,
                            "day": 21,
                            "hour": 7,
                            "minute": 2,
                            "second": 19
                        },
                        "timezone": {
                            "offset": "-03:00",
                            "zoneabb": "BRT",
                            "zoneoffset": -10800,
                            "zonedst": 0,
                            "zonetotaloffset": -10800
                        }
                    },
                    "type": [
                        "Season"
                    ],
                    "locations": "All",
                    "states": "All"
                },
                {
                    "name": "Christmas Eve (from 2pm)",
                    "description": "Christmas Eve is the day before Christmas Day and falls on December 24 in the Gregorian calendar.",
                    "country": {
                        "id": "br",
                        "name": "Brazil"
                    },
                    "date": {
                        "iso": "2020-12-24",
                        "datetime": {
                            "year": 2020,
                            "month": 12,
                            "day": 24
                        }
                    },
                    "type": [
                        "Common local holiday"
                    ],
                    "locations": "All",
                    "states": "All"
                },
                {
                    "name": "Christmas Day",
                    "description": "Christmas Day is one of the biggest Christian celebrations and falls on December 25 in the Gregorian calendar.",
                    "country": {
                        "id": "br",
                        "name": "Brazil"
                    },
                    "date": {
                        "iso": "2020-12-25",
                        "datetime": {
                            "year": 2020,
                            "month": 12,
                            "day": 25
                        }
                    },
                    "type": [
                        "National holiday"
                    ],
                    "locations": "All",
                    "states": "All"
                },
                {
                    "name": "New Year's Eve (from 2pm)",
                    "description": "New Year’s Eve is the last day of the year, December 31, in the Gregorian calendar.",
                    "country": {
                        "id": "br",
                        "name": "Brazil"
                    },
                    "date": {
                        "iso": "2020-12-31",
                        "datetime": {
                            "year": 2020,
                            "month": 12,
                            "day": 31
                        }
                    },
                    "type": [
                        "Common local holiday"
                    ],
                    "locations": "All",
                    "states": "All"
                }
            ]
        }
    }
    //https://stackoverflow.com/questions/2627473/how-to-calculate-the-number-of-days-between-two-dates
    holidays = holidays.response.holidays;
    

    $('body').on('change input blur keydown',function(){
        /*Meta diária*/ 
        let work_scale = $('#work_scale').val();
        let result1 = 0;
        if(work_scale == 2){
            result1 = Math.ceil(10.45*400/60);
            $('#daily_goal').val(result1);
        } else{
            if(work_scale == 1){
                result1 = Math.ceil(10.45*480/60);
                $('#daily_goal').val(result1);
            } else{
                $('#daily_goal').val(result1);   
            }   
        }

        /* Meta total*/
        let worked_days = $('#worked_days').val();
        if(worked_days != ''){
            let dairy = $('#daily_goal').val();
            let result2 = worked_days*dairy;
            $('#total_goal').val(result2);
        }

        /* Análises extras */ 
        let total_analyses = $('#total_analyses').val();

        if(total_analyses != ''){
            let total_goal = $('#total_goal').val();
            let worked_days = $('#worked_days').val();
            let result3 = total_analyses-total_goal;
            /* Meta diária realizada*/
            let result4 = total_analyses-worked_days;
            $('#extra_analyses').val(result3);
            $('#daily_goal_achieved').val(result4);
        }
        /* % Saldo */
        let percent_card = $('#percent_card').val();
        let percent_balance = 100-percent_card;
        $('#percent_balance').val(percent_balance);
        

    })    

    $('#calculate').click(function(){

        let work_days = $('#work_days').val();
        let worked_days = $('#worked_days').val();
        let work_scale = $('#work_scale').val();
        let daily_goal = $('#daily_goal').val();
        let total_analyses = $('#total_analyses').val();
        let total_goal = $('#total_goal').val();
        let extra_analyses = $('#extra_analyses').val();
        let daily_goal_achieved = $('#daily_goal_achieved').val();
        let percent_card = $('#percent_card').val();
        let percent_balance = $('#percent_balance').val();
        let percent_quality = $('#percent_quality').val();
        let percent_approval = $('#percent_approval').val();



    })

   
    



});


