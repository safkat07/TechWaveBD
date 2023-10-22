const express = require("express");
const cors = require("cors");
require('dotenv').config();

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const corsOptions ={
  origin:'*', 
  credentials:true,
  optionSuccessStatus:200,
}
const port = process.env.PORT || 5000;
//middleware

app.use(cors(corsOptions))
app.use(express.json());


//sending brands data to server
// ${process.env.DB_USER}:${process.env.DB_PASS}



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.oykwxyb.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);
// const uri =
//   "mongodb+srv://BrandShop:DeBwEkqluPKNVhZe@cluster0.oykwxyb.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

//saving brands data to mongodb server
const brandsCollection = client.db("insertDB").collection("foods");
// const productsCollection = client.db("insertDB").collection("products");





async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    //  client.connect();

    const productsCollection = client.db("insertDB").collection("products");
    const cartCollection = client.db("insertDB").collection("carts")
     //post products
     app.post('/cart', async (req, res) => {
      const cartProduct = req.body
      console.log(cartProduct);
      const result = await cartCollection.insertOne(cartProduct)
      res.send(result)
    })

  app.post('/product', async (req, res) => {
    const newProduct = req.body
    console.log(newProduct);
    const result = await productsCollection.insertOne(newProduct)
    res.send(result)
  })

 

  app.get('/product', async (req, res) => {
    const cursor = productsCollection.find()
    const result = await cursor.toArray()
    res.send(result)
  })
  app.get('/cart', async (req, res) => {
    const cursor = cartCollection.find()
    const result = await cursor.toArray()
    res.send(result)
  })
  app.delete('/cart/:id', async (req, res) => {
    const id = req.params.id
    const query = {_id: new ObjectId(id)}
    const result = await cartCollection.deleteOne(query)
    res.send(result)
  })

  app.get('/product/:id', async (req, res) =>{
    const id = req.params.id
    const query = {_id: new ObjectId(id)}
    const result = await productsCollection.findOne(query)
    res.send(result)
  })

    app.get("/foods", async (req, res) => {
      const cursor = brandsCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });
    app.get('/foods/:id', async (req, res) => {
  const id= req.params.id
  const query = {_id: new ObjectId(id)}
  const brand = await brandsCollection.findOne(query)
  res.send(brand);
})

app.put('/product/:id', async (req, res) =>{
  const id = req.params.id
  const filter = {_id: new ObjectId(id)}
  const options = {upsert: true} 
  const updatedProduct = req.body
  const product = {
    $set: {
       name: updatedProduct.name,
       productBrand: updatedProduct.productBrand,  
       ProductType: updatedProduct.ProductType, 
       price: updatedProduct.price, 
       description: updatedProduct.description, 
       rating: updatedProduct.rating, 
       photo: updatedProduct.photo
    }
  }
  const result = await productsCollection.updateOne(filter, product, options)
  res.send(result)
})

    // Send a ping to confirm a successful connection
    // client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!")
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("brand shop server issssss running");
});

// app.get('/brands/:id', async (req, res) => {
//   const id= req.params.id
//   const query = {_id: new ObjectId(id)}
//   const brand = await brandsCollection.findOne(query)
//   res.send(brand)

// })

// app.get('/products',  (req, res) => {
//   res.send('products coming soon')
// })



app.listen(port, () => {
  console.log(`brand shop server is listening on: ${port}`);
});
