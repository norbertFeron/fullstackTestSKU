const { db } = require("../pgAdaptor");
const { GraphQLObjectType, GraphQLID, GraphQLList, GraphQLString } = require("graphql");
const { ProductType } = require("./types");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  type: "Query",
  fields: {
    productsLike: {
      type: new GraphQLList(ProductType),
      args: { filter: { type: GraphQLString } },
      resolve(parentValue, args) {
        const query = `SELECT * FROM products WHERE title LIKE $1`;
        const values = [args.filter + '%'];

        return db
          .any(query, values)
          .then(res => res)
          .catch(err => console.log(err));
      }
    },
    products: {
      type: new GraphQLList(ProductType),
      resolve(parentValue) {
        const query = `SELECT * FROM products`;

        return db
          .any(query)
          .then(res => res)
          .catch(err => console.log(err));
      }
   }
  }
});

exports.query = RootQuery;