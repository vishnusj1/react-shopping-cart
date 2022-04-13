import React from "react";
import { fireEvent, queryByTestId, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom'
import { CartItem } from "../routes/Cart";

describe('Tests for Cart Item',()=>{
  test('renders increment button',()=>{
    const item = {
      id:1,
      title:'foo',
      price:100,
      qty:1,
    }
    const itemTotal = item.qty * item.price;
    const incrementMock = jest.fn();
    const decrementMock = jest.fn();
    render(<CartItem id={item.id} title={item.title} qty={item.qty} itemTotal={itemTotal} increment={incrementMock} decrement = {decrementMock}/>)
    const incrementBtn = screen.getByText('+');
    expect(incrementBtn).toBeInTheDocument();
  })
  test('increment button fires increment handler',()=>{
    const item = {
      id:1,
      title:'foo',
      price:100,
      qty:1,
    }
    const itemTotal = item.qty * item.price;
    const incrementMock = jest.fn();
    const decrementMock = jest.fn();
    render(<CartItem id={item.id} title={item.title} qty={item.qty} itemTotal={itemTotal} increment={incrementMock} decrement = {decrementMock}/>)
    const incrementBtn = screen.getByText('+');
    userEvent.click(incrementBtn);
    expect(incrementMock).toHaveBeenCalledTimes(1);
  })
  test('decrement button fires decrement handler',()=>{
    const item = {
      id:1,
      title:'foo',
      price:100,
      qty:1,
    }
    const itemTotal = item.qty * item.price;
    const incrementMock = jest.fn();
    const decrementMock = jest.fn();
    render(<CartItem id={item.id} title={item.title} qty={item.qty} itemTotal={itemTotal} increment={incrementMock} decrement = {decrementMock}/>)
    const decrementBtn = screen.getByText('-');
    userEvent.click(decrementBtn);
    expect(decrementMock).toHaveBeenCalledTimes(1);
  })
})