import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2025-02-24.acacia",
});

export default stripe;
