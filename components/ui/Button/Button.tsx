import Link from "next/link"

type ButtonProps = {
  className?: string
  children: React.ReactNode
  link?: string
  type?: 'submit' | 'reset' | 'button' | undefined
  replace?: boolean
  actionLink?: string
  onClick?: () => void
}

const Button = ({
  className,
  children,
  link,
  type,
  replace,
  onClick,
}: ButtonProps) => {

  if (link) {
    return (
      <Link
        href={link}
        replace={replace}
        className={`button__wrapper ${className}`}
      >
        <div>{children}</div>
      </Link>
    )
  }
  return (
    <button
      type={type || 'button'}
      onClick={onClick}
      className={`button__wrapper ${className}`}
    >
      <div>{children}</div>
    </button>
  )
}

export default Button