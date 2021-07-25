import React, { useState } from 'react';
import { Form, Row, Col, Button, InputGroup } from 'react-bootstrap'

export default function FormExample() {
    const [validated, setValidated] = useState(false);
    const [usuario, setUsuario] = useState()
  
    const handleUserSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        console.log('Erro')
      }
      event.preventDefault()
      event.stopPropagation()
      console.log('Usuário cadastrado!')

      setValidated(true);
    };

    const handleProductSubmit = (event) => {
        event.preventDefault()
        event.stopPropagation()
        console.log('Produto cadastrado!')      
    };
  
    return (
        <>
        <Form noValidate validated={validated} onSubmit={handleUserSubmit} className="log-div">
            <h2>Cadastro de Clientes</h2>
            <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="Ex.: 'João'"
                />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Sobrenome</Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="Ex.: 'Silva'"
                />
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustomUsername">
                <Form.Label>ID do cliente</Form.Label>
                <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                    type="text"
                    placeholder="Ex.: '1'"
                    aria-describedby="inputGroupPrepend"
                    required
                />
                <Form.Control.Feedback type="invalid">
                    Por favor escolha um ID válido.
                </Form.Control.Feedback>
                </InputGroup>
            </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label>Cidade</Form.Label>
                <Form.Control type="text" placeholder="Ex.: 'Limeira'" required />
                <Form.Control.Feedback type="invalid">
                Por favor informe uma Cidade válida.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom04">
                <Form.Label>Estado</Form.Label>
                <Form.Control type="text" placeholder="Ex.: 'São Paulo'" required />
                <Form.Control.Feedback type="invalid">
                    Por favor informe um Estado válido.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom05">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="text" placeholder="Ex.: 'joao@silva.com'" required />
                <Form.Control.Feedback type="invalid">
                Por favor, informe um e-mail válido.
                </Form.Control.Feedback>
            </Form.Group>
            </Row>
            <Form.Group className="mb-3">
            <Form.Check
                required
                label="Li e aceito os Termos de uso e Políticas de Privacidade"
                feedback="Você precisa concordar antes de se cadastrar."
            />
            </Form.Group>
            <Button type="submit">Cadastrar Usuário</Button>
        </Form>
        <hr />
        <Form noValidate validated={validated} onSubmit={handleProductSubmit} className="log-div">
            <h2>Cadastro de Produtos</h2>
            <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>Nome do Produto</Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="Ex.: Bloco de Post-it Verde"
                />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                <Form.Label>Valor unitário</Form.Label>
                <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">R$</InputGroup.Text>
                <Form.Control
                    type="text"
                    placeholder="Ex.: R$ 4,99"
                    aria-describedby="inputGroupPrepend"
                    required
                />
                <Form.Control.Feedback type="invalid">
                    Por favor insira um valor.
                </Form.Control.Feedback>
                </InputGroup>
            </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>ID do Produto</Form.Label>
                <Form.Control type="text" placeholder="Ex.: '123'" required />
                <Form.Control.Feedback type="invalid">
                Por favor informe um ID válido.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom04">
                <Form.Label>Fornecedor</Form.Label>
                <Form.Control type="text" placeholder="Ex.: 'RibaCercas'" required />
                <Form.Control.Feedback type="invalid">
                    Por favor informe um fornecedor.
                </Form.Control.Feedback>
            </Form.Group>
            </Row>
            <Button type="submit">Cadastrar Produto</Button>
        </Form>
        </>
    );
  }
