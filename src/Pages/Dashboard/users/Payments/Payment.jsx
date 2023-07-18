import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";


//todo provide publishable key
const stripePromise=loadStripe(import.meta.env.VITE_STRIPE_PK)
const Payment = () => {
  const location = useLocation();
  const course = location?.state || {};
  const price=course?.price;

  return (
    <div>
      <h2>kire dada</h2>
      <Elements stripe={stripePromise}>
      <CheckoutForm course={course} price={price}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
