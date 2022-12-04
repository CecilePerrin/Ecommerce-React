import {useQuery} from "urql";
import {GET_PRODUCT_QUERY} from "../../lib/query";
import {useRouter} from "next/router";
import { DetailsStyle,ProductInfo, Quantity, Buy } from "../../styles/productDetail";
import {AiFillPlusCircle, AiFillMinusCircle} from "react-icons/ai";
import { useStateContext } from "../../lib/context";

export default function ProductDetails() {
  //use state context
  const{qty, increaseQty, decreaseQty, onAdd} = useStateContext()

  //fetch Slug
  const {query} = useRouter()

  //fetch graphql data
  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug},
  });

  const { data, fetching, error } = results;
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;
  console.log(data);

  const {titre, description, image} = data.produits.data[0].attributes;
  console.log(data.produits.data[0].attributes)
  return (
    <DetailsStyle>
        <img src={image.data.attributes.formats.medium.url} alt={titre} />       
        <ProductInfo>
            <h3>{titre}</h3>
            <p>{description}</p>
            <Quantity>
              <span>Quantité</span>
              <button>
                <AiFillMinusCircle onClick={decreaseQty}/>
              </button>
              <p>{qty}</p>
              <button>
                <AiFillPlusCircle onClick={increaseQty}/>
              </button>
            </Quantity>
          <Buy onClick={()=> onAdd(data.produits.data[0].attributes, qty)}>Ajouter à votre panier</Buy>
        </ProductInfo>
    </DetailsStyle>
  )
}
