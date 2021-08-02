import React, { ReactNode } from 'react'
import styles from './theme.module.css'

export type ThemeProviderProps = {
  children?: ReactNode
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props
  return (
    <div className={styles.theme} data-testid="theme">
      {children}
    </div>
  )
}
