const path = require('path');

module.exports = {
    entry: {
        UnitTesting_Basics: "./AppScripts/UnitTesting/Basics/myclass.ts",
        UsingNodeModules_Index: "./AppScripts/UsingNodeModules/Index/app.ts",
        Collections_Index: "./AppScripts/Collections/Index/app.ts",
        Collections_Direct: "./AppScripts/Collections/Direct/app.ts",
        Collection_MapAndSet: "./AppScripts/Collection/MapAndSet/app.ts",
        Collection_Iterable: "./AppScripts/Collection/Iterable/app.ts",
        DateTimePickerRaw_Index: "./AppScripts/DateTimePickerRaw/Index/app.ts",
        DateTimePicker_Index: "./AppScripts/DateTimePicker/Index/app.ts",
        Iframe_Content: "./AppScripts/Iframe/Content/app.ts",
        Iframe_DialogHost: "./AppScripts/Iframe/DialogHost/app.ts",
        Iframe_Index: "./AppScripts/Iframe/Index/app.ts",
        Moment_Duration: "./AppScripts/Moment/Duration/app.ts",
        Message_Index: "./AppScripts/Message/Index/app.ts",
        Message_Inner: "./AppScripts/Message/Inner/app.ts",
        DomUrl_JsUrlTest: "./AppScripts/DomUrl/JsUrlTest/app.ts",
        Options_Index: "./AppScripts/Options/app.ts",
        Templates_Index: "./AppScripts/Templates/Index/app.ts",
        FormBinding_Text: "./AppScripts/FormBinding/Text/Text.ts",
        FormBinding_CheckboxAndRadio: "./AppScripts/FormBinding/CheckboxAndRadio/CheckboxAndRadio.ts",
        Fundamentals_Index: "./AppScripts/Fundamentals/app.ts",
        Polyfills: "./AppScripts/Polyfills/polyfills.ts"
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "./MyApp/Scripts/[name].js"
    },
    devtool: 'source-map',
    resolve: {
        extensions: [".js", ".json", ".ts"]
    },
    module: {

        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
            },
        ]
    },

    externals: {
        "../../../node_modules/moment/moment": "moment",
        "../moment": "moment",
        "moment": "moment"
    }
}