const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/sdc')

const productsSchema = new mongoose.Schema({
  id: Number,
  campus: String,
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: String,
  created_at: String,
  updated_at: String
  // feature link here
});

const featuresSchema = new mongoose.Schema({
  id: Number,
  product_id: Number,
  feature: String,
  value: String
})

const Products = mongoose.model('products', productsSchema);
const Features = mongoose.model('features', featuresSchema);

module.exports  = {
  Products: Products,
  Features: Features
}