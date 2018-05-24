function generate(type) {
        var n = noty({
            text        : type,
            type        : type,
            dismissQueue: false,
            layout      : 'topCenter',
            theme       : 'relax'
        });
        console.log(type + ' - ' + n.options.id);
        return n;
    }

    $(document).ready(function () {

        var alert = generate('alert');
        var information = generate('information');
        var error = generate('error');
        var warning = generate('warning');
        var notification = generate('notification');
        var success = generate('success');
        //window.alert();
        alert.setText('Hai.....');
        alert.setType('warning');
        information.setType('warning');

        information.setText($('.sname').text());
        
        setTimeout(function () {    
            $.noty.close(alert.options.id);
        }, 1000);

        setTimeout(function () {
            $.noty.setType(information.options.id, 'warning'); // same as information.setType('warning')
        }, 2000);

        setTimeout(function () {
            $.noty.setText(information.options.id, 'Welcome To MyHub!'); // same as information.setType('warning')
        }, 3000);

        setTimeout(function () {
            $.noty.closeAll();
        }, 4000);

    });