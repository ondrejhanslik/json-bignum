
function BigNumber(number) {
    this.numberString = number.toString();
}

BigNumber.prototype = {
    toString: function () {
        return this.numberString;
    }
};

module.exports.BigNumber = BigNumber;