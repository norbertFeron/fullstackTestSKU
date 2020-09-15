require('dotenv').config()
const db = require("./pgAdaptor").db;
var http = require('https');

// todo Fetch all product data
function insertProduct(product) {
  const query = `INSERT INTO products(
    shopify_id,
    title,
    body_html,
    vendor,
    product_type,
    created_at,
    handle,
    updated_at,
    published_at,
    template_suffix,
    tags,
    admin_graphql_api_id,
    image_src,
    stock,
    price
  ) VALUES (
      $1,
      $2,
      $3,
      $4,
      $5,
      $6,
      $7,
      $8,
      $9,
      $10,
      $11,
      $12,
      $13,
      $14,
      $15
  ) RETURNING title`;
  const values = [
  product.shopify_id,
  product.title,
  product.body_html,
  product.vendor,
  product.product_type,
  product.created_at,
  product.handle,
  product.updated_at,
  product.published_at,
  product.template_suffix,
  product.tags,
  product.admin_graphql_api_id,
  product.image.src,
  product.variants[0].inventory_quantity,
  product.variants[0].price
  ];

  return db
  .one(query, values)
  .then(res => console.log(res))
  .catch(err => console.log(err));
}

const options = new URL('https://' + process.env.API_KEY + ':' + process.env.API_PASSWORD + '@skutopia-4pl.myshopify.com/admin/api/2020-07/products.json');
callback = function(response) {
  var str = '';

  //another chunk of data has been received, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been received, so we just print it out here
  response.on('end', function (d) {
    const products = JSON.parse(str).products;
    products.forEach(p => insertProduct(p))
  });
}

http.request(options, callback).end();