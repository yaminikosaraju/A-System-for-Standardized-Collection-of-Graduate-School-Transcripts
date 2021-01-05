import React from "react";
import {Button} from 'antd'
import {Form,Col, Container, Row} from 'react-bootstrap';

const DisplayIelts = () => {

<><Form.Group as={Col} sm = {2} controlId="formProgram" >
                    <Form.Label>IELTS Overall Score</Form.Label>
                    <Form.Control as="input"  className="mr-sm-2" id="inlineFormCustomSelect" value={this.state.val}
          onChange={e => this.setState({ val: e.target.value })}/>
                 </Form.Group>
                 <Form.Group as={Col} sm = {2} controlId="formProgram" >
                    <Form.Label>IELTS Writing Score</Form.Label>
                    <Form.Control as="input"  className="mr-sm-2" id="inlineFormCustomSelect" value={this.state.val}
          onChange={e => this.setState({ val: e.target.value })}/>
                 </Form.Group>
                 <Form.Group as={Col} sm = {2} controlId="formProgram" >
                    <Form.Label>IELTS Speaking Score</Form.Label>
                    <Form.Control as="input"  className="mr-sm-2" id="inlineFormCustomSelect" value={this.state.val}
          onChange={e => this.setState({ val: e.target.value })}/>
                 </Form.Group>
                 <Form.Group as={Col} sm = {2} controlId="formProgram" >
                    <Form.Label>IELTS Reading Score</Form.Label>
                    <Form.Control as="input"  className="mr-sm-2" id="inlineFormCustomSelect" value={this.state.val}
          onChange={e => this.setState({ val: e.target.value })}/>
                 </Form.Group>
                 <Form.Group as={Col} sm = {2} controlId="formProgram" >
                    <Form.Label>IELTS Listening Score</Form.Label>
                    <Form.Control as="input"  className="mr-sm-2" id="inlineFormCustomSelect" value={this.state.val}
          onChange={e => this.setState({ val: e.target.value })}/>
                 </Form.Group>
                    </> 
    
}

    export {DisplayIelts};