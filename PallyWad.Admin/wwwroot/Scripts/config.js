
var appConfig = {
    'Lang': 'EN',
    'apiURL': resourceUrl(),
    'authURL': serviceBaseUrl(),
    'adminURL': adminBaseUrl(),
    'setupURL': setupBaseUrl(),
    'userURL': userBaseUrl(),
    'accountURL': accountBaseUrl(),
    'managerUrl': managerBaseUrl(),
    'rootApp': 'http://adb.anchorinsuranceng.com:8051/web/'
    //'rootApp': 'http://anchorweb.azurewebsites.net/'
    //'rootApp': 'http://localhost:8050/web/'
};

var currformatter = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    currencySign: "accounting",
});


function adminBaseUrl() {
    const angularRoute = window.location.pathname + window.location.search;
    const _url = window.location.href;
    let domain = '';
    if (!(angularRoute.substr(angularRoute.length - 1) === '/')) {
        domain = _url.replace(angularRoute, '');
    } else {
        domain = _url;
    }
    let url = '';

    if (domain.includes('localhost')) {
        if (domain.includes('5135')) {
            url = domain.replace('5135', '5176');
        } else if (domain.includes('5134')) {
            url = domain.replace('5134', '6001');
        }
    } else if (domain.includes('127.0.0.1')) {
        url = domain.replace('8080', '4000');
        url = url.replace('127.0.0.1', 'localhost');
    } else {
        url = domain.replace('admin', 'adminapi');
    }

    const newUrl = url.substr(url.length - 1);
    if (newUrl === '/') {
        return url;
    } else {
        url = url + '/';
        return url;
    }
}

function accountBaseUrl() {
    const angularRoute = window.location.pathname + window.location.search;
    const _url = window.location.href;
    let domain = '';
    if (!(angularRoute.substr(angularRoute.length - 1) === '/')) {
        domain = _url.replace(angularRoute, '');
    } else {
        domain = _url;
    }
    let url = '';

    if (domain.includes('localhost')) {
        if (domain.includes('5135')) {
            url = domain.replace('5135', '5016');
        } else if (domain.includes('5134')) {
            url = domain.replace('5134', '6001');
        }
    } else if (domain.includes('127.0.0.1')) {
        url = domain.replace('8080', '4000');
        url = url.replace('127.0.0.1', 'localhost');
    } else {
        url = domain.replace('admin', 'accounting');
    }

    const newUrl = url.substr(url.length - 1);
    if (newUrl === '/') {
        return url;
    } else {
        url = url + '/';
        return url;
    }
}

function setupBaseUrl() {
    const angularRoute = window.location.pathname + window.location.search;
    const _url = window.location.href;
    let domain = '';
    if (!(angularRoute.substr(angularRoute.length - 1) === '/')) {
        domain = _url.replace(angularRoute, '');
    } else {
        domain = _url;
    }
    let url = '';

    if (domain.includes('localhost')) {
        if (domain.includes('5135')) {
            url = domain.replace('5135', '5172');
        } else if (domain.includes('5134')) {
            url = domain.replace('5134', '6001');
        }
    } else if (domain.includes('127.0.0.1')) {
        url = domain.replace('8080', '4000');
        url = url.replace('127.0.0.1', 'localhost');
    } else {
        url = domain.replace('admin', 'setup');
    }

    const newUrl = url.substr(url.length - 1);
    if (newUrl === '/') {
        return url;
    } else {
        url = url + '/';
        return url;
    }
}
function userBaseUrl() {
    const angularRoute = window.location.pathname + window.location.search;
    const _url = window.location.href;
    let domain = '';
    if (!(angularRoute.substr(angularRoute.length - 1) === '/')) {
        domain = _url.replace(angularRoute, '');
    } else {
        domain = _url;
    }
    let url = '';

    if (domain.includes('localhost')) {
        if (domain.includes('5135')) {
            url = domain.replace('5135', '5084');
        } else if (domain.includes('5134')) {
            url = domain.replace('5134', '6001');
        }
    } else if (domain.includes('127.0.0.1')) {
        url = domain.replace('8080', '4000');
        url = url.replace('127.0.0.1', 'localhost');
    } else {
        url = domain.replace('admin', 'user');
    }

    const newUrl = url.substr(url.length - 1);
    if (newUrl === '/') {
        return url;
    } else {
        url = url + '/';
        return url;
    }
}

