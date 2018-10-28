const make = (function (arg) {
    let arr = [];

    const innerMake = function (arg){
        if (typeof arg === "function") {
            if (arr.length < 2) {
                //clear the array, so that make() function is reusable
                arr = [];
                return "not enough arguments";
            }
            const ans =  arr.reduce((a, b) => arg(a, b));
            //clear the array, so that make() function is reusable
            arr = [];
            return ans;
        }
        arr.push(...arguments);
        return innerMake;
    }

    return innerMake;

})();

module.exports = make;