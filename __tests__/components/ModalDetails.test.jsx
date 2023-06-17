import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react-native';
import ModalDetails from '../../src/components/ModalDetails';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
    FontAwesomeIcon: ''
}))

describe('Pruebas en el <ModalDetails />', () => {
    const dish = {
        "name": "Pepperoni Pizza",
        "id": 1,
        "image": "https://images.news18.com/ibnlive/uploads/2021/01/1610716314_untitled-design-2021-01-15t184025.049.jpg?im=FitAndFill,width=1200,height=1200",
        "servings": 8,
        "status": "trending",
        "ingredients": [
            {
                "name": "Pepperoni",
                "quantity": 1,
                "unit": "slice"
            }
        ]
    };

    test('Verificar que el componente se renderice correctamente', () => {
        render(<ModalDetails visible={true} setIsModalDetailOpen={() => {}} data={dish} />);
        expect(screen.getByTestId('modalDetails')).toBeTruthy();
    });

    test('Llamar "setIsModalDetailOpen" cuando el botón cerrar se presione', () => {
        const setIsModalDetailOpen = jest.fn();
    
        const { getByTestId } = render(
          <ModalDetails
            visible={true}
            setIsModalDetailOpen={setIsModalDetailOpen}
            data={dish}
          />
        );
    
        const closeButton = getByTestId('closeButton');
    
        fireEvent.press(closeButton);
    
        expect(setIsModalDetailOpen).toHaveBeenCalledTimes(1);
        expect(setIsModalDetailOpen).toHaveBeenCalledWith(false);
    });
});