export const PRODUCT_QUERY = `
query{
  produits{data{
    attributes{
      titre
      description
      price
      slug
      image{
        data{
          attributes{
            formats
          }
        }
      }
    }
   }
  }
}
`;	

export const GET_PRODUCT_QUERY =`
query getProducts($slug:String!){  
  produits(filters: {slug: {eq: $slug}}){
    data{
      attributes{
        titre
        slug
        description
        price
        image{
          data{
            attributes{
              formats
            }
          }
        }
      }
    }
  }
}`;

//ici on fait une query que l'on nomme getProduct que l'on définis avec le slug 
//dans lequel on appel les produits qu'on va filtrer