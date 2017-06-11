/**
 * Created by PaulBrown on 11/06/2017.
 */
module.exports = function(items, options) {
    var out = "<ol>";

    for(var i=0, l=items.length; i<l; i++) {
        out = out + "<li>" + options.fn(items[i]) + "</li>";
    }

    return out + "</ol>";
};