
$.fn.digits = function () {
    return this.each(function () {
        //$(this).val($(this).val().toLocalString());
        //number.toLocaleString()
        //$(this).text($(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        $(this).val($(this).val().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
}

Date.prototype.addHours = function (h) {
    this.setHours(this.getHours() + h);
    return this;
}
Date.prototype.addDays = function (days) {
    this.setDate(this.getDate() + parseInt(days));
    return this;
};
var tempgld = [];

var today = new Date().addHours(2);
var _year = localStorage.getItem('app_year');
var beginning = new Date(_year, 0, 1).addHours(2);
var endyear = new Date(_year, 11, 31).addHours(2);
var sdate = beginning;
var ydate = endyear;
var _sdate = sdate.toISOString().split('T')[0];
var edate = today;
var lastweek = new Date(edate.setDate(edate.getDate() - 7));
var _edate = edate.toISOString().split('T')[0];
var _lastweek = lastweek.toISOString().split('T')[0]; 

var sqtr = new Date(_year, 2, 31).addHours(2);
var tqtr = new Date(_year, 5, 30).addHours(2);
var fqtr = new Date(_year, 8, 30).addHours(2);

function addElement(parentId, elementTag, elementId, html) {
    // Adds an element to the document
    var p = document.getElementById(parentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.innerHTML = html;
    p.appendChild(newElement);
}
function removeElement(elementId) {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}

function addWaterMark(doc) {
    var totalPages = doc.internal.getNumberOfPages();

    for (i = 1; i <= totalPages; i++) {
        doc.setPage(i);
        //doc.addImage(imgData, 'PNG', 40, 40, 75, 75);
        doc.setTextColor(150);
        doc.text(50, doc.internal.pageSize.height - 30, 'Watermark');
    }

    return doc;
}

function formatNull(value) {
    if (value === 'undefined' || value === null || isNaN(value)) {
        var val = 0;
        //console.log(val)
        return val;
    } else {
        return value;
    }
}

function moneyFormatter(value, row, index) {
    if (value === 'undefined' || value === null || isNaN(value)){
        var val = '-';
        //console.log(val)
        return val;
    } else {
        val = moneyFormat(parseFloat(value).toFixed(2));
        //console.log(val)
        return val;
    }
   
};

function thousandmoneyFormatter(value, row, index) {
    var val = moneyFormat((value).toFixed(2));
    //console.log(val)
    return val;
};

function localDateFormatter(value, row, index) {
    var val = moment(new Date(value)).format('DD-MMM-YYYY');
    //var val = new Date(value).toISOString().split('T')[0];
    return val;
};

function sumFormatters(data) {
    var field = this.field;
    var total_sum = data.reduce(function (sum, row) {
        //console.log(row[field]);
        return (sum) + (row[field] || 0)
    }, 0);
    var value = total_sum;

    var text = (value).toFixed(0);
    var retval = ''; var __text = '';
    if (text < 0) {
        __text = (parseFloat(text).toFixed(0)).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
        var _text = __text.replace('-', '');
        retval = '(' + _text + ')';
        return '<span class="formatCurr"><b>' + retval + '</b></span>';
    } else if (text === 0) {
        retval = '-';
        return '<span class="formatCurr"><b>' + retval + '</b></span>';
    } else {
        __text = (parseFloat(text).toFixed(0)).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
        retval = __text;
        return '<span class="formatCurr"><b>' + retval + '</b></span>';
    }
}

function sumFormatter(data) {
    var field = this.field;
    var total_sum = data.reduce(function (sum, row) {
        //console.log(row[field]);
        return (sum) + (row[field] || 0);
    }, 0);
    var value = total_sum;

    var text = (value).toFixed(0);
    var retval = ''; var __text = '';
    if (text < 0) {
        __text = parseFloat(text).toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
        var _text = __text.replace('-', '');
        retval = '(' + _text + ')';
        return '<span class=""><b>' + retval + '</b></span>';
    } else if (text === 0) {
        retval = '-';
        return '<span class=""><b>' + retval + '</b></span>';
    } else {
        __text = parseFloat(text).toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
        retval = __text;
        return '<span class=""><b>' + retval + '</b></span>';
    }
}

function premiumPayableSumItemFormatter(data) {
    var field = this.field;
    var total_sum = data.reduce(function (sum, row) { 
        var gross = row['grossPremium'];
        var sumIns = row['sumInsured']; 
        var portion = row['treatyValue'];
        var amount = parseFloat(portion) * parseFloat(gross) / parseFloat(sumIns);
        //return (sum) + (row[field] || 0)
        return (sum) + (amount || 0)
    }, 0);
    var value = total_sum;

    var text = (value).toFixed(0);
    var retval = ''; var __text = '';
    if (text < 0) {
        __text = (parseFloat(text).toFixed(0)).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
        var _text = __text.replace('-', '');
        retval = '(' + _text + ')';
        return '<span class=""><b>' + retval + '</b></span>';
    } else if (text === 0) {
        retval = '-';
        return '<span class=""><b>' + retval + '</b></span>';
    } else {
        __text = (parseFloat(text).toFixed(0)).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
        retval = __text;
        return '<span class=""><b>' + retval + '</b></span>';
    }
}

function treatypremiumPayableSumItemFormatter(data) {
    var field = this.field;
    var total_sum = data.reduce(function (sum, row) {
        var gross = row['grossPremium'];
        var sumIns = row['sumInsured'];
        var portion = row['treatyValue'];
        //var amount = parseFloat(portion) * parseFloat(gross) / parseFloat(sumIns);
        var amount = (parseFloat(gross) * (parseFloat(sumIns) - parseFloat(portion)) / parseFloat(sumIns));
        //return (sum) + (row[field] || 0)
        return (sum) + (amount || 0)
    }, 0);
    var value = total_sum;

    var text = (value).toFixed(0);
    var retval = ''; var __text = '';
    if (text < 0) {
        __text = (parseFloat(text).toFixed(0)).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
        var _text = __text.replace('-', '');
        retval = '(' + _text + ')';
        return '<span class=""><b>' + retval + '</b></span>';
    } else if (text === 0) {
        retval = '-';
        return '<span class=""><b>' + retval + '</b></span>';
    } else {
        __text = (parseFloat(text).toFixed(0)).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
        retval = __text;
        return '<span class=""><b>' + retval + '</b></span>';
    }
}

function LeftSumFormatter(data) {
    var field = this.field;
    var total_sum = data.reduce(function (sum, row) {
        var gross = row['grossPremium'];
        var sumIns = row['sumInsured'];
        var portion = row['treatyValue'];
        var amount = parseFloat(sumIns) - parseFloat(portion);
        //var amount = (parseFloat(gross) * (parseFloat(sumIns) - parseFloat(portion)) / parseFloat(sumIns));
        //return (sum) + (row[field] || 0)
        return (sum) + (amount || 0)
    }, 0);
    var value = total_sum;

    var text = (value).toFixed(0);
    var retval = ''; var __text = '';
    if (text < 0) {
        __text = (parseFloat(text).toFixed(0)).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
        var _text = __text.replace('-', '');
        retval = '(' + _text + ')';
        return '<span class=""><b>' + retval + '</b></span>';
    } else if (text === 0) {
        retval = '-';
        return '<span class=""><b>' + retval + '</b></span>';
    } else {
        __text = (parseFloat(text).toFixed(0)).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
        retval = __text;
        return '<span class=""><b>' + retval + '</b></span>';
    }
}
//function balanceFormatter(value, row, index,data) {
//    try { 
//        if (index === 0) {
//            return row[index].balance;
//        } else {
//            var prev = getPrevious(data,index)
//            var _value = moneyFormat((parseFloat(row.balance) + parseFloat(prev).toFixed(2)));
//            return _value;
//        }
        
//    } catch {
//        return value; //row[index].balance;
//    }
    
//}

function sumFormat(data) {
    console.log(data);
    field = this.field;
    return data.reduce(function (sum, row) {
        return sum + (+row[field]);
    }, 0);
}
function balanceFormatter(value, row, index) {
    var data = tempgld;// JSON.parse(localStorage.getItem('tempd'));
    if (index === 0) {
        return moneyFormat(parseFloat(value));
    } else {
        var p = data[0].balance;
        for (var i = 1; i <= index; i++) {
            p += parseFloat(data[i].balance)
        }
        return moneyFormat(parseFloat(p));
        //var first = data[index].balance;
        //var second = data[index - 1].balance;
        //var result = moneyFormat(parseFloat(first) + parseFloat(second));
        //return result
    }
    
    //return sumFormat.call(this, data) / data.length;
}


function totalFormatter(value, row, index) {
    return '<span><b>Total</b></span>';
}
function getPrevious(data,index) {
    console.log(data[index]);
    return 0;
}

function totalPriceFormatter(data) {
    var field = this.field
    return '$' + data.map(function (row) { 
        //return +row[field].substring(1)
        return +row[field]
    }).reduce(function (sum, i) {
        return sum + i
    }, 0)
}
function totalTextFormatter(data) {
    return '<span class=""><b>Total</b></span>'; 
}
function init_daterangepicker(id,fn) {

    if (typeof ($.fn.daterangepicker) === 'undefined') { return; }
    console.log('init_daterangepicker');

    var cb = function (start, end, label) {
        console.log(start.toISOString(), end.toISOString(), label);
        $('#' + id + ' span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    };

    var optionSet1 = {
        startDate: sdate,//moment().subtract(29, 'days'),
        endDate: edate, //moment(),
        //minDate: sdate, //'01/01/2012',
        maxDate: ydate,//'12/31/2015',
        dateLimit: {
            //days: 365
            days: 1095
        },
        showDropdowns: true,
        showWeekNumbers: true,
        timePicker: false,
        timePickerIncrement: 1,
        timePicker12Hour: true,
        ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Yearly': [sdate, ydate],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
            '1st Quater': [sdate, sqtr],
            '2nd Quater': [sqtr, tqtr],
            '3rd Quater': [tqtr, fqtr],
            'Last Quater': [fqtr, ydate] 
        },
        opens: 'left',
        buttonClasses: ['btn btn-default'],
        applyClass: 'btn-small btn-primary',
        cancelClass: 'btn-small',
        format: 'MM/DD/YYYY',
        separator: ' to ',
        locale: {
            applyLabel: 'Submit',
            cancelLabel: 'Clear',
            fromLabel: 'From',
            toLabel: 'To',
            customRangeLabel: 'Custom',
            daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            firstDay: 1
        }
    };

    //$('#' + id + ' span').html(moment().subtract(29, 'days').format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));
    $('#' + id + ' span').html(moment().startOf('year').format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));
    $('#' + id + '').daterangepicker(optionSet1, cb);
    $('#' + id + '').on('show.daterangepicker', function () {
        console.log("show event fired");
    });
    $('#' + id + '').on('hide.daterangepicker', function () {
        console.log("hide event fired");
    });
    $('#' + id + '').on('apply.daterangepicker', function (ev, picker) {
        var tsd = new Date(picker.startDate.format('MMMM D, YYYY')).addHours(2).toISOString().split('T')[0];
        var ted = new Date(picker.endDate.format('MMMM D, YYYY')).addHours(2).toISOString().split('T')[0];
        //fn(picker.startDate.format('MMMM D, YYYY'), picker.endDate.format('MMMM D, YYYY'));
        fn(tsd, ted);
        localStorage.setItem('sdate', tsd);
        localStorage.setItem('edate', ted);
        console.log("apply event fired, start/end dates are " + picker.startDate.format('MMMM D, YYYY') + " to " + picker.endDate.format('MMMM D, YYYY'));
    });
    $('#' + id + '').on('cancel.daterangepicker', function (ev, picker) {
        console.log("cancel event fired");
    });
    $('#options1').click(function () {
        $('#' + id + '').data('daterangepicker').setOptions(optionSet1, cb);
    });
    $('#options2').click(function () {
        $('#' + id + '').data('daterangepicker').setOptions(optionSet2, cb);
    });
    $('#destroy').click(function () {
        $('#' + id + '').data('daterangepicker').remove();
    });

}

function init_daterangepickerClass(id, fn) {

    if (typeof ($.fn.daterangepicker) === 'undefined') { return; }
    console.log('init_daterangepicker');

    var cb = function (start, end, label) {
        console.log(start.toISOString(), end.toISOString(), label);
        $('.' + id + ' span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    };

    var optionSet1 = {
        startDate: sdate,//moment().subtract(29, 'days'),
        endDate: edate, //moment(),
        //minDate: sdate, //'01/01/2012',
        maxDate: ydate,//'12/31/2015',
        dateLimit: {
            days: 365
        },
        showDropdowns: true,
        showWeekNumbers: true,
        timePicker: false,
        timePickerIncrement: 1,
        timePicker12Hour: true,
        ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Yearly': [sdate, ydate],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
            '1st Quater': [sdate, sqtr],
            '2nd Quater': [sqtr, tqtr],
            '3rd Quater': [tqtr, fqtr],
            'Last Quater': [fqtr, ydate]
        },
        opens: 'left',
        buttonClasses: ['btn btn-default'],
        applyClass: 'btn-small btn-primary',
        cancelClass: 'btn-small',
        format: 'MM/DD/YYYY',
        separator: ' to ',
        locale: {
            applyLabel: 'Submit',
            cancelLabel: 'Clear',
            fromLabel: 'From',
            toLabel: 'To',
            customRangeLabel: 'Custom',
            daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            firstDay: 1
        }
    };

    //$('#' + id + ' span').html(moment().subtract(29, 'days').format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));
    $('.' + id + ' span').html(moment().startOf('year').format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));
    $('.' + id + '').daterangepicker(optionSet1, cb);
    $('.' + id + '').on('show.daterangepicker', function () {
        console.log("show event fired");
    });
    $('.' + id + '').on('hide.daterangepicker', function () {
        console.log("hide event fired");
    });
    $('.' + id + '').on('apply.daterangepicker', function (ev, picker) {
        var tsd = new Date(picker.startDate.format('MMMM D, YYYY')).addHours(2).toISOString().split('T')[0];
        var ted = new Date(picker.endDate.format('MMMM D, YYYY')).addHours(2).toISOString().split('T')[0];
        //fn(picker.startDate.format('MMMM D, YYYY'), picker.endDate.format('MMMM D, YYYY'));
        fn(tsd, ted);
        localStorage.setItem('sdate', tsd);
        localStorage.setItem('edate', ted);
        console.log("apply event fired, start/end dates are " + picker.startDate.format('MMMM D, YYYY') + " to " + picker.endDate.format('MMMM D, YYYY'));
    });
    $('.' + id + '').on('cancel.daterangepicker', function (ev, picker) {
        console.log("cancel event fired");
    });
    $('#options1').click(function () {
        $('.' + id + '').data('daterangepicker').setOptions(optionSet1, cb);
    });
    $('#options2').click(function () {
        $('.' + id + '').data('daterangepicker').setOptions(optionSet2, cb);
    });
    $('#destroy').click(function () {
        $('.' + id + '').data('daterangepicker').remove();
    });

}


$(function () {

    $('#tab').tabs({
        collapsible: true
    })
    $('input.num').keyup(function (event) {

        // skip for arrow keys
        //if (event.which >= 37 && event.which <= 40) return;

        // format number
        $(this).val(function (index, value) {
            var parts = value.toString().split(".");
             parts[0]= parts[0]
                //.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                .replace(/\D/g, "")
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                //;
            //.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

            return parts.join(".");
        });

    });
});

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function printPage() {
    window.print();
}

function removeArray(arr, value) {
    return arr.filter(item => item !== value);
}

function parseCommaValue(value) {
    try {
        if (value.indexOf(',') > -1) {
            console.log(value);
            var _value = value.replace(/,/g, '');
            console.log(_value);
            return parseFloat(_value);
        } else {
            return value;
        }
    } catch (ex) {
        return value;
    }

}

$.fn.parseCommaValue = function(value) {
    try {
        if (value.indexOf(',') > -1) {
            console.log(value);
            var _value = value.replace(/,/g, '');
            console.log(_value);
            return parseFloat(_value);
        } else {
            return 0.00;
        }
    } catch (ex) {
        return 0.00;
    }

}

//function to get value of elemet in form
$.fn.serializeObject = function () {
    console.log(this);
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

$.fn.setValueObject = function (temp) { 
    var o = {};
    var a = this.serializeArray();
    var b = this[0].elements;
    console.log(a);
    $.each(b, function () {
        console.log(this);
        console.log(this.tagName);
        if (this.name !== undefined) {
            if (this.tagName === 'INPUT') {
                if (this.type === 'date') {
                    var dval = new Date(temp[this.name]);
                    var day = ("0" + dval.getDate()).slice(-2);
                    var month = ("0" + (dval.getMonth() + 1)).slice(-2);

                    var tempDateVal = dval.getFullYear() + "-" + (month) + "-" + (day);
                    this.value = tempDateVal; 
                } else if (this.type === 'button') {
                    console.log('');
                } else {
                    try {
                        this.value = temp[this.name];
                    } catch (e) {
                        console.log(e);
                        this.value = '';
                    }
                   
                    
                } 
                
            } else if (this.tagName === 'SELECT') { 
                try {
                    this.value = temp[this.name];
                } catch (e) {
                    console.log(e);
                    this.value = '';
                } 
            } else {
                console.log(temp[this.name]);
            }
            
        } else {
            //o[this.name] = this.value || '';
           // console.log(this.name);
        }
    });
    return o;
};

$.fn.mergeSingleJSONObject = function (obj1,obj2) {
    const result = {};
    let key;

    for (key in obj1) {
        if (obj1.hasOwnProperty(key)) {
            result[key] = obj1[key];
        }
    }

    for (key in obj2) {
        if (obj2.hasOwnProperty(key)) {
            result[key] = obj2[key];
        }
    }
     
    return result;
};

function mergeSingleJSONObject(obj1, obj2) {
    const result = {};
    let key;

    Object.keys(obj1)
        .forEach(key => result[key] = obj1[key]);

    Object.keys(obj2)
        .forEach(key => result[key] = obj2[key]);

    return result;
};

function getMemberById(valuetofind){
    var array = JSON.parse(sessionStorage.getItem('appm'));
    for (i = 0; i < array.length; i++) {
        if (array[i]['memberid'] === valuetofind) {
            return array[i];
        }
    }
    return -1;
}

