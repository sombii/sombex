import React from "react";
import styled from "styled-components";
import {Helmet} from "react-helmet";
import {motion} from "framer-motion";

const Contact = () => {

    const submitHandler = e => {
        e.preventDefault();
    }

    return (
        <Container
            animate={{opacity: 1, scale: 1}}
            initial={{opacity: 0, scale: 0.9}}
            transition={{duration: 0.5}}
            exit={{x: "-50vw", opacity: 0, transition: "easeInOut"}}
        >
            <Helmet>
                <title>Contact Us</title>
                <link rel="canonical" href="https://www.sombex.com/contact"/>
            </Helmet>
            <TypeContainer>
                <H3>Hit us with any kinds of query or suggestions using the form.</H3>
                <p>Alternatively you can send us email directly at below addresses.</p>
                <Email href="mailto:">void@sombex.com</Email>
                <Email href="mailto:">sanjog@sombex.com</Email>
            </TypeContainer>
            <FormContainer>
                <H1>Let's Talk.</H1>
                <form onSubmit={submitHandler}>
                    <Label for="_name">Name</Label>
                    <Input type="text" id="_name" required/>
                    <Label for="_email">Email</Label>
                    <Input type="email" id="_email" required/>
                    <Label for="_message">Message</Label>
                    <Textarea id="_message" rows='3' required placeholder="Sending message is currently disabled."/>
                    <Button type="submit">SEND</Button>
                </form>
            </FormContainer>
        </Container>
    )
}

const Container = styled(motion.div)`
  max-width: 900px;
  padding: 2rem 4rem;
  border: 1px solid #707070;
  margin: auto;
  width: 100%;
  //height: 100%;
  display: flex;

  @media (max-width: 700px) {
    flex-direction: column-reverse;
    margin-top: 2rem;

    
    & div {
      width: 100%;
      border: none;
      padding: 0;
    }
  }
`

const TypeContainer = styled('div')`
  padding-right: 2rem;
  border-right: 1px solid #707070;
  width: 50%;
`

const H1 = styled('h1')`
  color: white;
  margin-top: 0;
  font-size: 2rem;
`

const H3 = styled('h3')`
  margin-top: 0;
  font-size: 1.6rem;
  line-height: 1.6rem;
`

const Email = styled('a')`
  font-weight: bold;
  display: block;
`

const FormContainer = styled('div')`
  padding-left: 2rem;
  width: 50%;
  @media (max-width: 700px) {
    margin-bottom: 2rem;
  }
`

const Label = styled('label')`
  display: block;
  width: 100%;
  margin-bottom: 0.3rem;
`

const Textarea = styled('textarea')`
  width: 100%;
  background-color: transparent;
  outline: none;
  border: none;
  border-bottom: 2px solid #b8bbb6;
  color: white;
  margin-bottom: 1rem;
  display: block;
`

const Input = styled('input')`
  margin-bottom: 1.5rem;
  background-color: transparent;
  outline: none;
  border: none;
  border-bottom: 2px solid #b8bbb6;
  color: white;
  width: 100%;
`

const Button = styled('button')`
  background-color: #5ca08e;
  color: #2d3331;
  outline: none;
  border: none;
  padding: 0.5rem 1rem;
  letter-spacing: 2px;
  font-weight: bold;
  cursor: pointer;
`

export default Contact;