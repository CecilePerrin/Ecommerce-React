import Stripe from 'stripe';

const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);

export default async function handler (req, res){
  if (req.method === "POST"){
   try{
      //Create Checkout Session
      const session = await stripe.checkout.sessions.create({
          submit_type:'pay',
          mode:'payment',
          payment_method_types: ["card"],
          payment_method_collection: {
            allowed_countries: ['CA', 'US', 'FR'],            
          },
         line_items:  req.body.map((item) =>{
            return {
              price_data: {
                currency: "Euro",
                product_data: {
                  name: item.title,
                  image:[item.image.data.attributes.formats.thumbnail.url],
                },
                unit_amout : item.price * 100,
              },
              quantity: item.quantity,
            };
        }),
        //Bring people to the success or failed page
        success_url:`${req.headers.origin}/success`, 
        cancel_url:`${req.headers.origin}/canceled`, 
      });

      res.status(200).json(session);
   } catch(error){
     res.status(error.statusCode || 500).json(err.message);
   }
  }
}