const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString } = graphql;

const ProductType = new GraphQLObjectType({
  name: "Product",
  type: "Query",
  fields: {
    id: { type: GraphQLString },
    shopify_id: { type: GraphQLString },
    title: { type: GraphQLString },
    body_html: { type: GraphQLString },
    vendor: { type: GraphQLString },
    product_type: { type: GraphQLString },
    created_at: { type: GraphQLString },
    handle: { type: GraphQLString },
    updated_at: { type: GraphQLString },
    published_at: { type: GraphQLString },
    template_suffix: { type: GraphQLString },
    published_scope: { type: GraphQLString },
    tags: { type: GraphQLString },
    admin_graphql_api_id: { type: GraphQLString },
    image_src: { type: GraphQLString },
    stock: { type: graphql.GraphQLInt },
    price: { type: graphql.GraphQLFloat }
  }
});

exports.ProductType = ProductType;