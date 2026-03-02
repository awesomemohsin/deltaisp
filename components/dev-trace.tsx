'use client'

import { useEffect } from 'react'

export function DevTrace() {
    useEffect(() => {
        console.log("%c Build by AwesomeMohsin ", "background: #0C58A4; color: #fff; font-weight: bold; padding: 4px; border-radius: 4px;");
    }, [])

    return null
}
