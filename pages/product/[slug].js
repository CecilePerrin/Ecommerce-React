import {useQuery} from "urql"
import {GET_PRODUCT_QUERY} from "../../lib/query"
import {useRouter} from "next/router"

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
  return (
    <div>
      <img src="" alt="" />
      <div>
        <h3>titre</h3>
        <p>description</p>
      </div>
      <div>
        <span>Quantity</span>
        <button>+</button>
        <p>0</p>
        <button>-</button>
      </div>
      <button>Ajouter à votre panier</button>
    </div>
  )
}
