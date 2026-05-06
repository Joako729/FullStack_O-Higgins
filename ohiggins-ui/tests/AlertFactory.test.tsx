import { render, screen } from '@testing-library/react';
import { AlertFactory } from '../AlertFactory';
import '@testing-library/jest-dom';

describe('AlertFactory Component', () => {
  it('debe renderizar correctamente una alerta de asistencia', () => {
    render(<AlertFactory type="asistencia" text="Alumno presente" />);
    expect(screen.getByText(/Asistencia/i)).toBeInTheDocument();
    expect(screen.getByText(/Alumno presente/i)).toBeInTheDocument();
  });

  it('debe renderizar correctamente una anotación de hoja de vida', () => {
    render(<AlertFactory type="anotacion" text="Falta de respeto" />);
    expect(screen.getByText(/Hoja de Vida/i)).toBeInTheDocument();
    expect(screen.getByText(/Falta de respeto/i)).toBeInTheDocument();
  });
});