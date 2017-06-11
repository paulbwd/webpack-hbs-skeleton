/**
 * Created by PaulBrown on 11/06/2017.
 */
var template = require('./hbs/hello.hbs');

var output = document.getElementById("rendered_template");

var data = {title: "Using Webpack and Handlebars Templating",
            list_item: [
                    {colour: "red"},
                    {colour: "green"},
                    {colour: "blue"}
                ], camel: _.camelCase("Camel case example using-lodash"),

            people: [
                {firstName: "Paul", lastName: "Brown"},
                {firstName: "David", lastName: "Brent"},
                {firstName: "Karl", lastName: "Pilkington"}
            ]
    };
    output.innerHTML = template(data);
