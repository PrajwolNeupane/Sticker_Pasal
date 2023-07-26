"use client"

import NavLayout from "@/app/components/NavBar/NavLayout"
import { store } from "@/app/store"
import { Provider } from "react-redux"

export default function StateProviderLayout({ children }: any) {
    return (
        <Provider store={store}>
            <NavLayout >
                {children}
            </NavLayout>
        </Provider>
    )
}