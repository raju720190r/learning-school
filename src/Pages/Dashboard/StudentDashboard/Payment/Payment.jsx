import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import useTitle from "../../../../hooks/useTitle";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT);

const Payment = ({price,card}) => {
  useTitle("Payment")
  return (
    <div className="w-full">
      <Elements stripe={stripePromise}>
        <CheckoutForm price={Math.ceil(price)} cart={card}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