function serviceBaseUrl() {
    const angularRoute = window.location.pathname + window.location.search;
    const _url = window.location.href;
    let domain = '';
    if (!(angularRoute.substr(angularRoute.length - 1) === '/')) {
        domain = _url.replace(angularRoute, '');
    } else {
        domain = _url;
    }
    let url = '';

    if (domain.includes('localhost')) {
        if (domain.includes('5135')) {
            url = domain.replace('5135', '5186');
        } else if (domain.includes('5134')) {
            url = domain.replace('5134', '6001');
        }
    } else if (domain.includes('127.0.0.1')) {
        url = domain.replace('8080', '4000');
        url = url.replace('127.0.0.1', 'localhost');
    } else {
        url = domain.replace('admin', 'auth');
    }

    const newUrl = url.substr(url.length - 1);
    if (newUrl === '/') {
        return url;
    } else {
        url = url + '/';
        return url;
    }
}
function managerBaseUrl() {
    const angularRoute = window.location.pathname + window.location.search;
    const _url = window.location.href;
    let domain = '';
    if (!(angularRoute.substr(angularRoute.length - 1) === '/')) {
        domain = _url.replace(angularRoute, '');
    } else {
        domain = _url;
    }
    let url = '';

    if (domain.includes('localhost')) {
        if (domain.includes('5133')) {
            url = domain.replace('5133', '5147');
        } else if (domain.includes('5134')) {
            url = domain.replace('5134', '5147');
        }
    } else if (domain.includes('127.0.0.1')) {
        url = domain.replace('8080', '5147');
        url = url.replace('127.0.0.1', 'localhost');
    } else {
        if (domain.includes('yocas')) {
            url = domain.replace('app', 'manage');
        }else{
            url = 'https://manage.yocasconsulting.com/';
        }
        
    }

    const newUrl = url.substr(url.length - 1);
    if (newUrl === '/') {
        return url;
    } else {
        url = url + '/';
        return url;
    }
}

function signalRUrl() {
    const angularRoute = window.location.pathname + window.location.search;
    const _url = window.location.href;
    let domain = '';
    if (!(angularRoute.substr(angularRoute.length - 1) === '/')) {
        domain = _url.replace(angularRoute, '');
    } else {
        domain = _url;
    }
    let url = '';

    if (domain.includes('localhost')) {
        url = domain.replace('4001', '4003');
    } else if (domain.includes('127.0.0.1')) {
        url = domain.replace('8080', '4003');
        url = url.replace('127.0.0.1', 'localhost');
    } else {
        url = domain.replace('app', 'signalR');
    }

    const newUrl = url.substr(url.length - 1);
    if (newUrl === '/') {
        return url;
    } else {
        url = url + '/';
        return url;
    }
}

function resourceUrl() {
    const angularRoute = window.location.pathname + window.location.search;
    const _url = window.location.href;
    let domain = '';
    if (!(angularRoute.substr(angularRoute.length - 1) === '/')) {
        domain = _url.replace(angularRoute, '');
    } else {
        domain = _url;
    }
    let url = '';
    // domain = domain + '/';
    console.log(' old url ' + _url);
    console.log(' route ' + angularRoute);
    console.log(' domains ' + domain);
    // let domain = getUrl();
    if (domain.includes('localhost')) {
        if (domain.includes('5133')) {
            url = domain.replace('5133', '6002');
        } else if (domain.includes('5000')) {
            url = domain.replace('5000', '6002');
        }

    } else if (domain.includes('127.0.0.1')) {
        url = domain.replace('8080', '4002');
        url = url.replace('127.0.0.1', 'localhost');
    } else {
        url = domain.replace('app', 'resource');
    }

    const newUrl = url.substr(url.length - 1);
    if (newUrl === '/') {
        console.log(' with endings ' + url);
        return url;
    } else {
        url = url + '/';
        console.log(' no endings ' + url);
        return url;
    }
}
var inHTML = '<li class="header">MAIN NAVIGATION</li>';
var links = [
        { "name": "Dashboard", "address": [], "fa":"0" },
    { "name": "Underwriting", "address": [["New", "Underwriting/NB"], ["Renewals", "~/Underwriting/Renewals"], ["Reversal","Underwriting/Reversals"],["ORC","ORC"],["Returns","Returns"]], "fa": "5"  },
    { "name": "Claims", "address": [["Motor", "Motor"], ["Bonds", "Bonds"], ["Fire", "Fire"], ["Marine", "Marine"], ["Oil & Gas", "Oil"], ["Workmen Compensation", "WP"]], "fa": "2" },
    { "name": "ReInsurance", "address": [["Reinsurance","Reinsurance"],["Treaty","Treaty"]],"fa":"4"}];
