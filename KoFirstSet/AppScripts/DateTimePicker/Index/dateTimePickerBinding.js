ko.bindingHandlers.dateTimePicker = {
    init: function (element, valueAccessor, allBindingsAccessor) {
        //initialize datepicker with some optional options
        var options = allBindingsAccessor().dateTimePickerOptions || {};
        $(element).datetimepicker(options);

        //when a user changes the date, update the view model
        ko.utils.registerEventHandler(element, "dp.change", function (event) {
            var value = valueAccessor();
            if (ko.isObservable(value)) {
                if (event.date != null && event.date != false && !(event.date instanceof Date)) {
                    value(event.date.toDate());
                } else {
                    var d = event.date;
                    if (d == d) d = null; // handle clearing the input
                    value(d);
                }
            }
        });

        ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
            var picker = $(element).data("DateTimePicker");
            if (picker) {
                picker.destroy();
            }
        });
    },
    update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {

        var picker = $(element).data("DateTimePicker");
        //when the view model is updated, update the widget
        if (picker) {
            var koDate = ko.utils.unwrapObservable(valueAccessor());

            //// Added: Handing for undefined handling; the observable may contain undefined (actually you musn't use undefined values as they are improperly handled by other bindings anyway)
            //if (koDate === undefined) {
            //    koDate && null;
            //}

            //in case return from server datetime i am get in this form for example /Date(93989393)/ then fomat this
            koDate = (typeof (koDate) !== 'object') ? new Date(parseFloat(koDate.replace(/[^0-9]/g, ''))) : koDate;

            picker.date(koDate);
        }
    }
};


ko.bindingHandlers.dateTimePickerMinDate = {
    init: function (element, valueAccessor, allBindingsAccessor) {
        // nothing to do here
    },
    update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var picker = $(element).data("DateTimePicker");
        if (picker) {
            var kodate = ko.utils.unwrapObservable(valueAccessor());
            picker.minDate(kodate);
        }
    }
};

ko.bindingHandlers.dateTimePickerMaxDate = {
    init: function (element, valueAccessor, allBindingsAccessor) {
        // nothing to do here
    },
    update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var picker = $(element).data("DateTimePicker");
        if (picker) {
            var kodate = ko.utils.unwrapObservable(valueAccessor());
            picker.maxDate(kodate);
        }
    }
};
