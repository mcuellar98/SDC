const {MongoClient} = require('mongodb');
const axios = require('axios');


describe('fields', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect('mongodb://127.0.0.1:27017/sdc', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db('sdc');
  });

  afterAll(async () => {
    await connection.close();
  });

  it('products table should have all expected values', async () => {
    const products = db.collection('products');
    const fields = ['id','campus','name','slogan','description','category','default_price','created_at','updated_at']
    const data = await products.findOne({id:1});
    fields.forEach((field) => {
      expect(data).toHaveProperty(field);
    })
  });

  it('features table should have all expected values', async () => {
    const features = db.collection('features');
    const fields = ['id', 'product_id', 'feature', 'value']
    const data = await features.findOne({id:1});
    fields.forEach((field) => {
      expect(data).toHaveProperty(field);
    })
  });

  it('photos table should have all expected values', async () => {
    const photos = db.collection('photos');
    const fields = ['id', 'styleId', 'url', 'thumbnail_url']
    const data = await photos.findOne({id:1});
    fields.forEach((field) => {
      expect(data).toHaveProperty(field);
    })
  });

  it('photos table should have all expected values', async () => {
    const photos = db.collection('photos');
    const fields = ['id', 'styleId', 'url', 'thumbnail_url']
    const data = await photos.findOne({id:1});
    fields.forEach((field) => {
      expect(data).toHaveProperty(field);
    })
  });

  it('skus table should have all expected values', async () => {
    const skus = db.collection('skus');
    const fields = ['id', 'styleId', 'size', 'quantity']
    const data = await skus.findOne({id:1});
    fields.forEach((field) => {
      expect(data).toHaveProperty(field);
    })
  });

  it('styles table should have all expected values', async () => {
    const styles = db.collection('styles');
    const fields = ['id', 'productId', 'name', 'sale_price', 'original_price', 'default_style']
    const data = await styles.findOne({id:1});
    fields.forEach((field) => {
      expect(data).toHaveProperty(field);
    })
  });
});

describe('api query', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect('mongodb://127.0.0.1:27017/sdc', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db('sdc');
  });

  afterAll(async () => {
    await connection.close();
  });

  it('products by id api call should return same as heroku api', async () => {
    await axios.get('http://localhost:3000/api/images')
      .then((results) => {
        console.log(results.data);
      })
  });

});