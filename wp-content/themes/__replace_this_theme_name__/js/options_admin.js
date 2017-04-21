jQuery(document).ready(function($){
 
 	var inputClass = '';
    var custom_uploader;
 
    $('.image-trigger').click(function() {
		var inputClass = $(this).attr('data-category');
		var textBox = $(this).parent().parent().find('input.header_image');
 
        //If the uploader object has already been created, reopen the dialog
        if (custom_uploader) {
            custom_uploader.open();
            return;
        }
 
        //Extend the wp.media object
        custom_uploader = wp.media.frames.file_frame = wp.media({
            title: 'Choose Image',
            button: {
                text: 'Choose Image'
            },
            multiple: false
        });
 
        //When a file is selected, grab the URL and set it as the text field's value
        custom_uploader.on('select', function() {
            attachment = custom_uploader.state().get('selection').first().toJSON();
            $('.header_image.' + inputClass ).val(attachment.url);
        });
 
        //Open the uploader dialog
        custom_uploader.open();
 
    });
 
 
});