import React from 'react';
import { render, screen } from '@testing-library/react-native';
import ListItem from '../../src/components/ListItem';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
    FontAwesomeIcon: ''
}))

describe('Pruebas en el componente <ListItem />', () => {
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
    const dimensions = { width: 100, height: 100 };

    test('Verificar que el componente se renderice correctamente', () => {
        
        render(<ListItem dish={dish} dimensions={ dimensions } />);

        expect(screen.getByTestId('listItem')).toBeTruthy();
    });

    test('No renderizar imagen si no se le pasa el argumento "image" ', () => {
        const dishWithNoImage = {
            "name": "Pepperoni Pizza",
            "id": 1,
            "image": "",
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
    
        const { queryByTestId } = render(
          <ListItem dish={dishWithNoImage} dimensions={ dimensions } />
        );
    
        const itemImage = queryByTestId('itemImage');
        // console.log(itemImage.props.source.uri);
        expect(itemImage.props.source.uri).toBe('');
    });
});