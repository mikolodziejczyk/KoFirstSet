const path = require('path');

module.exports = {
    entry: {
        UnitTesting_Basics_Spec: "./AppScripts/UnitTesting/Basics/test.ts",
        UnitTesting_Promises_Spec: "./AppScripts/UnitTesting/Promises/test.ts",
        UnitTesting_Async_Spec: "./AppScripts/UnitTesting/Async/test.ts",
        UnitTesting_jQueryDeferred_Spec: "./AppScripts/UnitTesting/jQueryDeferred/test.ts",
        UnitTesting_Observables_Spec: "./AppScripts/UnitTesting/Observables/test.ts",
        Polyfills: "./AppScripts/Polyfills/polyfills.ts"
    },
    output: {
        filename: "./spec/[name].js"
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
            }
        ]
    },

    externals: {
        "../../../node_modules/moment/moment": "moment",
        "../moment": "moment",
        "moment": "moment"
    }
}