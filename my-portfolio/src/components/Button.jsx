const VARIANTS = {
  primary: 'bg-lime text-on hover:brightness-95',
  ghost: 'border border-line hover:border-acc hover:text-acc',
}

export default function Button({ href, onClick, variant = 'primary', children, ...rest }) {
  const className = `inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition active:scale-95 ${VARIANTS[variant]}`

  if (href) {
    const isExternal = href.startsWith('http')
    const externalProps = isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {}
    return (
      <a href={href} onClick={onClick} className={className} {...externalProps} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={className} {...rest}>
      {children}
    </button>
  )
}