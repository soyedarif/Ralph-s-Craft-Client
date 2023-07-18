import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxios from "../../../../hooks/useAxios";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";

const CheckoutForm = ({ price, course }) => {
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxios();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionID, setTransactionID] = useState("");

  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { price }).then(res => {
      setClientSecret(res.data.clientSecret);
    });
  }, [price, axiosSecure]);

  const handleSubmit = async e => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error,  } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
      // console.log("payment method", paymentMethod);
    }
    setProcessing(true);
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: user?.displayName || "unknown",
          email: user?.email || "anonymous",
        },
      },
    });
    if (confirmError) {
      console.log(confirmError);
    }
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionID(paymentIntent.id);
      // save payment information to the server
      const payment = {
        email: user?.email,
        transactionID: paymentIntent.id,
        price,
        date: new Date(),
        course: course.course,
        classImg: course.classImg,
        instructor: course.instructor,
        courseID: course.courseId        ,
      };
      axiosSecure.post("/payments", payment).then(res => {
        if (res.data.insertResult.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Payment successful",
            timer: 2000,
            showConfirmButton: false,
          });
        }
      });
    }
  };
  return (
    <div className="w-2/3 mx-auto">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button className="btn bg-gradient-to-r mt-4 from-green-500 via-green-600 to-green-700 text-white btn-sm" type="submit" disabled={!stripe || !clientSecret || processing}>
          {processing ? <span className="loading loading-spinner"></span> : "Pay"}
        </button>
      </form>
      {cardError && <p className="text-[#DA4453]">{cardError}</p>}
      {transactionID && <p className="text-green-600">Transaction Completed with ID: {transactionID}</p>}
    </div>
  );
};

export default CheckoutForm;