var fa = ["fa-angle-left ", "", "fa-files-o", "", "fa-laptop","fa-pie-chart"]
$.each(links, function (index, value) {
    var newItem = '';
    if (index === 0) {
        newItem = '<li class="active treeview">' +
            '<a href="#"><i class="fa ' + fa[value.fa] +' "></i> <span>' +
            value.name +
            '</span><span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span></a>'
            + '<ul class="treeview-menu">'
            + '<li class="active"> <a href="index.html"><i class="fa fa-circle-o"></i> Dashboard v1</a></li>'
            +'<li><a href="index2.html"><i class="fa fa-circle-o"></i> Dashboard v2</a></li></ul>'
            + "</li>";
    } else {
        var address = getULLink(value.address);
        newItem = '<li class="treeview">' +
            '<a href="#"><i class="fa ' + fa[value.fa] + ' "></i> <span>' +
            value.name +
            '</span><span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span></a>'
            + '<ul class="treeview-menu">' + address
            //+ '<li class="active"> <a href="index.html"><i class="fa fa-circle-o"></i> Dashboard v1</a></li>'
            //+ '<li><a href="index2.html"><i class="fa fa-circle-o"></i> Dashboard v2</a></li>
        +'</ul > '
            + "</li>";
    }
    
    inHTML += newItem;
});

$("#menu").html(inHTML); //add generated tr html to corresponding table

function getULLink(val) {
    var newItem = '';
    $.each(val, function (index, value) {
        newItem += '<li class="active"> <a href="' + value[1] + '"><i class="fa fa-circle-o"></i> ' + value[0] + '</a></li>';
            //+ '<li><a href="index2.html"><i class="fa fa-circle-o"></i> Dashboard v2</a></li></ul>'
    });
    return newItem;
}

/*jQuery.extend(jQuery.validator.messages, {
confirmpassword:"Password mismatch. Please re-enter password"
});*/
var processBy = localStorage.getItem('fullname');//JSON.parse(localStorage.getItem('fullname'));
var processByEmail = (localStorage.getItem('uemail'));//JSON.parse(localStorage.getItem('uemail'));

var qs = (function (a) {
    if (a === "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i) {
        var p = a[i].split('=', 2);
        if (p.length === 1)
            b[p[0]] = "";
        else
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
})(window.location.search.substr(1).split('&'));

function moneyFormat(text) {
    //if (text.indexOf('-') == -1){
    if (text < 0) {
        var __text = (parseFloat(text).toFixed(2)).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
        var _text = __text.replace('-', '');
        return '(' + _text + ')';
    } else if (text === 0) {
        return '-';
    } else {
        __text = (parseFloat(text).toFixed(2)).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
        return __text;
    }
};

function dateFormatter(value, row, index) {
    var main = new Date(value).toISOString().split('T')[0];
    return '<span>' + main + '</span>';
};


function moneyFormatter(value, row, index) {
    var currformatter = new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
        currencySign: "accounting",
    });
    var main = currformatter.format(value);
    return '<span>' + main + '</span>';
};


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
        var _text =currformatter.format(text);
        //var _text = __text.replace('-', '');
        retval = '(' + _text + ')';
        return '<span class=""><b>' + retval + '</b></span>';
    } else if (text === 0) {
        //retval = '-';
        retval =currformatter.format(text);
        return '<span class=""><b>' + retval + '</b></span>';
    } else {
        __text = parseFloat(text).toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
        retval =currformatter.format(text);
        //retval = __text;
        return '<span class=""><b>' + retval + '</b></span>';
    }
}

