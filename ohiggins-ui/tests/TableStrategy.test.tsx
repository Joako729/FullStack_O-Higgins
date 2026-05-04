import { render, screen } from '@testing-library/react';
import { ListStrategy, CardStrategy } from '../TableStrategy';
import '@testing-library/jest-dom';

const mockStudents = [{ id: 1, nombre: 'Joaquín Cáceres', estado: 'Presente' }];

describe('TableStrategy Patterns', () => {
  it('ListStrategy debe mostrar el nombre del estudiante', () => {
    render(<ListStrategy students={mockStudents} />);
    expect(screen.getByText('Joaquín Cáceres')).toBeInTheDocument();
  });

  it('CardStrategy debe mostrar el nombre del estudiante en formato tarjeta', () => {
    render(<CardStrategy students={mockStudents} />);
    expect(screen.getByText('Joaquín Cáceres')).toBeInTheDocument();
    expect(screen.getByText(/Estado actual:/i)).toBeInTheDocument();
  });
});