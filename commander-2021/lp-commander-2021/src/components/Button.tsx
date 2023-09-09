import React, { useMemo } from 'react'

interface IButtonProps {
  title?: string
  text?: string | React.ReactNode;
  icon?: any
  className?: string
  iconSide?: 'left' | 'right'
  size?: 'normal' | 'small' | 'big'
  dark?: boolean
  link?: string
  short?: boolean
  style?: object
  prefix?: JSX.Element;
  onClick?: () => void
  disabled?: boolean
  id?: string
}

interface ILinkTag extends IButtonProps {
  children: React.ReactNode
  className: string
}

export const Button = ({
  iconSide = 'right',
  dark = true,
  short = false,
  icon: Icon,
  size = 'normal',
  id,
  className = '',
  title,
  onClick,
  prefix = <></>,
  disabled = false,
  text,
  ...props
}: IButtonProps): JSX.Element => {
  const Tag = ({ children, prefix, title, ...tagProps }: ILinkTag) =>
    tagProps.link ? (
      <a href={tagProps.link} role="button" {...tagProps} target="_blank">
        {children}
      </a>
    ) : (
      <div role="button" {...tagProps} aria-label="Button">
        {children}
      </div>
    )

  return useMemo(
    () => (
      <Tag
        id={id}
        title={title ?? ''}
        className={`base-button ${size} ${dark ? '' : 'invert'} ${className} ${disabled ? 'disabled' : ''
          } ${short ? 'short' : ''}`}
        onClick={() => {
          if (disabled) return
          if (onClick) onClick()
        }}
        text={text}
        {...props}
      >
        <div>
          {iconSide === 'left' && !!Icon && <Icon />}
          {prefix}
          {text}
          {iconSide === 'right' && !!Icon && <Icon />}
        </div>
      </Tag>
    ),
    [dark, id, size, Icon],
  )
}
