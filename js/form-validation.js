(function () {
    const loader = $('#loader');

    $('#submit').click(function () {
        $('.error_input').hide();

        const name = $('#name');
        const address = $('#address');
        const phone = $('#phone');

        name.css('border-color', 'rgb(185, 145, 80)');
        address.css('border-color', 'rgb(185, 145, 80)');
        phone.css('border-color', 'rgb(185, 145, 80)');


        let hasError = false;

        if (!name.val()) {
            name.siblings('.error_input').show();
            hasError = true;
            name.css('border-color', 'red')
        }
        if (!address.val()) {
            address.siblings('.error_input').show();
            hasError = true;
            address.css('border-color', 'red')
        }
        if (!phone.val()) {
            phone.siblings('.error_input').show();
            hasError = true;
            phone.css('border-color', 'red')
        }

        if (!hasError) {
            loader.css('display', 'flex');
            TestRequest().then(() => {
                loader.hide()
                alert("Данные успешно отправлены!")
            })
        }
    })

    function TestRequest() {
        return new Promise((resolve) => setTimeout(() => resolve("done"), 1000))
    }
})()