'use strict' ;

app.use(function *(next) {
    try {
        yield next;
    } catch (err) {
        this.status = err.status || 500;
        this.body  = this.status + '\n' + err.message;
        this.app.emit('error', err, this);
    }
});