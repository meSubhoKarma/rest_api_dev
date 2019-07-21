# rest_api_dev

rest_api_development_with_nodejs_express_mongodb

To test --
fetch("http://localhost:9000/posts").then(result => {
return result.json()
}).then(data => {
console.log(data)
});
