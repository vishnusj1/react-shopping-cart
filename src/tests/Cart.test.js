import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cart from "../routes/Cart";

describe("Cart Component", () => {
  it("does not render cart items when array is empty", () => {
    const cart = [];
    const addToCartMock = jest.fn();
    const removeFromCartMock = jest.fn();
    render(
      <Cart
        cart={cart}
        addToCart={addToCartMock}
        removeFromCart={removeFromCartMock}
      />
    );
    const text = screen.getByText(/no items in your cart/i);
    expect(text).toBeInTheDocument();
  });

  it("renders cart array", () => {
    const cart = [
      {
        id: 1,
        title: "foo",
        qty: 1,
        price: 100,
      },
      {
        id: 2,
        title: "bar",
        qty: 1,
        price: 100,
      },
    ];
    const addToCartMock = jest.fn();
    const removeFromCartMock = jest.fn();
    render(
      <Cart
        cart={cart}
        addToCart={addToCartMock}
        removeFromCart={removeFromCartMock}
      />
    );
    const cartItem = screen.getByText("bar");
    expect(cartItem).toBeInTheDocument()
  });
  it('renders subtotal when cart array is present',()=>{
    const cart = [
      {
        id: 1,
        title: "foo",
        qty: 1,
        price: 100,
      },
      {
        id: 2,
        title: "bar",
        qty: 2,
        price: 100,
      },
    ];
    const addToCartMock = jest.fn();
    const removeFromCartMock = jest.fn();
    render(
      <Cart
        cart={cart}
        addToCart={addToCartMock}
        removeFromCart={removeFromCartMock}
      />
    );
    const subTotal = screen.getByText(/300.00/);
    expect(subTotal).toBeInTheDocument()
  })
});
