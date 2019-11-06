

const remove_btn = document.querySelectorAll('.remove_btn');
remove_btn.forEach(function (item, index) {
    item.addEventListener('click', function (e) {
        var r = confirm("Are you sure you want remove this course?");
        console.log(r);
        if (!r) {
            e.preventDefault();
        }
    })
})

