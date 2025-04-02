import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Calculator App", () => {
  test("renders calculator components", () => {
    render(<App />);
    expect(screen.getByText()).toBeInTheDocument();
  });

  test("displays number when clicked", () => {
    render(<App />);
    const button = screen.getByText("1");
    fireEvent.click(button);
    expect(screen.getByTestId("display")).toHaveTextContent("1");
  });

  test("appends multiple numbers", () => {
    render(<App />);
    const btn1 = screen.getByText("1");
    const btn2 = screen.getByText("2");
    fireEvent.click(btn1);
    fireEvent.click(btn2);
    expect(screen.getByTestId("display")).toHaveTextContent("12");
  });

  test("adds operator correctly", () => {
    render(<App />);
    const btn1 = screen.getByText("3");
    const plus = screen.getByText("+");
    fireEvent.click(btn1);
    fireEvent.click(plus);
    expect(screen.getByTestId("display")).toHaveTextContent("3 + ");
  });

  test("does not allow operator as first input", () => {
    render(<App />);
    const plus = screen.getByText("+");
    fireEvent.click(plus);
    expect(screen.getByTestId("display")).toHaveTextContent("");
  });

  test("calculates simple addition correctly", () => {
    render(<App />);
    fireEvent.click(screen.getByText("4"));
    fireEvent.click(screen.getByText("+"));
    fireEvent.click(screen.getByText("5"));
    fireEvent.click(screen.getByText("="));
    expect(screen.getByTestId("result")).toHaveTextContent("9");
  });

  test("calculates simple subtraction correctly", () => {
    render(<App />);
    fireEvent.click(screen.getByText("8"));
    fireEvent.click(screen.getByText("-"));
    fireEvent.click(screen.getByText("3"));
    fireEvent.click(screen.getByText("="));
    expect(screen.getByTestId("result")).toHaveTextContent("5");
  });

  test("calculates simple multiplication correctly", () => {
    render(<App />);
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(screen.getByText("*"));
    fireEvent.click(screen.getByText("3"));
    fireEvent.click(screen.getByText("="));
    expect(screen.getByTestId("result")).toHaveTextContent("6");
  });

  test("calculates simple division correctly", () => {
    render(<App />);
    fireEvent.click(screen.getByText("8"));
    fireEvent.click(screen.getByText("/"));
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(screen.getByText("="));
    expect(screen.getByTestId("result")).toHaveTextContent("4");
  });

  test("clears display and result when Clear button is clicked", () => {
    render(<App />);
    fireEvent.click(screen.getByText("7"));
    fireEvent.click(screen.getByText("Clear"));
    expect(screen.getByTestId("display")).toHaveTextContent("");
    expect(screen.getByTestId("result")).toHaveTextContent("");
  });

  test("backspace removes last character", () => {
    render(<App />);
    fireEvent.click(screen.getByText("9"));
    fireEvent.click(screen.getByText("8"));
    fireEvent.click(screen.getByText("Back"));
    expect(screen.getByTestId("display")).toHaveTextContent("9");
  });
});
