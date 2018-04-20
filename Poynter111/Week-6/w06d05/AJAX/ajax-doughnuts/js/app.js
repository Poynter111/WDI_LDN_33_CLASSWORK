$(init);

function init() {
  console.log( 'Im working!');
  getDoughnuts();
  $('#new-doughnut').on('submit', handleSubmit);
}

function handleSubmit(e){
  e.preventDefault();
  const newDoughnut = {
    style: $('#doughnut-style').val(),
    flavor: $('#doughnut-flavor').val()
  };
  $
    .post('https://ga-doughnuts.herokuapp.com/donuts', newDoughnut)
    .done(data => appendDoughnutToDom(null, data))
    .fail(err => console.log(err));
}

function getDoughnuts() {
  $
    .get('https://ga-doughnuts.herokuapp.com/donuts')
    .done((data) => {
      $.each(data, appendDoughnutToDom);
    })
    .fail((err) => {
      console.log(err);
    });
}

function appendDoughnutToDom(index, donut){
  $('#doughnuts').append(`
    <li>
      <strong>${donut.style}</strong> <em>${donut.flavor}</em>
    </li>
    `);
}
