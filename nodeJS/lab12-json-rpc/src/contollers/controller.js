class Controller {
    sum(params) {
        return params.reduce((sum, currentValue) => sum + currentValue, 0);
    }

    mul(params) {
        return params.reduce((mul, currentValue) => mul * currentValue, 1);
    }

    div([x, y]) {
        return x / y;
    }

    proc([x, y]) {
        return x / y * 100;
    }
}

module.exports = new Controller();