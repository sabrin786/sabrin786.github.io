var $grid = $('.grid').isotope({
	itemSelector: '.grid-item',
	layoutMode: 'fitRows'
});

$('.filter-button-group').on('change', 'input', function() {
	var filterValue = this.value;
	$grid.isotope({ filter: filterValue });
});

$('#detailModal').on('show.bs.modal', function (event) {
	var button = $(event.relatedTarget);
	var title = button.data('title');
	var description = button.data('description');
	var img = button.data('img');
	var modal = $(this);
	modal.find('.modal-title').text(title);
	modal.find('.modal-body p').text(description);
	modal.find('.modal-body img').attr("src", img);
});