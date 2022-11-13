import {useQuery} from "urql";
import {GET_PRODUCT_QUERY} from "../../lib/query";
import {useRouter} from "next/router";
import { DetailsStyle,ProductInfo, Quantity, Buy } from "../../styles/productDetail";
import {AiFillPlusCircle, AiFillMinusCircle} from "react-icons/ai";


export default function ProductDetails() {

  const {query} = useRouter()

  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug},
  });
  const { data, fetching, error } = results;
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;
  console.log(data);

  const {titre, description, image} = data.produits.data[0].attributes;
  
  return (
    <DetailsStyle>
          <img src={image.data.attributes.formats.medium.url} alt={titre} />       
        <ProductInfo>
            <h3>{titre}</h3>
            <p>{description}</p>
            <Quantity>
              <span>Quantity</span>
              <button>
                <AiFillPlusCircle/>
              </button>
              <p>0</p>
              <button>
                <AiFillMinusCircle/>
              </button>
            </Quantity>
          <Buy>Ajouter à votre panier</Buy>
        </ProductInfo>
    </DetailsStyle>
  )
}
