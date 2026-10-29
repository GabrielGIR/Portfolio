// Íconos de línea propios (24x24, trazo currentColor): uno por categoría del XMB y las flechas de los links.
const paths = {
  proyectos: 'M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z',
  'sobre-mi': 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0',
  skills: 'M12 3 2 8l10 5 10-5-10-5zM2 13l10 5 10-5M2 18l10 5 10-5',
  contacto: 'M3 5h18v14H3zM3 6l9 7 9-7',
  file: 'M6 3h9l4 4v14H6zM14 3v5h5',
  monitor: 'M3 4h18v12H3zM8 20h8M12 16v4',
  server: 'M4 4h16v6H4zM4 14h16v6H4zM8 7h.01M8 17h.01',
  tools: 'M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5l-2.5 2.5-2.4-.6-.6-2.4z',
  'arrow-down': 'M12 5v14M6 13l6 6 6-6',
  'arrow-out': 'M7 17 17 7M8 7h9v9',
}

export type IconName = keyof typeof paths

export default function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg
      className={className}
      data-dir={name === 'arrow-out' ? 'out' : name === 'arrow-down' ? 'down' : undefined}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  )
}
