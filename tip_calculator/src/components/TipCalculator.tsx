"use client";
import React, { ChangeEvent, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "../components/ui/input";
import { Button } from "./ui/button";

const TipCalculator = () => {
  const [bill, setBill] = useState<string>(""); // Handling as string initially
  const [tipPercent, setTipPercent] = useState<string>("");
  const [tipAmount, setTipAmount] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [buttonText, setButtonText] = useState<string>("Calculate");

  // Handlers for input changes
  const handleBill = (e: ChangeEvent<HTMLInputElement>): void => {
    setBill(e.target.value);
  };

  const handleTip = (e: ChangeEvent<HTMLInputElement>): void => {
    setTipPercent(e.target.value);
  };

  // Calculation logic
  const calculateTip = (): void => {
    const numericBill = parseFloat(bill);
    const numericTipPercent = parseFloat(tipPercent);

    // Validation check
    if (
      isNaN(numericBill) ||
      isNaN(numericTipPercent) ||
      numericBill <= 0 ||
      numericTipPercent < 0
    ) {
      setButtonText("Calculate");
      return;
    }
    const calculatedTip = (numericTipPercent / 100) * numericBill;
    setTipAmount(calculatedTip);
    setTotal(numericBill + calculatedTip);
    setButtonText("See result");
  };

  // Reset button text if inputs are invalid or cleared
  const resetButtonText = (): void => {
    if (bill === "" || tipPercent === "") {
      setButtonText("Calculate");
    }
  };

  return (
    <div className="Container bg-slate-100 flex justify-center items-center h-screen">
      <Card className="mx-6 bg-white px-2 py-3 rounded-2xl shadow-xl">
        <CardHeader>
          <CardTitle className="tracking-wide">Tip Calculator</CardTitle>
          <CardDescription className="text-slate-500 text-[16px] leading-5">
            Enter the bill amount and tip percentage to calculate the tip and
            total.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h1 className="font-semibold">Bill Amount</h1>
          <Input
            type="number"
            className="rounded-xl text-slate-400 font-medium border-slate-300 p-0 px-3 mt-1 mb-4"
            placeholder="Enter bill amount"
            value={bill}
            onChange={(e) => {
              handleBill(e);
              resetButtonText();
            }}
          />
          <h1 className="font-semibold">Tip Percentage</h1>
          <Input
            type="number"
            className="rounded-xl text-slate-400 font-medium border-slate-300 p-0 px-3 mt-2"
            placeholder="Enter tip in percentage (%)"
            value={tipPercent}
            onChange={(e) => {
              handleTip(e);
              resetButtonText();
            }}
          />
          <Button
            className="bg-slate-900 text-white mt-5 rounded-2xl p-0 px-5"
            onClick={calculateTip}
          >
            {buttonText}
          </Button>
        </CardContent>
        <CardFooter className="flex flex-col">
          <div className="w-full flex justify-between text-slate-900 text-xl">
            <h3>Tip Amount: </h3>
            <p className="font-bold">{`$${tipAmount.toFixed(2)}`}</p>
          </div>
          <div className="w-full mt-3 flex justify-between text-slate-900 text-xl">
            <h3>Total Amount: </h3>
            <p className="font-bold">{`$${total.toFixed(2)}`}</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default TipCalculator;
