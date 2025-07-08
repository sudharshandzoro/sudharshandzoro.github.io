// js/project-modal.js

$(document).ready(function () {
  $('.read-more-btn').click(function (e) {
    e.preventDefault();
    var title = $(this).data('title');
    var url = $(this).data('url');
    $('#projectModalTitle').text(title);
    $('#projectModalBody').load(url, function (response, status, xhr) {
      if (status == "error") {
        $('#projectModalBody').html('<div class="text-danger">Could not load the project details.</div>');
      }
    });
  });
});