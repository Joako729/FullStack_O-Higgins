import { render, screen, fireEvent } from '@testing-library/react';
import { GradeForm } from '../GradeForm';
import { AttendanceForm } from '../AttendanceForm';
import '@testing-library/jest-dom';

describe('Pruebas de Formularios Académicos', () => {
  
  describe('GradeForm (Notas)', () => {
    it('debe llamar a onSubmit con los datos de la nota correctos', () => {
      const mockSubmit = jest.fn();
      render(<GradeForm onSubmit={mockSubmit} />);

      fireEvent.change(screen.getByLabelText(/Asignatura/i), { target: { value: 'Fullstack III' } });
      fireEvent.change(screen.getByLabelText(/Estudiante/i), { target: { value: 'Joaquín Cáceres' } });
      fireEvent.change(screen.getByLabelText(/Calificación/i), { target: { value: '7.0' } });

      fireEvent.click(screen.getByText(/Guardar en Libro Digital/i));

      expect(mockSubmit).toHaveBeenCalledWith({
        materia: 'Fullstack III',
        estudiante: 'Joaquín Cáceres',
        nota: 7
      });
    });
  });

  describe('AttendanceForm (Asistencia)', () => {
    it('debe registrar la asistencia correctamente', () => {
      const mockSubmit = jest.fn();
      render(<AttendanceForm onSubmit={mockSubmit} />);

      fireEvent.change(screen.getByPlaceholderText(/Nombre del alumno/i), { target: { value: 'Marcelo Apablaza' } });
      fireEvent.change(screen.getByPlaceholderText(/Ej: Desarrollo Fullstack/i), { target: { value: 'Fullstack III' } });
      
      // Seleccionamos el radio button de Ausente
      fireEvent.click(screen.getByLabelText(/Ausente/i));

      fireEvent.click(screen.getByText(/Registrar en Libro de Clases/i));

      expect(mockSubmit).toHaveBeenCalledWith(expect.objectContaining({
        estudiante: 'Marcelo Apablaza',
        estado: 'Ausente'
      }));
    });
  });
});