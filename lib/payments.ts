
import { supabase } from "./supabase";

export async function createBookPayment(
  bookId: string,
  msisdn: string
) {
  const { data, error } = await supabase.functions.invoke(
    "pulse-create-payment",
    {
      body: {
        book_id: bookId,
        msisdn
      }
    }
  );

  if (error) throw error;

  if (!data?.checkout_token || !data?.purchase_id) {
    throw new Error(
      data?.message || "Unable to start payment."
    );
  }

  return data;
}

export async function confirmOmariPayment(
  purchaseId: string,
  checkoutToken: string,
  otp: string
) {
  const { data, error } = await supabase.functions.invoke(
    "pulse-confirm-omari-otp",
    {
      body: {
        purchase_id: purchaseId,
        checkout_token: checkoutToken,
        otp
      }
    }
  );

  if (error) throw error;

  return data;
}
