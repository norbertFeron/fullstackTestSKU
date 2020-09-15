CREATE TABLE products(
	ID serial PRIMARY KEY,
    shopify_id BIGINT,
    title VARCHAR(255),
    body_html TEXT,
    vendor VARCHAR(255),
    product_type VARCHAR(255),
    created_at DATE,
    handle VARCHAR(255),
    updated_at DATE,
    published_at DATE,
    template_suffix VARCHAR(255),
    published_scope VARCHAR(255),
    tags VARCHAR(255),
    admin_graphql_api_id VARCHAR(255),
    image_src VARCHAR(255),
    stock SMALLINT,
    price FLOAT
);