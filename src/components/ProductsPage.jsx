import { gql, useQuery } from "@apollo/client";
import { Page, Layout, Banner, Card } from "@shopify/polaris";
import { Loading } from "@shopify/app-bridge-react";
import { ProductsList } from "./ProductsList";

const GET_PRODUCTS_BY_ID = gql`
  query getProducts($ids,[ID!]!) {
    node(ids:$ids){
      ...on Product {
        title
        handle
        descriptionHtml
        id
        images(first:1){
          edges{
            node{
              id
              originalSrc
              altText
            }
          }
        }
        variants(first:1){
          edges{
            node{
              price
              id
            }
          }
        }
      }
    }
  }
`;

export function ProductsPage({ productIds }) {
  const { loading, error, data, refetch } = useQuery(GET_PRODUCTS_BY_ID, {
    variables: { ids: productIds },
  });
  if (loading) return <Loading />;

  if(error){
    console.warn(error);
    return(
      <Banner status="critical">ローディングしている商品に問題が発生しました。</Banner>
    )
  }

  return(
    <Page>
      <Layout>
        <Layout.Section>
          <Card>
            <ProductsList date={data} />
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
