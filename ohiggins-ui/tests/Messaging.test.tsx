import { render, screen } from '@testing-library/react';
import { MessageCard } from '../Messaging';
import '@testing-library/jest-dom';

describe('Componente Messaging (Portal de Comunicaciones)', () => {
  it('debe renderizar correctamente los datos del mensaje', () => {
    const mockData = {
      sender: 'Director Académico',
      subject: 'Cambio de horario',
      preview: 'Se informa que la clase ha sido reprogramada.'
    };

    render(
      <MessageCard 
        sender={mockData.sender} 
        subject={mockData.subject} 
        preview={mockData.preview} 
      />
    );
    
    expect(screen.getByText(mockData.sender)).toBeInTheDocument();
    expect(screen.getByText(mockData.subject)).toBeInTheDocument();
    expect(screen.getByText(mockData.preview)).toBeInTheDocument();
  });

  it('debe contener iconos decorativos de Lucide', () => {
    const { container } = render(
      <MessageCard sender="Test" subject="Test" preview="Test" />
    );
    
    // Buscamos cualquier elemento SVG (que es lo que renderiza Lucide)
    const icons = container.querySelectorAll('svg');
    expect(icons.length).toBeGreaterThan(0);
  });
});