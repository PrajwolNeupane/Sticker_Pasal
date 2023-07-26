'use client';
import NavBar from "./NavBar";
import { Provider } from 'react-redux';
import { store } from '../../store';



export default function NavLayout({ children }: any) {
    return (
        <Provider store={store}>
            <NavBar/>
            {children}
        </Provider>
    )
} 