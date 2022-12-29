import { loadStripe } from "@stripe/stripe-js"

//load up an instance of stripe to get our account.
let stripe;

const getStripe = async () => {
  if (!stripe){
    stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }
  return stripe;
};

export default getStripe;