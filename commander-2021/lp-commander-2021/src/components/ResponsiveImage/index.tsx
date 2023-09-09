import React, { useCallback, useEffect, useState } from 'react'

const orderQueries = queries => {
  const reordered = queries?.sort((a, b) => (a.size < b.size ? 1 : -1))

  return reordered
}

interface IResponsiveImageProps {
  queries: {
    img: string
    size: number
  }[]
  tag?: keyof JSX.IntrinsicElements
  alt?: string
  title?: string
  className?: string
  onClick?: () => void
  id?: string
  children?: JSX.Element | string
}

const ResponsiveImageComp = ({
  queries,
  tag = 'img',
  title,
  alt,
  className,
  onClick,
  id,
  children,
  ...props
}: IResponsiveImageProps) => {
  const [queriesOrdered, setQueriesOrdered] = useState(orderQueries(queries))

  const getQueriesOrdered = useCallback(() => {
    return orderQueries(queries)
  }, [queries])

  useEffect(() => {
    setQueriesOrdered(queries)
  }, [queries])

  const [wSize, setWSize] = useState(global?.window?.innerWidth)
  useEffect(() => {
    const onResize = e => {
      setWSize(e?.target?.innerWidth)
    }

    global.window.addEventListener('resize', onResize)

    return () => global.window.removeEventListener('resize', onResize)
  }, [])

  const [currentImage, setCurrentImage] = useState(
    queries[0].img,
  )
  useEffect(() => {
    const getImage = queriesOrdered?.filter(
      setting => wSize >= setting.size,
    )?.[0]?.img

    setCurrentImage(getImage)
  }, [queriesOrdered, wSize])

  const Tag = `${tag}` as keyof JSX.IntrinsicElements

  return currentImage ? (
    <Tag
      className={`responsive-image ${className}`}
      src={tag === 'img' ? currentImage : null}
      alt={tag === 'img' ? alt : null}
      title={tag === 'img' ? title : null}
      style={{ backgroundImage: tag === 'div' && `url(${currentImage})` }}
      onClick={onClick}
      id={id}
      {...props}
    >
      {children}
    </Tag>
  ) : null
}

export const ResponsiveImage = ResponsiveImageComp
