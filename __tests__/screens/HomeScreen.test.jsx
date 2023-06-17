import React from 'react';
import { render, screen } from '@testing-library/react-native';
import HomeScreen from '../../src/screens/HomeScreen';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
    FontAwesomeIcon: ''
}))

describe('Pruebas en el <HomeScreen />', () => {
    test('renders without crashing', () => {
        render(<HomeScreen />);
        
        expect(screen.getByTestId('homeScreen')).toBeTruthy();
    });
});