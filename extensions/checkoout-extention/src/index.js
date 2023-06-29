// @ts-check

/**
 * @typedef {import("../generated/api").InputQuery} InputQuery
 * @typedef {import("../generated/api").FunctionResult} FunctionResult
 */

export default /**
 * @param {InputQuery} input
 * @returns {FunctionResult}
 */
  (input) => {

    const error = {
      localizedMessage: "simple error",
      target: "cart"
    }
    const orderSubtotal = parseFloat(input.cart.cost.subtotalAmount.amount);
    const errors = [];
    if (orderSubtotal > 20.0) {
      if (input.cart.buyerIdentity && input.cart.buyerIdentity.customer) {
        if (input.cart.buyerIdentity.customer.numberOfOrders < 5) {
          errors.push(error)
        }
      } else {
        errors.push(error)
      }
    }

    return {
      errors
    }
  };