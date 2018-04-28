'use strict'

ENV.isProduction = window.location.protocol === 'https:';
ENV.productionApiUrl = 'https://tr-ab-bookapp.herokuapp.com';
ENV.developmentApiUrl = 'http://localhost:3001';
ENV.apiUrl = ENV.isProduction ? ENV.productionApiUrl : ENV.developmentApiUrl;

SearchObj.create = function(key) {
    $.post(`${ENV.apiUrl}/api/v1/keys`, {
      budget: key.budget,
      location: key.location,
      datetime: key.datetime
    })
    //   .then(() => {page('/new')})
      .catch(err => console.error(err));
  };

  SearchObj.submit = event => {
    event.preventDefault();
    let key = new SearchObj({
      budget : $('#budget').val(),
      location : $('#location').val(),
      datetime : $('#date-time').val()
    })

    app.SearchObj.create(key);
}

$('#landing-form').on('submit',SearchObj.submit);