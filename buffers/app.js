const buf = new Buffer('hello', 'utf8');
console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());

buf.write('wo');
console.log(buf.toString());