/* global instantsearch */

app({
  appId: 'EDVB3XUHCU',
  apiKey: 'edb239823771c6be7c5f87bb65fe661d', // search API key
  indexName: 'wine-search',
});

function app(opts) {
  if (opts.appId === 'XXX') {
    console.error('You forgot to change the API key');
    return;
  }

  // ---------------------
  //
  //  Init
  //
  // ---------------------
  const search = instantsearch({
    appId: opts.appId,
    apiKey: opts.apiKey,
    indexName: opts.indexName,
    urlSync: true,
  });

  // ---------------------
  //
  //  Default widgets
  //
  // ---------------------
  search.addWidget(
    instantsearch.widgets.searchBox({
      container: '#search-input',
      placeholder: 'Find what other people love',
    })
  );

  search.addWidget(
    instantsearch.widgets.hits({
      container: '#hits',
      hitsPerPage: 10,
      templates: {
        item: getTemplate('hit'),
      },
      transformData: {
        item: function(item) {
          // We just call this function to log the data so that
          // you can know what you can use in your item template
          console.log(item);
          return item;
        },
      },
    })
  );

  // ---------------------
  //
  //  Filtering widgets
  //
  // ---------------------

  search.addWidget(
    instantsearch.widgets.menu({
      container: '#type',
      attributeName: 'type',
      limit: 10,
      showMore: true,
      templates: {
        header: getHeader('Type'),
      },
    })
  );



  search.start();
}

// ---------------------
//
//  Helper functions
//
// ---------------------
function getTemplate(templateName) {
  return document.querySelector(`#${templateName}-template`).innerHTML;
}

function getHeader(title) {
  return `<h5>${title}</h5>`;
}






