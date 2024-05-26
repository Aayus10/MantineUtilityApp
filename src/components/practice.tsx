import React from "react";
import { useState, useRef } from "react";
import "./practice.css";
import {
  Textarea,
  Flex,
  Blockquote,
  Button,
  useComputedColorScheme,
  Title,
} from "@mantine/core";
const Practice: React.FC = () => {
  const [text, setText] = useState<string>("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const computedcolorscheme = useComputedColorScheme();

  const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
    console.log(text);
  };
  const handleupClick = (): void => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handlelowerClick = (): void => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  const handleClear = () => {
    setText("");
  };

  const handleExtraSpace = () => {
    let temp = text.replace(/\s+/g, " ").trim();
    setText(temp);
  };

  const handlecopy = () => {
    if (textareaRef.current) {
      textareaRef.current.select();
      navigator.clipboard.writeText(textareaRef.current.value);
    }
  };

  return (
    <>
      <div style={{ marginLeft: "5%", width: "90%" }}>
        <Title style={{ marginLeft: "5%", marginTop: "22px" }} order={2}>
          TextUtils : The Simple Genius for Text Transformation! Make your words
          stand out, one tap at a time.
        </Title>
        <Textarea
          id="mybox"
          value={text}
          size="xl"
          ref={textareaRef}
          radius="md"
          placeholder="Enter text to analyze"
          style={{ marginTop: "5.5%" }}
          rows={6}
          onChange={handleOnChange}
        ></Textarea>
        <Flex
          style={{ marginTop: "2.5%" }}
          direction={{ base: "column", md: "row" }}
          gap={{ base: "sm", sm: "xs" }}
          justify={{ base: "start", sm: "space-between" }}
          wrap="wrap"
        >
          <Button onClick={handleupClick} className="button">
            Convert to uppercase
          </Button>
          <Button onClick={handlelowerClick} className="button">
            Convert to lowercase
          </Button>
          <Button onClick={handlecopy} className="button">
            Copy text
          </Button>
          <Button onClick={handleExtraSpace} className="button">
            Remove Extra Spaces
          </Button>
          <Button onClick={handleClear} className="button">
            Clear Text
          </Button>
        </Flex>
        <Blockquote
          style={{ marginTop: "2.5%" }}
          color="blue"
          iconSize={35}
          cite="Your Text Summary"
          mt="xl"
        >
          {text.trim() ? text.trim().split(/\s+/).length : 0} words and{" "}
          {text.length} characters.
          <br></br>
          <br></br>
          <strong>Preview:</strong>
          <br></br>
          {text === "" ? "Please enter your text" : text}
        </Blockquote>
      </div>
    </>
  );
};
export default Practice;
