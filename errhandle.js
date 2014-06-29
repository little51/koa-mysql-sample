'use strict' ;

app.use(function *(next) {
    try {
        yield next;
    } catch (err) {
        this.status = err.status || 500;
        this.body  = err.message;
        this.app.emit('error', err, this);
    }
});