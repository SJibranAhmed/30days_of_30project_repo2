"use client";
import React, { ChangeEvent, useState } from "react";
import { Textarea } from "./ui/textarea"; 
import { Button } from "./ui/button"; 
import { Card } from "./ui/card"; 
import { PredefinedHtml } from "./PredefinedHtml"; 

const HtmlPreviewer = () => {
  const [HtmlCode, setHtmlCode] = useState<string>("");
  const [previewHTML, setPreviewHTML] = useState<string>("");

  const handlePreview = (): void => {
    setPreviewHTML(HtmlCode);
  };

  const handlePasteHtml = (): void => {
    setHtmlCode(PredefinedHtml);
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setHtmlCode(e.target.value);
  };

  return (
        <main
          className={`h-screen m-0 p-0 flex items-center justify-center bg-slate-100`}
        >
      
      <Card className="text-center bg-white p-5 rounded-xl shadow-xl">
        <h1 className="text-3xl font-semibold">HTML Previewer</h1>
        <p className="text-[18px] text-slate-400 m-4">
          Enter your HTML code and see the preview.
        </p>

        <Textarea
          placeholder="Enter your HTML code here..."
          className="h-[200px] overflow-auto border-current rounded-xl py-5 sm:w-[600px]"
          onChange={handleChange}
          value={HtmlCode}
        />

        <div className="flex justify-center mt-5 gap-3">
          <Button onClick={handlePreview}>Generate Preview</Button>
          <Button onClick={handlePasteHtml}>Paste HTML</Button>
        </div>

        {previewHTML ? (
            <div className=" mt-4 text-left border-2 p-4 rounded-xl border-slate-400 sm:w-[600px]">
              <hr />
            <div dangerouslySetInnerHTML={{ __html: previewHTML }} />
          </div>
        ) : (
          ""
        )}
      </Card>
    </main>
  );
};

export default HtmlPreviewer;