function printPage(divName) {

    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    var sWidth = screen.width;
    console.log("sWidth " + sWidth);
    var ComputedStyle = getComputedStyle(document.body);
    console.log("CS " + ComputedStyle);
    var divW = ComputedStyle.width;
    var w = divW.replace(/[^0-9]/g, '');
    var wN = Number(w);
    console.log("Width " + wN);
    /*if (w > 1000) {
        var styles = '@media print { body, * { visibility: hidden; } html, body { overflow: hidden; transform: translateZ(0); } #slide { transform: scale(0.75) !important;' +
            ' } #wrapper { transform: scale(0.75) !important; } #slide, #wrapper { width: 100% !important; height: 100% !important; overflow: visible !important; }' +
            ' #frame { overflow: visible !important; } .slide-transition-container { overflow: visible !important; } @page {size: A4 landscape;max-height:99%; max-width:99%}' +
            ' .slide-container, .slide-container * { visibility: visible !important; margin-top: 0px !important; margin-left: 0px !important; } #outline-panel { display: none !important;' +
            ' } } }';
        var stylesheet = document.createElement('style');
        stylesheet.type = 'text/css';
        stylesheet.innerText = styles;
        document.head.appendChild(stylesheet);
    } else {
        var styles = '@media print { body, * { visibility: hidden; } html, body { overflow: hidden; transform: translateZ(0); } #slide { transform: scale(1.0) !important;' +
            ' } #wrapper { transform: scale(1.0) !important; } #slide, #wrapper { width: 100% !important; height: 100% !important; overflow: visible !important; }' +
            ' #frame { overflow: visible !important; } .slide-transition-container { overflow: visible !important; } @page {size: A4 landscape;max-height:99%; max-width:99%}' +
            ' .slide-container, .slide-container * { visibility: visible !important; margin-top: 0px !important; margin-left: 0px !important; } #outline-panel {' +
            ' display: none !important; } } }'
        var stylesheet = document.createElement('style');
        stylesheet.type = 'text/css';
        stylesheet.innerText = styles;
        document.head.appendChild(stylesheet);
    }*/

    window.print();

    //window.print();

    document.body.innerHTML = originalContents;
}

(function (open) {
    XMLHttpRequest.prototype.open = function (method, url, async, user, pass) {
        this.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                //console.log(this.status);
            }
        }, false);


        open.call(this, method, url, async, user, pass);
       
    };
})(XMLHttpRequest.prototype.open);

$(document).ajaxSuccess(function (event, request, settings) {
    
});

$.ajaxSetup({
    beforeSend: function (xhr) {
        try {
            var auth = localStorage.getItem('auth');
            var expirydate = JSON.parse(auth)['expiration'];
            auth = JSON.parse(auth).token;
            xhr.setRequestHeader('Expiry', expirydate);
            xhr.setRequestHeader('Authorization', 'Bearer ' + auth);
        } catch(ex){
            var auth = '';
            xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
            xhr.setRequestHeader('Authorization', 'Bearer ' + auth);
        }
    }
});

var IS_ONLINE = true;
function setOnlineStatus(message) {
    var displayOnlineStatus = document.getElementById("status");
    displayOnlineStatus.innerHTML = message;
    if (message === 'offline') {
        $('#status').addClass('red');
    } else {
        $('#status').removeClass('red');
    }
}
function checkNetwork() {
    $.ajax({
        // Empty file in the root of your public vhost
        url: appConfig.apiURL + 'api/values', //'https://google.com',
        // We don't need to fetch the content (I think this can lower
        // the server's resources needed to send the HTTP response a bit)
        type: 'HEAD',
        cache: false, // Needed for HEAD HTTP requests
        timeout: 2000, // 2 seconds
        success: function () {
            if (!IS_ONLINE) { // If we were offline
                IS_ONLINE = true; // We are now online
                setOnlineStatus('online');
                $(window).trigger('online'); // Raise the online event
            } else {
                setOnlineStatus('online');
            }
        },
        error: function (jqXHR) {
            if (jqXHR.status === 0 && IS_ONLINE) {
                // We were online and there is no more network connection
                setOnlineStatus('offline');
                IS_ONLINE = false; // We are now offline
                $(window).trigger('offline'); // Raise the offline event
            } else if (jqXHR.status !== 0 && !IS_ONLINE) {
                // All other errors (404, 500, etc) means that the server responded,
                // which means that there are network connectivity
                IS_ONLINE = true; // We are now online
                setOnlineStatus('offline');
                $(window).trigger('online'); // Raise the online event
            }
        }
    });
}

$(window).bind('online offline', function (e) {
    if (!IS_ONLINE || !window.navigator.onLine) {
        //alert('We have a situation here');
    } else {
        //alert('Battlestation connected');
    }
});

//if (!(window.mozInnerScreenX == null)) {
    //window.setInterval(checkNetwork, 30000); // Check the network every 30 seconds
//}

function isFloatnull(variable) {
    if (variable === null || isNaN(variable)) {
        return 0.00;
    }
    return variable;
}

