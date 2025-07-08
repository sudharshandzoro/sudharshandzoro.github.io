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



//modal closes when the clicking home
$(document).on('click', '#ccarm-home-btn', function(e) {
    // No need for e.preventDefault(), since it's a button
    $('#projectModal').on('hidden.bs.modal', function () {
        window.location.href = "https://sudharshandzoro.github.io/#projects";
        $(this).off('hidden.bs.modal'); // clean up to avoid stacking events
    });
});
