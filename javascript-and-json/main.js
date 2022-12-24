var books = [{
  isbn: '9780606324274',
  title: 'Outliers',
  author: 'Malcolm Gladwell'
}, {
  isbn: '9781585424337',
  title: 'Think and Grow Rich',
  author: 'Napoleon Hill'
}, {
  isbn: '9780062457738',
  title: 'The Subtle Art of Not Giving a F*ck',
  author: 'Mark Manson'
}];

console.log('value of books:', books, 'value of typeof books:', typeof books);
console.log('value of JSON.stringify:', JSON.stringify(books), 'value of typeof JSON.stringify', typeof JSON.stringify(books));

var JSONString = '[{"Number id":137630421,"String name":"Yor Bondlike"}]';
console.log('value of JSONString:', JSONString, 'value of typeof JSONString:', typeof JSONString);

console.log('value of JSON.parse(JSONString):', JSON.parse(JSONString), 'value of typeof JSON.parse(JSONString):', typeof JSON.parse(JSONString));
