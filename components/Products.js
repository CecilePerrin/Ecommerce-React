import { ProductStyle } from "../styles/productStyle";
import Link from 'next/link';

export default function Products({produits}){

  const {titre, image, price, slug} = produits.attributes;

  return (
    <ProductStyle>     
      <Link href={`/product/${slug}`}>
        <div>
          <img src={image.data.attributes.formats.small.url} alt=""/>
        </div>
      </Link>
        <h2>{titre}</h2>
        <h3>{price}</h3>
    </ProductStyle>
  );
}
