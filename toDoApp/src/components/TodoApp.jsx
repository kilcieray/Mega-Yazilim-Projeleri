import React, { useState } from 'react';
import { Button, Form, ListGroup, Alert, Container, Row, Col } from 'react-bootstrap';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const handleAddTodo = (event) => {
    event.preventDefault();
    if (input.trim() === '') {
      setShowAlert(true);
    } else {
      setShowAlert(false);
      if (editIndex !== null) {
        const newTodos = [...todos];
        newTodos[editIndex].text = input;
        setTodos(newTodos);
        setEditIndex(null);
      } else {
        setTodos([...todos, { text: input, completed: false }]);
      }
      setInput('');
    }
  };

  const handleEditTodo = index => {
    setInput(todos[index].text);
    setEditIndex(index);
  };

  const handleToggleComplete = index => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleDeleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <Container>
      <Form onSubmit={handleAddTodo}>
        <Form.Group>
          <Form.Control type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="Yeni todo ekle" />
          <Button type="submit">{editIndex !== null ? 'Güncelle' : 'Ekle'}</Button>
        </Form.Group>
      </Form>
      {showAlert && <Alert variant="warning">Lütfen bir değer giriniz!</Alert>}
      <ListGroup>
        {todos.map((todo, index) => (
          <ListGroup.Item key={index} style={{ backgroundColor: todo.completed ? 'lightgreen' : 'white' }}>
            <Container>
              <Row>
                <Col xs={8}>
                  <span>{todo.text}</span>
                </Col>
                <Col xs={4}>
                  <Button variant={todo.completed ? "success" : "primary"} onClick={() => handleToggleComplete(index)}>{todo.completed ? "Tamamlandı" : "Tamamla"}</Button>
                  <Button variant="primary" onClick={() => handleEditTodo(index)}>Düzenle</Button>
                  <Button variant="danger" onClick={() => handleDeleteTodo(index)}>Sil</Button>
                </Col>
              </Row>
            </Container>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default TodoApp;
