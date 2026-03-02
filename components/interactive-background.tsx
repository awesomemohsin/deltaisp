'use client'

import React, { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface Point {
    x: number
    y: number
    vx: number
    vy: number
    size: number
}

interface InteractiveBackgroundProps {
    particleCount?: number
    particleColor?: string
    lineColor?: string
    connectionDistance?: number
    interactionRadius?: number
    speed?: number
    opacity?: number
    className?: string
}

export const InteractiveBackground: React.FC<InteractiveBackgroundProps> = ({
    particleCount = 100,
    particleColor = 'rgba(100, 100, 255, 0.5)',
    lineColor = 'rgba(100, 100, 255, 0.2)',
    connectionDistance = 140,
    interactionRadius = 220,
    speed = 0.5,
    opacity = 0.5,
    className,
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const mouseRef = useRef<{ x: number, y: number, active: boolean, clickForce: number }>({
        x: 0,
        y: 0,
        active: false,
        clickForce: 0
    })

    const [hasMounted, setHasMounted] = React.useState(false)

    useEffect(() => {
        setHasMounted(true)
    }, [])

    useEffect(() => {
        if (!hasMounted) return
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let animationFrameId: number
        let points: Point[] = []

        const resize = () => {
            const parent = canvas.parentElement
            if (parent) {
                canvas.width = parent.clientWidth
                canvas.height = parent.clientHeight
            }
            initParticles()
        }

        const initParticles = () => {
            points = []
            for (let i = 0; i < particleCount; i++) {
                points.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * speed,
                    vy: (Math.random() - 0.5) * speed,
                    size: Math.random() * 1.5 + 1,
                })
            }
        }

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Decay click force
            if (mouseRef.current.clickForce > 0) {
                mouseRef.current.clickForce *= 0.95
                if (mouseRef.current.clickForce < 0.1) mouseRef.current.clickForce = 0
            }

            points.forEach((p, i) => {
                p.x += p.vx
                p.y += p.vy

                // Bounce off walls
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1

                // Interaction logic
                const dxMouse = p.x - mouseRef.current.x
                const dyMouse = p.y - mouseRef.current.y
                const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse)

                // Mouse interaction (Repulsion)
                if (mouseRef.current.active && distMouse < interactionRadius) {
                    const force = (interactionRadius - distMouse) / interactionRadius
                    p.x += dxMouse * force * 0.12 // Extreme repulsion
                    p.y += dyMouse * force * 0.12
                }

                // Click Shockwave
                if (mouseRef.current.clickForce > 0 && distMouse < 400) {
                    const shockForce = (400 - distMouse) / 400 * mouseRef.current.clickForce
                    p.x += dxMouse * shockForce * 0.05
                    p.y += dyMouse * shockForce * 0.05
                }

                ctx.beginPath()
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
                ctx.fillStyle = particleColor
                ctx.fill()

                // Connections (Optimized)
                const connectionDistanceSq = connectionDistance * connectionDistance
                const lineBaseColor = lineColor.replace(/[\d.]+\)$/g, '')

                for (let j = i + 1; j < points.length; j++) {
                    const p2 = points[j]
                    const dxLine = p.x - p2.x
                    const dyLine = p.y - p2.y
                    const dSq = dxLine * dxLine + dyLine * dyLine

                    if (dSq < connectionDistanceSq) {
                        const d = Math.sqrt(dSq)
                        ctx.beginPath()
                        ctx.moveTo(p.x, p.y)
                        ctx.lineTo(p2.x, p2.y)

                        // Interaction Highlight (Glow near mouse)
                        const isNearMouse = mouseRef.current.active && distMouse < 150
                        const alphaBase = (1 - d / connectionDistance)
                        const alpha = isNearMouse ? alphaBase * 0.6 : alphaBase * 0.25

                        ctx.strokeStyle = `${lineBaseColor}${alpha})`
                        ctx.lineWidth = isNearMouse ? 1.2 : 0.8
                        ctx.stroke()
                    }
                }
            })

            animationFrameId = requestAnimationFrame(draw)
        }

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect()
            mouseRef.current.x = e.clientX - rect.left
            mouseRef.current.y = e.clientY - rect.top
            mouseRef.current.active = true
        }

        const handleMouseLeave = () => {
            mouseRef.current.active = false
        }

        const handleMouseDown = () => {
            mouseRef.current.clickForce = 15 // Trigger shockwave
        }

        window.addEventListener('resize', resize)
        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mouseleave', handleMouseLeave)
        window.addEventListener('mousedown', handleMouseDown)

        resize()
        draw()

        return () => {
            window.removeEventListener('resize', resize)
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mouseleave', handleMouseLeave)
            window.removeEventListener('mousedown', handleMouseDown)
            cancelAnimationFrame(animationFrameId)
        }
    }, [particleCount, particleColor, lineColor, connectionDistance, interactionRadius, speed])

    return (
        <canvas
            ref={canvasRef}
            className={cn("absolute inset-0 pointer-events-none z-0", className)}
            style={{ opacity }}
        />
    )
}
