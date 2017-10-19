var swal = swal || {};

var alert = {
  title: 'Mark this promise completed?',
  text: "You won't be able to revert this!",
  type: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, complete it!',
  cancelButtonText: 'No, cancel!'
};

function completePromise(id) {
  console.log('completePromise', id);
  
  swal(alert).then(function () {
    fetch(`/promise/complete/${id}`).then(function(response) {
      if(response.ok) {
        return swal(
          'Completed!',
          'Your promise has been fulfilled.',
          'success'
        )
      }
      throw new Error('Network response was not ok.');
    })
  }, function (dismiss) {
    // dismiss can be 'cancel', 'overlay',
    // 'close', and 'timer'
    if (dismiss === 'cancel') {

    }
  });
};
