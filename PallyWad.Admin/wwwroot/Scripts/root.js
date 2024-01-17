 /*$(document).idle({
            onIdle: function () {
                console.log('user inactive');
                var url = '@Html.Raw(Url.Action("Auth/Lock"))';
                window.location.href = url; 
                //window.location.href = './auth/lock';
            },
            onActive: function () {
                console.log('Hey, Welcome back!');
            },
            idle: 100000
 });*/

 
 function hideAdmin(){
    var roles = JSON.parse(localStorage.getItem('userroles'));
    console.log(roles)
    if(roles !== null){
        if(roles.indexOf("Admin") >= 0 || roles.indexOf("admin") >= 0){
            $('.admin').show();//.addClass('hide');
        }else{
            $('.admin').hide();//.removeClass('hide');
        }
    }
    
}

