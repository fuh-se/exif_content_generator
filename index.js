console.log("hello !");
console.log($);

var binary_reader = new FileReader();
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('#blah').attr('src', e.target.result);
        };

        // var temp = binary_reader.readAsBinaryString(input.files[0]);
        // var temp2 = new BinaryFile(temp);
        //
        // var exif = EXIF.readFromBinaryFile(temp2);
        // alert(exif.Make);

        reader.readAsDataURL(input.files[0]);
        


        setTimeout(function() {
            console.log("heres the image !");
            console.log($('#blah'));

            var img2 = document.getElementById('blah');
            console.log(EXIF);
            EXIF.getData(img2, function() {
                var allMetaData = EXIF.getAllTags(this);
                console.log("heres the data !");
                console.log(allMetaData);
                $('#t').html(''); //clearing table before making entry
                for (let eachParameter in allMetaData) {
                    if (eachParameter !== 'thumbnail') {
                        $('#t').append('<tr>' +
                            '<td>' + eachParameter + '</td>' +
                            '<td>' + allMetaData[eachParameter] + '</td>' +
                            '</tr>');
                    }

                }

            });

        }, 1000);
    }
}




$("#imageInput").change(function() {
    readURL(this);
});

