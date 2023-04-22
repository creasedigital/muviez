import React, { useState } from 'react';
import { Action, Button, AccordionItem } from './styles';

interface IAccordion {
  title: string;
  body: string;
}

const Accordion = ({ title, body }: IAccordion) => {
  const [show, setShow] = useState(false);

  const toggleContent = () => setShow(!show);

  return (
    <>
      <AccordionItem>
        <h3>{title}</h3>
        <Button onClick={toggleContent}>
          {!show ? <Action> &#43; </Action> : <Action>&#8722;</Action>}
        </Button>
      </AccordionItem>
      {show && <p>{body}</p>}
    </>
  );
};

export default Accordion;
