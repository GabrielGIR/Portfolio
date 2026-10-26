import Icon, { type IconName } from './Icon'
import layout from '../styles/layout.module.css'

/** Encabezado de sección: el ícono de su categoría del XMB, el título y, si hay, un dato real. */
export default function SectionHeader({
  icon,
  title,
  meta,
}: {
  icon: IconName
  title: string
  meta?: string
}) {
  return (
    <header className={layout.header}>
      <span data-reveal className={layout.badge}>
        <Icon name={icon} />
      </span>
      <h2 data-reveal="title" className={layout.title}>
        {title}
      </h2>
      {meta && (
        <p data-reveal className={layout.meta}>
          {meta}
        </p>
      )}
    </header>
  )
}
