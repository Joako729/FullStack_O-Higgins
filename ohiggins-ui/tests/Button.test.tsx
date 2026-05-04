import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../Button'; // Importación con llaves corregida
import '@testing-library/jest-dom';

describe('Componente Button de O\'Higgins UI', () => {
  test('Debe renderizar el texto correctamente', () => {
    render(<Button>Iniciar Sesión</Button>);
    expect(screen.getByText(/Iniciar Sesión/i)).toBeInTheDocument();
  });

  test('Debe ejecutar la función onClick cuando se hace clic', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click aquí</Button>);
    fireEvent.click(screen.getByText(/Click aquí/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});