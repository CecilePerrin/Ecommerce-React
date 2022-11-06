import { ProductStyle } from "../styles/productStyle";

export default function Products({produits}){

  const {titre, image, price} = produits.attributes;

  return (
    <ProductStyle>
      <div>
        <div>
          <img src={image.data.attributes.formats.small.url} alt=""/>
        </div>
        <h2>{titre}</h2>
        <h3>{price}</h3>

      </div>
    </ProductStyle>
  );
}
