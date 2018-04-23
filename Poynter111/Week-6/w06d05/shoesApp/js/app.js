$(init);

function init() {
  console.log( 'Im working!');
  getDoughnuts();
  $('#new-doughnut').on('submit', handleSubmit);
}

function handleSubmit(e){
  console.log('here');
  e.preventDefault();
  const newDoughnut = {
    brand: $('#doughnut-style').val(),
    color: $('#doughnut-flavor').val()

  };
  console.log('data--->',newDoughnut);
  $
    .post('http://localhost:3000/api/shoes', newDoughnut)
    .done(data => appendDoughnutToDom(null, data))
    .fail(err => console.log(err));
}

function getDoughnuts() {
  $
    .get('http://localhost:3000/api/shoes')
    .done((data) => {
      $.each(data, appendDoughnutToDom);
    })
    .fail((err) => {
      console.log(err);
    });
}

function appendDoughnutToDom(index, donut){
  const laced = donut.laced ? '<p>Laced</p' : '<p>Not Laced </p>';
  $('#doughnuts').append(`
    <li>
      <strong>${donut.brand}</strong> <em>${donut.color}</em> <em>${laced}</em> <em>${donut.price}</em>
    </li>
    `);
}
