import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from './Button'
import '@testing-library/jest-dom'

describe('Componente Button de O\'Higgins UI', () => {
  test('Debe renderizar el texto correctamente', () => {
    render(<Button>Iniciar Sesión</Button>)
    const boton = screen.getByText(/Iniciar Sesión/i)
    expect(boton).toBeInTheDocument()
  })

  test('Debe ejecutar la función onClick cuando se hace clic', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click aquí</Button>)
    
    const boton = screen.getByText(/Click aquí/i)
    fireEvent.click(boton)
    
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})