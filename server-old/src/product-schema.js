import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLFloat,
  GraphQLNonNull
} from 'graphql';

// In memory data store
const ProductStore = require('./product-database.json');
console.log(ProductStore);

const OtherData = new GraphQLObjectType({
  name: 'OtherData',
  fields: () => ({
    name: {type: GraphQLString},
    offerType: {type: GraphQLString},
    brand: {type: GraphQLString},
    businessUnit: {type: GraphQLString},
    priority: {type: GraphQLInt},
    totalReviews: {type: GraphQLString},
    totalReviewsRate: {type: GraphQLString},
  })
});
// Root level queries
const ProductType = new GraphQLObjectType({
  name: 'Product',
  fields: () => ({
    familyId: {type: GraphQLString},
    familyName: {type: GraphQLString},
    categories: {type: GraphQLString},
    categoryName: {type: GraphQLString},
    offerType: {type: GraphQLString},
    offerSubType: {type: GraphQLString},
    offerLevel: {type: GraphQLString},
    productType: {type: GraphQLString},
    productSubType: {type: GraphQLString},
    url: {type: GraphQLString},
    productName: {type: GraphQLString},
    productManufacturer: {type: GraphQLString},
    description: {type: GraphQLString},
    longDescription: {type: GraphQLString},
    priority: {type: GraphQLString},
    operatingSystem: {type: GraphQLString},
    screenSizes: {type: GraphQLString},
    conditions: {type: GraphQLString},
    internalMemorySizes: {type: GraphQLString},
    features: {type: GraphQLString},
    tacCodes: {type: GraphQLString},
    bestSeller: {type: GraphQLString},
    isFeatured: {type: GraphQLString},
    rating: {type: GraphQLString},
    reviewCount: {type: GraphQLString},
    pageViews: {type: GraphQLString},
    otherData: {type: OtherData}
  })
});

const ProductQuery = new GraphQLObjectType({
  name: 'ProductQuery',
  fields: {
    product: {
      type: ProductType,
      // `args` describes the arguments that the `product` query accepts
      args: {
        id: { type: GraphQLString }
      },
      // The resolve function describes how to "resolve" or fulfill
      // the incoming query.
      // In this case we use the `id` argument from above as a key
      // to get the Product from `data`
      resolve: function (_, args) {
        return ProductStore[args.id];
      }
    }
  }
});

// Mutations @TODO
const ProductMutations = new GraphQLObjectType({
  name: 'ProductMutations',
  fields: () => ({
    addProduct: {
      type: GraphQLString,
      description: 'Add a new product',
      args: {
        item: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve(parent, {item}) {
        if (ProductStore.length >= 10) {
          // Remove the third time by keeping the first two
          ProductStore.splice(2, 1);
        }

        ProductStore.push(item);
        return item;
      }
    }
  })
});

// Schema
export const ProductSchema = new GraphQLSchema({
  name: 'ProductSchema',
  query: ProductQuery,
  mutation: ProductMutations
});
