export default {
  kind: 'customsearch#search',
  url: {
    type: 'application/json',
    template:
      'https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json',
  },
  queries: {
    request: [
      {
        title: 'Google Custom Search - search term',
        totalResults: '147000000',
        searchTerms: 'search term',
        count: 10,
        startIndex: 1,
        inputEncoding: 'utf8',
        outputEncoding: 'utf8',
        safe: 'off',
        cx: '0564e2f092ba344f7',
      },
    ],
    nextPage: [
      {
        title: 'Google Custom Search - search term',
        totalResults: '147000000',
        searchTerms: 'search term',
        count: 10,
        startIndex: 11,
        inputEncoding: 'utf8',
        outputEncoding: 'utf8',
        safe: 'off',
        cx: '0564e2f092ba344f7',
      },
    ],
  },
  context: {
    title: 'Google',
  },
  searchInformation: {
    searchTime: 0.325547,
    formattedSearchTime: '0.33',
    totalResults: '147000000',
    formattedTotalResults: '147,000,000',
  },
  items: [
    {
      kind: 'customsearch#result',
      title: 'Ranking Results – How Google Search Works',
      htmlTitle: 'Ranking Results – How Google <b>Search</b> Works',
      link: 'https://www.google.com/search/howsearchworks/how-search-works/ranking-results/',
      displayLink: 'www.google.com',
      snippet:
        'A Search bar with the query "hair salon near me". Key factors in your results. To give you the most useful information, Search algorithms look at many ...',
      htmlSnippet:
        'A <b>Search</b> bar with the <b>query</b> &quot;hair salon near me&quot;. Key factors in your results. To give you the most useful information, <b>Search</b> algorithms look at many&nbsp;...',
      cacheId: 'V3QUFekmi_gJ',
      formattedUrl:
        'https://www.google.com/search/howsearchworks/how-search.../ranking- results/',
      htmlFormattedUrl:
        'https://www.google.com/<b>search</b>/how<b>search</b>works/how-<b>search</b>.../ranking- results/',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGS3cygt5kGAiZY-7hO8fSAHJHy5cC3mlOzc5Dbg3h6qghrry_RtnEAEo',
            width: '310',
            height: '163',
          },
        ],
        metatags: [
          {
            'og:image':
              'https://lh3.googleusercontent.com/dnpoiu9aopdadx61b_R8SlKyCHQIBNSTlYKOqUdZ1J8RPl3dGu1i57tmb7KzVEgpjdD_wc-CFirNtxU3wDiS9b1ZNAYxqq4tyojt5X4Q',
            'og:type': 'website',
            'twitter:card': 'summary',
            'twitter:title': 'Ranking Results – How Google Search Works',
            'og:site_name': 'Google Search - Discover How Google Search Works',
            'og:title': 'Ranking Results – How Google Search Works',
            'og:description':
              'With the vast amount of information available, finding what you need would be nearly impossible without some help sorting through it. Google’s ranking systems are designed to do just that: sort through hundreds of billions of webpages and other content in our Search index to present the most relevant, useful results in a fraction of a second.',
            'og:image:secure_url':
              'https://lh3.googleusercontent.com/dnpoiu9aopdadx61b_R8SlKyCHQIBNSTlYKOqUdZ1J8RPl3dGu1i57tmb7KzVEgpjdD_wc-CFirNtxU3wDiS9b1ZNAYxqq4tyojt5X4Q',
            'twitter:image':
              'https://lh3.googleusercontent.com/dnpoiu9aopdadx61b_R8SlKyCHQIBNSTlYKOqUdZ1J8RPl3dGu1i57tmb7KzVEgpjdD_wc-CFirNtxU3wDiS9b1ZNAYxqq4tyojt5X4Q',
            referrer: 'no-referrer',
            viewport: 'width=device-width, initial-scale=1.0',
            'twitter:description':
              'With the vast amount of information available, finding what you need would be nearly impossible without some help sorting through it. Google’s ranking systems are designed to do just that: sort through hundreds of billions of webpages and other content in our Search index to present the most relevant, useful results in a fraction of a second.',
            'og:locale': 'en',
            'og:url':
              'https://www.google.com/search/howsearchworks/how-search-works/ranking-results/',
          },
        ],
        cse_image: [
          {
            src: 'https://lh3.googleusercontent.com/dnpoiu9aopdadx61b_R8SlKyCHQIBNSTlYKOqUdZ1J8RPl3dGu1i57tmb7KzVEgpjdD_wc-CFirNtxU3wDiS9b1ZNAYxqq4tyojt5X4Q',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: '7.4 - Request Format',
      htmlTitle: '7.4 - Request Format',
      link: 'https://www.google.com/support/enterprise/static/gsa/docs/admin/current/gsa_doc_set/xml_reference/request_format.html',
      displayLink: 'www.google.com',
      snippet:
        'By using search parameters, special query terms and filters in your search requests, you can refine and enhance searches to serve your needs.',
      htmlSnippet:
        'By using search parameters, special <b>query terms</b> and filters in your search requests, you can refine and enhance searches to serve your needs.',
      cacheId: '2LU9xMi4GGoJ',
      formattedUrl:
        'https://www.google.com/support/enterprise/.../request_format.html',
      htmlFormattedUrl:
        'https://www.google.com/support/enterprise/.../request_format.html',
    },
    {
      kind: 'customsearch#result',
      title: 'Lesson Plans – Search Education – Google',
      htmlTitle: 'Lesson Plans – <b>Search</b> Education – Google',
      link: 'https://www.google.com/insidesearch/searcheducation/lessons.html',
      displayLink: 'www.google.com',
      snippet:
        'Pick the best words to use in academic searching, whether students are beginning with a full question or a topic of just a few words. View lesson.',
      htmlSnippet:
        'Pick the best <b>words</b> to use in academic <b>searching</b>, whether students are beginning with a full question or a topic of just a few <b>words</b>. View lesson.',
      cacheId: 'U0xZSR_5OAcJ',
      formattedUrl:
        'https://www.google.com/insidesearch/searcheducation/lessons.html',
      htmlFormattedUrl:
        'https://www.google.com/inside<b>search</b>/<b>search</b>education/lessons.html',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRe8PkKmDwRGA6s8k_otY2ZGOIfhik0BoaXK7U2dNtLKAbNAb-zy0RhV8I_',
            width: '303',
            height: '166',
          },
        ],
        metatags: [
          {
            viewport: 'initial-scale=1, minimum-scale=1, width=device-width',
          },
        ],
        cse_image: [
          {
            src: 'https://www.google.com/insidesearch/searcheducation/images/curriculums-ss.jpg',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Build Your Own Search String',
      htmlTitle: 'Build Your Own <b>Search</b> String',
      link: 'https://www.google.com/educators/activities/Search_kwatkins.pdf',
      displayLink: 'www.google.com',
      snippet:
        '#1 Terms and Strings. The words that you enter in the Google basic search box are called terms. As you look for information, try to use terms that are.',
      htmlSnippet:
        '#1 <b>Terms</b> and Strings. The <b>words</b> that you enter in the Google basic <b>search</b> box are called <b>terms</b>. As you look for information, try to use <b>terms</b> that are.',
      cacheId: 'O0eCIaghdPwJ',
      formattedUrl:
        'https://www.google.com/educators/activities/Search_kwatkins.pdf',
      htmlFormattedUrl:
        'https://www.google.com/educators/activities/<b>Search</b>_kwatkins.pdf',
      pagemap: {
        metatags: [
          {
            moddate: "D:20070228092227-08'00'",
            creationdate: "D:20070228092227-08'00'",
            creator: 'PScript5.dll Version 5.2',
            author: 'cathy',
            producer: 'Acrobat Distiller 7.0 (Windows)',
            title: 'Microsoft Word - Search_kwatkins.doc',
          },
        ],
      },
      mime: 'application/pdf',
      fileFormat: 'PDF/Adobe Acrobat',
    },
    {
      kind: 'customsearch#result',
      title: '7.4 - Search Experience',
      htmlTitle: '7.4 - <b>Search</b> Experience',
      link: 'https://www.google.com/support/enterprise/static/gsa/docs/admin/current/gsa_doc_set/quick_start/quick_start_se.html',
      displayLink: 'www.google.com',
      snippet:
        'Query expansion helps users get search results that they would otherwise miss. When a user searches on a term, the search appliance expands the search to ...',
      htmlSnippet:
        '<b>Query</b> expansion helps users get <b>search</b> results that they would otherwise miss. When a user <b>searches</b> on a <b>term</b>, the <b>search</b> appliance expands the <b>search</b> to&nbsp;...',
      cacheId: '-ap_I90_HckJ',
      formattedUrl:
        'https://www.google.com/support/enterprise/.../quick_start_se.html',
      htmlFormattedUrl:
        'https://www.google.com/support/enterprise/.../quick_start_se.html',
    },
    {
      kind: 'customsearch#result',
      title: 'Google Alerts - Monitor the Web for interesting new content',
      htmlTitle: 'Google Alerts - Monitor the Web for interesting new content',
      link: 'https://www.google.com/alerts',
      displayLink: 'www.google.com',
      snippet:
        'Create Alert Update alertShow optionsHide options. Help center; Send Feedback; Terms of service · Privacy Policy. Main menu. Google apps.',
      htmlSnippet:
        'Create Alert Update alertShow optionsHide options. Help center; Send Feedback; <b>Terms</b> of service &middot; Privacy Policy. Main menu. Google apps.',
      cacheId: 'xf92VHvV6HgJ',
      formattedUrl: 'https://www.google.com/alerts',
      htmlFormattedUrl: 'https://www.google.com/alerts',
      pagemap: {
        metatags: [
          {
            viewport: 'width=device-width, user-scalable=no',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Google Advanced Search',
      htmlTitle: 'Google Advanced <b>Search</b>',
      link: 'https://www.google.com/advanced_search',
      displayLink: 'www.google.com',
      snippet:
        'Find pages with... To do this in the search box ... this exact word or phrase: Put exact words in quotes: "rat terrier". any of these words:.',
      htmlSnippet:
        '<b>Find</b> pages with... To do this in the <b>search</b> box ... this exact <b>word</b> or <b>phrase</b>: Put exact <b>words</b> in quotes: &quot;rat terrier&quot;. any of these <b>words</b>:.',
      cacheId: 'szt6TT1mitEJ',
      formattedUrl: 'https://www.google.com/advanced_search',
      htmlFormattedUrl: 'https://www.google.com/advanced_<b>search</b>',
      pagemap: {
        metatags: [
          {
            viewport: 'width=device-width',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Predicting the Present with Google Trends',
      htmlTitle: 'Predicting the Present with Google Trends',
      link: 'https://www.google.com/googleblogs/pdfs/google_predicting_the_present.pdf',
      displayLink: 'www.google.com',
      snippet:
        'Apr 10, 2009 ... Google Trends data does not report the raw level of queries for a given search term. Rather, it reports a query index. The query index ...',
      htmlSnippet:
        'Apr 10, 2009 <b>...</b> Google Trends data does not report the raw level of queries for a given <b>search term</b>. Rather, it reports a query index. The query index&nbsp;...',
      cacheId: 'RpVmO5chDQUJ',
      formattedUrl:
        'https://www.google.com/googleblogs/.../google_predicting_the_present.pdf',
      htmlFormattedUrl:
        'https://www.google.com/googleblogs/.../google_predicting_the_present.pdf',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRvbVjFueBLGhGLirof_NMLws9K03vCpQKIKg-OPAnYyn8UyQhOR0_a5Gy_',
            width: '350',
            height: '144',
          },
        ],
        metatags: [
          {
            creator: 'TeX output 2009.04.10:1033',
            creationdate: "D:20090410103346-08'00'",
            producer: 'dvipdfm 0.13.2d, Copyright © 1998, by Mark A. Wicks',
          },
        ],
        cse_image: [
          {
            src: 'x-raw-image:///f1cc07aa622c57ff4b0fc6f734dd36b9e0ec46b9a7fcfe35a9d701be3d0deae0',
          },
        ],
      },
      mime: 'application/pdf',
      fileFormat: 'PDF/Adobe Acrobat',
    },
    {
      kind: 'customsearch#result',
      title: 'Google Search - Discover How Google Search Works',
      htmlTitle:
        'Google <b>Search</b> - Discover How Google <b>Search</b> Works',
      link: 'https://www.google.com/search/howsearchworks/',
      displayLink: 'www.google.com',
      snippet:
        'Wondering how Google Search works? Learn how Google looks through and organizes all the information on the internet to give you the most useful and relevant ...',
      htmlSnippet:
        'Wondering how Google <b>Search</b> works? Learn how Google looks through and organizes all the information on the internet to give you the most useful and relevant&nbsp;...',
      cacheId: 'QaaN9KCyEasJ',
      formattedUrl: 'https://www.google.com/search/howsearchworks/',
      htmlFormattedUrl:
        'https://www.google.com/<b>search</b>/how<b>search</b>works/',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGS3cygt5kGAiZY-7hO8fSAHJHy5cC3mlOzc5Dbg3h6qghrry_RtnEAEo',
            width: '310',
            height: '163',
          },
        ],
        metatags: [
          {
            'og:image':
              'https://lh3.googleusercontent.com/dnpoiu9aopdadx61b_R8SlKyCHQIBNSTlYKOqUdZ1J8RPl3dGu1i57tmb7KzVEgpjdD_wc-CFirNtxU3wDiS9b1ZNAYxqq4tyojt5X4Q',
            'og:type': 'website',
            'twitter:card': 'summary',
            'twitter:title': 'Google Search - Discover How Google Search Works',
            'og:site_name': 'Google Search - Discover How Google Search Works',
            'og:title': 'Google Search - Discover How Google Search Works',
            'og:description':
              'Wondering how Google Search works? Learn how Google looks through and organizes all the information on the internet to give you the most useful and relevant Search results in a fraction of a second.',
            'og:image:secure_url':
              'https://lh3.googleusercontent.com/dnpoiu9aopdadx61b_R8SlKyCHQIBNSTlYKOqUdZ1J8RPl3dGu1i57tmb7KzVEgpjdD_wc-CFirNtxU3wDiS9b1ZNAYxqq4tyojt5X4Q',
            'twitter:image':
              'https://lh3.googleusercontent.com/dnpoiu9aopdadx61b_R8SlKyCHQIBNSTlYKOqUdZ1J8RPl3dGu1i57tmb7KzVEgpjdD_wc-CFirNtxU3wDiS9b1ZNAYxqq4tyojt5X4Q',
            referrer: 'no-referrer',
            viewport: 'width=device-width, initial-scale=1.0',
            'twitter:description':
              'Wondering how Google Search works? Learn how Google looks through and organizes all the information on the internet to give you the most useful and relevant Search results in a fraction of a second.',
            'og:locale': 'en',
            'og:url': 'https://www.google.com/search/howsearchworks/',
          },
        ],
        cse_image: [
          {
            src: 'https://lh3.googleusercontent.com/dnpoiu9aopdadx61b_R8SlKyCHQIBNSTlYKOqUdZ1J8RPl3dGu1i57tmb7KzVEgpjdD_wc-CFirNtxU3wDiS9b1ZNAYxqq4tyojt5X4Q',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Google Search Additional Terms of Service',
      htmlTitle: 'Google <b>Search</b> Additional <b>Terms</b> of Service',
      link: 'https://www.google.com/search/about/terms/france/',
      displayLink: 'www.google.com',
      snippet:
        "Google Search Additional Terms of Service. Last Modified: January 12, 2022. If you're a resident of France, to use Google Search, you must accept (1) the ...",
      htmlSnippet:
        'Google <b>Search</b> Additional <b>Terms</b> of Service. Last Modified: January 12, 2022. If you&#39;re a resident of France, to use Google <b>Search</b>, you must accept (1) the&nbsp;...',
      cacheId: 'y7Nefe9O9QYJ',
      formattedUrl: 'https://www.google.com/search/about/terms/france/',
      htmlFormattedUrl:
        'https://www.google.com/<b>search</b>/about/<b>terms</b>/france/',
      pagemap: {
        metatags: [
          {
            referrer: 'no-referrer',
            viewport: 'initial-scale=1, minimum-scale=1, width=device-width',
          },
        ],
      },
    },
  ],
}
