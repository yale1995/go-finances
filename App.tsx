import React from 'react'
import theme from './src/global/styles/theme'
import AppLoading from 'expo-app-loading'

import { Dashboard } from './src/screens/Dashboard'
import { ThemeProvider } from 'styled-components'
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins'

export default function Home() {
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_500Medium, Poppins_700Bold })

  if(!fontsLoaded) <AppLoading/>

  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  )
}