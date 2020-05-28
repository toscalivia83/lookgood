const VError = require("verror");
const Product = require("../models/product.js");

module.exports = function(app) {
  app.get("/api-test/products", (req, res, next) => {
    console.log("IMHERE");
    
    // return Product.find().limit(10)
    // .then(results => {
    //   console.log("HELLOOOOOO");
    //   results = [{
    //     "_id": "1",
    //     "name": "Cantu Deep treatment masque",
    //     "description": "penetrates deep into the hair shaft for an intense treatment to repair and replenish over-processed, damaged hair.",
    //     "ingredients": "Water, Canola Oil, Cetearyl Alcohol/Ceteareth-20, Glycerin, Fragrance, Beeswax, Cetyl Alcohol, Butyrospermum Parkii (Shea) Butter, Glycol Stearate, Polyquaternium-10, Cocos Nucifera (Coconut) Oil, Persea Gratissma (Avocado) Oil, Prunus Amygdalus Dulcis (Sweet Almond) Oil, Simmondsia Chinensis (Jojoba) Oil, Olea Europaea (Olive) Fruit Oil, Mangifera Indica (Mango) Seed Butter, Melia Azadirachta (Neem) Seed Oil, Daucus Carota Sativa (Carrot) Seed Oil, Macadamia Ternifolia (Macadamia) Seed Oil, Glycine Soja (Soybean) Oil, Argania Spinosa (Argan) Kernel Oil, Aloe Barbadensis (Aloe Vera) Leaf Juice, Lonicera Japonica (Honeysuckle) Flower Extract, Laminara Cloustoni (Sea Kelp) Extract, Salvia Officinalis (Sage) Leaf Extract, Vitis Vinifera (Grape) Seed Extract, Melia Azadirachta (Neem) Seed Oil, Silk Amino Acids, Phenoxyethanol, Ethylhexylglycerin.",
    //     "quality": "excellent"
    //   },{
    //     "_id": "2",
    //     "name": "Shea Moisture Coconut & Hibiscus Curl Enhancing Smoothie 326ml",
    //     "description": "Treat thick, curly hair to Shea Moistures Coconut \& Hibiscus Curl Enhancing Smoothie; a luxurious formula that utilises natural and certified organic ingredients for multiple benefits.",
    //     "ingredients": "Water, Glycerin (Vegetable) , Butyrospermum Parkii (Shea) Butter***, Cetrimonium Chloride, Cetearyl Alcohol, Glyceryl Stearate Citrate, Cocos Nucifera (Coconut) Oil, Cetyl Alcohol, Fragrance (Parfum), Glyceryl Caprylate, Macadamia Ternifolia Seed Oil, Sodium Lauroyl Hydrolyzed Silk, Mangifera Indica (Mango) Seed Butter, Panthenol, Melia Azadirachta Seed Oil, Daucus Carota Sativa (Carrot) Seed Oil, Tocopherol, Aloe Barbadensis Leaf Juice, Glyceryl Undecylenate, Potassium Hydroxide, Citric Acid, Benzyl Benzoate.",
    //     "quality": "verygood"
    //   }];
      // console.log("HELLOOOOOO");
        
      // res.json({ products: results });
    res.send("ok");
    // })
    // .catch(err => next(new VError("Cant get products", err)));
  })
};