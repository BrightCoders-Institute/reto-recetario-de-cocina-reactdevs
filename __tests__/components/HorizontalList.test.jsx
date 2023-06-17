import React from 'react';
import { render, screen } from '@testing-library/react-native';
import HorizontalList from '../../src/components/HorizontalList';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
    FontAwesomeIcon: ''
}))

describe('Pruebas en el <HorizontalList />', () => {

    const dish = [{
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
            },
            {
                "name": "Mozzarella",
                "quantity": 1,
                "unit": "cup"
            },
            {
                "name": "Tomato Sauce",
                "quantity": 1,
                "unit": "cup"
            },
            {
                "name": "Dough",
                "quantity": 1,
                "unit": "cup"
            },
            {
                "name": "Cheese",
                "quantity": 1,
                "unit": "cup"
            }
        ]
    }];

    test('Verificar que el componente se renderice correctamente', () => {

        render(<HorizontalList receta={dish} dimensions={{ width: 100, height: 100 }} />);

        expect(screen.getByTestId('horizontalList')).toBeTruthy();
    });
});