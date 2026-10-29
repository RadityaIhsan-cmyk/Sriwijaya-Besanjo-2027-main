import { ImageIcon, RotateCw } from "lucide-react"
import styles from "./documentation-card.module.css"

type DocumentationCardProps = {
  title: string
  description: string
  imageSrc?: string
}

/** Adapted from the supplied flip card, without a styled-components dependency. */
export default function DocumentationCard({ title, description, imageSrc }: DocumentationCardProps) {
  return (
    <div
      className={styles.card}
      tabIndex={0}
      role="group"
      aria-label={`${title}. ${description}`}
    >
      <span className={styles.inner}>
        <span className={`${styles.face} ${styles.front}`} aria-hidden="true">
          {imageSrc ? (
            // Native image keeps local replacement photos simple to configure.
            // eslint-disable-next-line @next/next/no-img-element
            <img className={styles.photo} src={imageSrc} alt="" loading="lazy" />
          ) : (
            <span className={styles.placeholder}>
              <ImageIcon size={42} strokeWidth={1.3} aria-hidden="true" />
              <span className={styles.placeholderTitle}>Foto Dokumentasi</span>
              <span className={styles.placeholderNote}>Foto akan ditambahkan</span>
            </span>
          )}
          <span className={styles.caption}>
            <span className={styles.title}>{title}</span>
            <span className={styles.hint}><RotateCw size={14} aria-hidden="true" /> Arahkan kursor</span>
          </span>
        </span>
        <span className={`${styles.face} ${styles.back}`} aria-hidden="true">
          <span className={styles.eyebrow}>Cerita di balik momen</span>
          <span className={styles.backTitle}>{title}</span>
          <span className={styles.divider} />
          <span className={styles.description}>{description}</span>
          <span className={styles.backHint}>Geser kursor keluar untuk kembali</span>
        </span>
      </span>
    </div>
  )
}
